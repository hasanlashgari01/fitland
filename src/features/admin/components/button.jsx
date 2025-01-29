import { cn } from "../../../shared/cn";

const Button = ({ title, status = "add", action }) => {
  return (
    <button
      className={cn("cursor-pointer rounded-lg border px-4 py-2 text-white", {
        "border-blue-400 bg-blue-500": status === "add",
        "bg-red-500": status === "delete",
      })}
      onClick={action}
    >
      {status === "add" && `افزودن ${title} جدید`}
      {status === "delete" && `حذف`}
    </button>
  );
};
export default Button;
