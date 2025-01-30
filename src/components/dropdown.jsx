import { useState } from "react";
import { cn } from "../shared/cn";
import DropdownItem from "./dropdown-item";

const Dropdown = ({ data, status, setStatus }) => {
  const [isShow, setIsShow] = useState(false);

  const changeStatus = (value) => {
    setStatus(value);
    setIsShow(false);
  };

  return (
    <div className="relative min-w-40">
      <div
        className="cursor-pointer rounded bg-sky-200 p-2 text-center select-none dark:bg-sky-500"
        onClick={() => setIsShow((prev) => !prev)}
      >
        {data.find((item) => status === item.value).title}
      </div>
      <div className={cn("dropdown", { "visible opacity-100": isShow })}>
        {data.map((item) => (
          <DropdownItem key={item.id} {...item} selectedItem={status} onChange={changeStatus} />
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
