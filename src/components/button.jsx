import { cn } from "../shared/cn";

const Button = ({ text, onClick, isDisabled, className, icon }) => {
  return (
    <button
      className={cn(
        "bg-primary disabled:bg-primary/50 flex min-h-10 min-w-24 items-center justify-center gap-x-2.5 rounded-lg px-5 text-white transition md:cursor-pointer",
        className,
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      <span>{text}</span>
      {icon && icon}
    </button>
  );
};

export default Button;
