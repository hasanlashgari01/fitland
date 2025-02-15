import { useState } from "react";
import {
  HiBars3,
  HiOutlinePercentBadge,
  HiOutlineShoppingCart,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineUser,
} from "react-icons/hi2";
import { Link } from "react-router";
import MenuLink from "../../components/menu-link";
import { useCategories } from "../../hooks/useCategory";
import { useMe } from "../../hooks/useUser";
import { cn } from "../../shared/cn";

const Header = () => {
  const { data } = useMe();
  const { data: categories, isLoading: isLoadingCategory } = useCategories();
  const [isMenu, setIsMenu] = useState(false);

  const renderCategories = () => {
    return (
      !isLoadingCategory &&
      categories.data.map((category) => (
        <MenuLink key={category._id} path={`/category/${category.slug}`} text={category.name} />
      ))
    );
  };

  return (
    <>
      <header className="container py-4 lg:py-6 xl:py-8">
        <div className="flex items-center justify-between">
          <div className="xl:hidden">
            <HiBars3 size={24} className="cursor-pointer" onClick={() => setIsMenu(true)} />
          </div>

          <div>
            <Link to="/">
              <img src="/src/assets/images/logo.svg" alt="" className="h-4.5 lg:h-6 xl:h-8" />
            </Link>
          </div>

          <div className="flex gap-4">
            <Link
              to={(data?.role === "ADMIN" ? "/admin" : "/my-account") ?? "/login"}
              className="rounded-xl p-3 shadow-2xl max-xl:hidden"
            >
              <HiOutlineUser size={24} />
            </Link>
            <Link to="/cart">
              <HiOutlineShoppingCart className="xl:bg-primary size-6 xl:size-12 xl:rounded-xl xl:p-3 xl:text-white xl:shadow-2xl" />
            </Link>
          </div>
        </div>

        <ul
          id="header-desktop-menu"
          className="mt-8 flex justify-between rounded-2xl bg-gray-50 px-10 py-5 max-xl:hidden"
        >
          <div className="flex gap-10">{renderCategories()}</div>
          <div className="flex gap-10">
            <MenuLink path="/news" text="جدیدترین محصولات">
              <HiOutlineStar size={18} className="stroke-primary" />
            </MenuLink>
            <MenuLink path="/off" text="تخفیفات ویژه">
              <HiOutlinePercentBadge size={18} className="stroke-primary" />
            </MenuLink>
            <MenuLink path="/popular" text="پرفروش ترین ها">
              <HiOutlineSparkles size={18} className="stroke-primary" />
            </MenuLink>
          </div>
        </ul>
      </header>

      <div
        className={cn("fixed inset-0 bg-gray-600/50 transition-all xl:hidden", {
          "invisible opacity-0 delay-300": !isMenu,
        })}
        onClick={() => setIsMenu(false)}
      >
        <ul
          id="header-mobile-menu"
          className={cn("absolute h-full w-72 space-y-3 bg-white px-8 py-4 transition-all duration-300 sm:w-82", {
            "translate-x-full": !isMenu,
          })}
          onClick={(e) => e.stopPropagation()}
        >
          {renderCategories()}
        </ul>
      </div>
    </>
  );
};

export default Header;
