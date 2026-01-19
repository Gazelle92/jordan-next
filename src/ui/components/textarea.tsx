import clsx from "clsx";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <textarea className={clsx("w-full text-justify outline-none focus:outline-none focus:ring-0", className)} {...props} />
  );
};
