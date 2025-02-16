import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router";
import useFilter from "../hooks/useFilter";
import { cn } from "../shared/cn";

const FilterBtn = ({ text, filterKey }) => {
  const [searchParams] = useSearchParams();
  const [isActive, setIsActive] = useState(searchParams.get(filterKey) || 0);
  const { filterBtnHandler } = useFilter(isActive, filterKey);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsActive(searchParams.get(filterKey));
  }, [searchParams.get(filterKey)]);

  return (
    <div
      className="mt-2 flex cursor-pointer items-center justify-between select-none"
      onClick={() => {
        filterBtnHandler();
        if (pathname === "/products") window.location.reload();
      }}
    >
      <span>{text}</span>
      <div
        className={cn("relative h-7 w-12 rounded-full p-1 transition-colors ease-linear", {
          "bg-gray-300": !isActive,
          "bg-teal-700": isActive,
        })}
      >
        <div
          className={cn("absolute top-1 bottom-1 size-5 rounded-full bg-white transition-all ease-linear", {
            "left-1": !isActive,
            "left-6": isActive,
          })}
        ></div>
      </div>
    </div>
  );
};

export default FilterBtn;
