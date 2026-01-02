import React from "react";
import clsx from "clsx";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  children?: React.ReactNode;
  className?: string;
};

/**
 * 체크박스 기본 브라우저 디자인은 숨기고
 * 정사각형 border box만 보이도록 커스텀
 */
export const Checkbox = ({ children, className, ...props }: CheckboxProps) => (
  <label
    className={clsx("inline-flex items-center cursor-pointer gap-2", className)}
  >
    <input
      type="checkbox"
      className="peer appearance-none size-3 border-1 border-red outline-none 
        transition-colors duration-150
        checked:bg-foreground
        relative
        "
      style={{ borderRadius: 0 }}
      {...props}
    />
    {/* 체크 표시 */}
    <span
      className={clsx(
        "pointer-events-none absolute w-5 h-5 flex items-center justify-center",
        "select-none"
      )}
      style={{ left: 0, position: "relative", marginLeft: "-1.75rem" }}
      aria-hidden="true"
    ></span>
    <span className="text-[12px] font-medium">{children}</span>
  </label>
);
