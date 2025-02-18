import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const IS_INVENTORY = "is_inventory";
const IS_OFF = "is_off";
const SORT_BY = "sort";

const useFilter = (isActive, filterKey) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isInventory, setIsInventory] = useState(searchParams.get(IS_INVENTORY));
  const [isOff, setIsOff] = useState(searchParams.get(IS_OFF));
  const [sort, setSort] = useState(searchParams.get(SORT_BY));

  useEffect(() => {
    const is_inventory = searchParams.get(IS_INVENTORY);
    setIsInventory(is_inventory ? is_inventory : 0);
  }, [searchParams.get(IS_INVENTORY)]);

  useEffect(() => {
    const is_off = searchParams.get(IS_OFF);
    setIsOff(is_off ? is_off : 0);
  }, [searchParams.get(IS_OFF)]);

  useEffect(() => {
    searchParams.get(SORT_BY) && setSort(searchParams.get(SORT_BY));
  }, [searchParams.get(SORT_BY)]);

  const filterBtnHandler = () => {
    return setSearchParams(
      (prev) => {
        isActive ? prev.delete([filterKey]) : prev.set([filterKey], 1);
        return prev;
      },
      { replace: true },
    );
  };

  const changeSortHandler = (event) => {
    const { value, parentElement, classList } = event.target;

    Array.from(parentElement.children).forEach((item) => item.classList.remove("sort__active"));
    classList.add("sort__active");

    return setSearchParams(
      (prev) => {
        prev.set("sort", value);
        return prev;
      },
      { replace: true },
    );
  };

  const resetHandler = () => setSearchParams({});

  return {
    isInventory: Number(isInventory),
    isOff: Number(isOff),
    sort,
    changeSortHandler,
    resetHandler,
    filterBtnHandler,
  };
};

export default useFilter;
