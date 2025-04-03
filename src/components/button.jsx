import { cn } from "../shared/cn";

const Button = ({ text, onClick, isDisabled, className }) => {
  return (
    <button
      className={cn(
        "bg-primary disabled:bg-primary/50 min-h-10 min-w-24 rounded-lg px-5 text-white md:cursor-pointer",
        className,
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
