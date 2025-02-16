import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const IS_INVENTORY = "is_inventory";
const IS_OFF = "is_off";

const useFilter = (isActive, filterKey) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isInventory, setIsInventory] = useState(searchParams.get(IS_INVENTORY));
  const [isOff, setIsOff] = useState(searchParams.get(IS_OFF));

  useEffect(() => {
    const is_inventory = searchParams.get(IS_INVENTORY);
    setIsInventory(is_inventory ? is_inventory : 0);
  }, [searchParams.get(IS_INVENTORY)]);

  useEffect(() => {
    const is_off = searchParams.get(IS_OFF);
    setIsOff(is_off ? is_off : 0);
  }, [searchParams.get(IS_OFF)]);

  const filterBtnHandler = () => {
    return setSearchParams(
      (prev) => {
        isActive ? prev.delete([filterKey]) : prev.set([filterKey], 1);
        return prev;
      },
      { replace: true },
    );
  };

  const resetHandler = () => setSearchParams({});

  return {
    isInventory: Number(isInventory),
    isOff: Number(isOff),
    resetHandler,
    filterBtnHandler,
  };
};

export default useFilter;
