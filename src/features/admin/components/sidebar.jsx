import { useEffect, useRef } from "react";
import { NavLink } from "react-router";
import { cn } from "../../../shared/cn";
import items from "./../../../data/admin-sidebar.json";
import SidebarProfile from "./sidebar-profile";
import ThemeSwitcher from "./theme-switcher";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      const isAdminPage = event.target?.getAttribute("href")?.startsWith("/admin/");
      if ((sidebarRef.current && !sidebarRef.current.contains(event.target)) || isAdminPage) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <aside className={cn("sidebar", { "translate-x-0": isOpen })} ref={sidebarRef}>
      <div className="flex flex-col gap-2 border-slate-100 px-2 py-1.5 transition-opacity dark:border-slate-950">
        <SidebarProfile />
        <div className="flex flex-col mt-8">
          {items.map((item) => (
            <NavLink key={item.id} to={item.path} className="text-500 rounded-lg p-3 transition">
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
      <ThemeSwitcher />
    </aside>
  );
};

export default Sidebar;
