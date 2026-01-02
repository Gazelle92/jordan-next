import React, { ReactNode, useEffect, useRef } from "react";
import Times from "@/ui/svg/times.svg";

type FullDialogProps = {
  open: boolean;
  onClose?: () => void;
  reverse?: boolean;
  children: ReactNode;
};

export const FullDialog = ({ open, onClose, reverse, children }: FullDialogProps) => {
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
      className={`fixed max-w-md mx-auto p-5 flex flex-col inset-0 z-50 justify-center transition-all duration-400 ${open
        ? "pointer-events-auto bg-black/50 backdrop-blur opacity-100"
        : "pointer-events-none bg-black/0 backdrop-blur-0 opacity-0"
        }`}
      aria-modal="true"
      aria-hidden={!open}
    >
      <div
        className={`flex dialog h-full flex-col
          ${reverse ? "reverse" : ""}
          ${open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
          }`}
      >
        {onClose && (
          <div className="flex justify-end">
            <button
              className="p-5 text-2xl"
              onClick={onClose}
              aria-label="Close dialog"
            >
              <Times className="size-5" />
            </button>
          </div>
        )}
        <div
          ref={dialogRef}
          className={`w-full px-3 pb-3 h-full overflow-y-auto flex-grow-1 flex flex-col justify-center transition-transform duration-400 ${open
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
