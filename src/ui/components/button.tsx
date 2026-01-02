import clsx from "clsx";
import { jordan } from "../font";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  reverse?: boolean;
};

export const Button = ({
  children,
  reverse = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        reverse
          ? "bg-black text-[#FF3B49] border-1 border-[#FF3B49]"
          : "bg-[#FF3B49] text-black border-1 border-black",
        "w-full min-h-10 py-1.5 leading-[1]",
        "text-center text-[24px] font-black",
        jordan.className,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
