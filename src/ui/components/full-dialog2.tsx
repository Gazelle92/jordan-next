import React, { ReactNode, useEffect, useRef } from "react";
import Times from "@/ui/svg/times.svg";

type FullDialogProps = {
  open: boolean;
  onClose?: () => void;
  reverse?: boolean;
  children: ReactNode;
};

export const FullDialog2 = ({ open, onClose, reverse, children }: FullDialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Prevent background scroll when dialog is open


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
        className={`flex dialog h-full flex-col pt-[60px]
          ${reverse ? "reverse" : "border border-solid"}
          ${open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
          }`}
      >

        <div
          ref={dialogRef}
          className={`w-full px-3 pb-3 h-full overflow-y-auto flex-grow-1 flex flex-col justify-center transition-transform duration-400 ${open
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-3"
            }`}
        >
          {children}
        </div>
        {onClose && (
          <div className="flex justify-center items-center mx-3 mb-5 h-[40px] text-center text-[24px] font-black bg-[#FF3B49] text-black h-[40px]">
            <span className="text-[18px] ">확인</span>
          </div>
        )}
      </div>
    </div>
  );
};
