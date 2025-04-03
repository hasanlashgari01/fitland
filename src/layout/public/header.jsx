import { useEffect, useState } from "react";
import { HiBars3, HiOutlinePercentBadge, HiOutlineSparkles, HiOutlineStar, HiOutlineUser } from "react-icons/hi2";
import { Link, useLocation } from "react-router";
import BagIcon from "../../components/bag-icon";
import MenuLink from "../../components/menu-link";
import { useUserCategoryList } from "../../hooks/useCategory";
import { useMe } from "../../hooks/useUser";
import { cn } from "../../shared/cn";

const Header = () => {
  const location = useLocation();
  const { data } = useMe();
  const { data: categories, isLoading: isLoadingCategory } = useUserCategoryList();
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    if (isMenu) {
      setIsMenu(false);
    }

    return () => {};
  }, [location.pathname]);

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
          <div className={cn("max-lg:icon-box lg:hidden")}>
            <HiBars3 size={24} className="cursor-pointer" onClick={() => setIsMenu(true)} />
          </div>

          <div>
            <Link to="/">
              <img src="/src/assets/images/logo.svg" alt="" className="h-4.5 lg:h-6 xl:h-8" />
            </Link>
          </div>

          <div className="flex gap-4">
            <BagIcon />
            <Link
              to={data?.role ? (data?.role === "ADMIN" ? "/admin" : "/my-account") : "/login"}
              className="icon-box max-xl:hidden"
              replace
            >
              <HiOutlineUser size={24} />
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
        onClick={() => setIsMenu(false)}
        className={cn("fixed inset-0 z-20 bg-gray-600/50 transition-all xl:hidden", {
          "invisible opacity-0 delay-300": !isMenu,
        })}
      >
        <ul
          id="header-mobile-menu"
          onClick={(e) => e.stopPropagation()}
          className={cn("absolute h-full w-72 space-y-3 bg-white px-8 py-4 transition-all duration-300 sm:w-82", {
            "translate-x-full": !isMenu,
          })}
        >
          {renderCategories()}
        </ul>
      </div>
    </>
  );
};

export default Header;
