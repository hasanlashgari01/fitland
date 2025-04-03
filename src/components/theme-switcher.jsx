import { useTheme } from "../context/admin-theme-context";
import themes from "../data/theme-btn.json";
import { cn } from "../shared/cn";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="grid grid-cols-3 gap-2 rounded-lg bg-gray-100 text-center dark:bg-gray-950">
      {themes.map((item) => (
        <span
          key={item.id}
          className={cn("theme-btn", {
            "bg-primary-500 py-3 text-white": theme === item.value,
          })}
          onClick={() => setTheme(item.value)}
        >
          {item.title}
        </span>
      ))}
    </div>
  );
};
export default ThemeSwitcher;
