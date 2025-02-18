import { useState } from "react";
import { HiOutlineAdjustmentsHorizontal, HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { cn } from "../shared/cn";
import Filter from "./filter";
import Sort from "./sort";

const FilterMobile = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <div>
        <div className="flex items-center justify-between xl:hidden">
          <div
            className="flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5"
            onClick={() => setIsModal(true)}
          >
            <HiOutlineAdjustmentsHorizontal size={24} />
            <span>فیلترها</span>
          </div>
          <div className="flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5">
            <HiOutlineBars3BottomLeft size={24} />
            <span>مرتب سازی بر اساس</span>
          </div>
        </div>
        <div className="flex gap-4 *:cursor-pointer *:select-none max-xl:hidden">
          <Sort value="newest">جدیدترین</Sort>
          <Sort value="oldest">قدیمی‌ترین</Sort>
          <Sort value="expensive">گران‌ترین</Sort>
          <Sort value="cheap">ارزان‌ترین</Sort>
          <Sort value="discount">بیشترین‌تخفیف</Sort>
        </div>
      </div>

      <div
        className={cn("fixed inset-0 bg-gray-500/70 transition-all", {
          "invisible opacity-0": !isModal,
          "visible opacity-100": isModal,
        })}
        onClick={() => setIsModal(false)}
      >
        <div
          className={cn(
            "absolute right-0 bottom-0 left-0 z-10 rounded-t-3xl bg-white px-5 py-10 transition-transform duration-300",
            {
              "invisible translate-y-full opacity-0": !isModal,
              "visible translate-y-0 opacity-100": isModal,
            },
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <Filter />
        </div>
      </div>
    </>
  );
};

export default FilterMobile;
