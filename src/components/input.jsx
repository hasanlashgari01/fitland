import { cn } from "../shared/cn";

const Input = ({ value, onChange, isDisabled, className }) => {
  return (
    <input
      type="text"
      value={value ?? ""}
      className={cn("h-10 w-full rounded-lg border border-[#D6D6D6] px-3 outline-none", className)}
      onChange={(e) => onChange(e.target.value)}
      disabled={isDisabled}
    />
  );
};

export default Input;
