import { cn } from "../../../shared/cn";

const Input = ({ id, label, value, onChange, dir = "rtl", className }) => {
  return (
    <label htmlFor={id} className={cn("min-w-64 cursor-text sm:min-w-72 lg:min-w-92", className)}>
      <span className="text-sm">{label}</span>
      <div className="relative mt-2 rounded-lg border border-gray-400 px-4 py-3">
        <input
          type="text"
          id={id}
          dir={dir}
          name={id}
          value={value ?? ""}
          className="w-full border-none outline-none"
          onChange={(e) => onChange(e)}
        />
      </div>
    </label>
  );
};

export default Input;
