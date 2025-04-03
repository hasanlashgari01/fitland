import { HiOutlineBars3 } from "react-icons/hi2";
import BagIcon from "../../../components/bag-icon";

const Header = () => {
  const sidebarHandler = () => {
    const sidebarElem = document.querySelector("#sidebar");

    sidebarElem.classList.toggle("max-md:translate-x-full");
  };

  return (
    <header className="flex flex-1 items-center justify-between bg-white mb-8 px-6 py-4 lg:px-8">
      <div>
        <div
          className="flex size-13 items-center justify-center rounded-full bg-gray-100 text-slate-500 lg:hidden"
          onClick={sidebarHandler}
        >
          <HiOutlineBars3 size={22} />
        </div>
      </div>
      <div className="flex gap-5">
        <BagIcon />
      </div>
    </header>
  );
};

export default Header;
