import { cn } from "../shared/cn";

const DropdownItem = ({ selectedItem, title, value, onChange }) => {
  return (
    <span
      className={cn("dropdown-item", { "dropdown-item--active": selectedItem === value })}
      onClick={() => onChange(value)}
    >
      {title}
    </span>
  );
};

export default DropdownItem;
