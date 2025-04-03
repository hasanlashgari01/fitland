import { HiOutlineArrowLeftStartOnRectangle } from "react-icons/hi2";
import { NavLink } from "react-router";
import { items } from "../../../data/my-account-sidebar";
import { useMe } from "../../../hooks/useUser";
import { removeCookie } from "../../../shared/cookie";

const Sidebar = () => {
  const { data } = useMe();

  const sidebarHideHandler = () => {
    const sidebarElem = document.querySelector("#sidebar");

    sidebarElem.classList.toggle("max-md:translate-x-full");
  };

  const logoutHandler = () => {
    removeCookie("accessToken");
    location.reload();
  };

  return (
    <aside
      id="sidebar"
      className="top-21 right-0 bottom-0 left-0 z-10 min-w-72 bg-white shadow transition-transform max-md:fixed max-md:translate-x-full"
    >
      <div className="sticky top-0 flex flex-col gap-2 border-slate-100 transition-opacity max-lg:px-6 dark:border-slate-950">
        <div className="flex items-center gap-2.5 border-b-2 border-gray-100 bg-linear-to-b py-8 lg:flex-col lg:from-rose-100 lg:dark:from-rose-950/50">
          <div className="size-11 overflow-hidden rounded-full lg:size-25">
            <img src={data?.avatar || "/public/avatar.png"} alt="" className="size-full" />
          </div>
          <div>
            <h3 className="mb-2 text-sm">{data.fullName}</h3>
            <h4 className="text-sm">{data.email ?? data.mobile}</h4>
          </div>
        </div>

        <ul id="my-account-menu" className="mt-2 flex flex-col gap-1 px-6 lg:px-8">
          {items.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className="flex items-center gap-2 border-b border-gray-200 px-3 py-6 transition"
              onClick={sidebarHideHandler}
            >
              {item.icon}
              {item.title}
            </NavLink>
          ))}
          <button
            className="text-500 flex items-center gap-2 rounded-lg px-3 py-2 text-right transition"
            onClick={logoutHandler}
          >
            <HiOutlineArrowLeftStartOnRectangle size={20} />
            خروج
          </button>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
