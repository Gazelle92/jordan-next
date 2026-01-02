import React, { ReactNode, useEffect, useRef } from "react";
import Times from "@/ui/svg/times.svg";

type VideoDialogProps = {
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
};

export const VideoDialog = ({ open, onClose, children }: VideoDialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Prevent background scroll when dialog is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on click outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        open &&
        dialogRef.current &&
        e.target instanceof Node &&
        !dialogRef.current.contains(e.target)
      ) {
        onClose?.();
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  return (
    <div
      className={`fixed max-w-md mx-auto p-5 flex flex-col inset-0 z-50 justify-center transition-all duration-400 ${
        open
          ? "pointer-events-auto bg-black/50 backdrop-blur opacity-100"
          : "pointer-events-none bg-black/0 backdrop-blur-0 opacity-0"
      }`}
      aria-modal="true"
      aria-hidden={!open}
    >
      {onClose && (
        <div className="flex justify-end">
          <button
            className="p-5 text-2xl text-white"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <Times className="size-5" />
          </button>
        </div>
      )}
      <div
        className={`flex video-dialog h-full flex-col ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          ref={dialogRef}
          className={`w-full h-full overflow-y-auto flex-grow-1 flex flex-col justify-center transition-transform duration-400 pb-15 ${
            open
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-95 opacity-0 translate-y-3"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
