import clsx from "clsx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input className={clsx("w-full text-right outline-none focus:outline-none focus:ring-0", className)} {...props} />
  );
};
