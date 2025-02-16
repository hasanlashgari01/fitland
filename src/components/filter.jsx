import useFilter from "../hooks/useFilter";
import { cn } from "../shared/cn";
import FilterBtn from "./filter-btn";
import FilterExpand from "./filter-expand";

const Filter = ({ isHidden }) => {
  const { resetHandler } = useFilter();

  return (
    <div
      className={cn("h-fit min-w-80 gap-4 rounded-2xl px-4.5 py-4 text-sm", {
        "border border-gray-300 max-xl:hidden": isHidden,
      })}
    >
      <div className="flex justify-between">
        <span>فیلترها</span>
        <button className="cursor-pointer" onClick={resetHandler}>
          حذف فیلترها
        </button>
      </div>
      <div className="py-6">
        <FilterBtn text="محصولات موجود" filterKey="is_inventory" />
        <FilterBtn text="محصولات تخفیف دار" filterKey="is_off" />
      </div>
      <FilterExpand />
    </div>
  );
};

export default Filter;
