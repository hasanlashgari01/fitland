import { useEffect, useRef, useState } from "react";
import { cn } from "../shared/cn";
import DropdownItem from "./dropdown-item";

const Dropdown = ({ data, status, setStatus, isShowAll = true }) => {
  const [isShow, setIsShow] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeStatus = (value) => {
    setStatus(value);
    setIsShow(false);
  };

  return (
    <div className="relative min-w-32 lg:min-w-40 text-xs sm:text-sm lg:text-base" ref={dropdownRef}>
      <div
        className="cursor-pointer rounded bg-sky-200 p-2 text-center select-none dark:bg-sky-500"
        onClick={() => setIsShow((prev) => !prev)}
      >
        {status === null ? "همه" : data.find((item) => status === item.value)?.title}
      </div>
      <div className={cn("dropdown", { "visible opacity-100": isShow })}>
        {isShowAll && <DropdownItem title="همه" value={null} selectedItem={status} onChange={changeStatus} />}
        {data.map((item) => (
          <DropdownItem key={item.id} {...item} selectedItem={status} onChange={changeStatus} />
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
