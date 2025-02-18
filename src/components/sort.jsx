import { useEffect } from "react";
import useFilter from "../hooks/useFilter";

const Sort = ({ value, children }) => {
  const { sort, changeSortHandler } = useFilter();

  useEffect(() => {
    document.querySelectorAll("option").forEach((item) => {
      if (item.value === sort) item.classList.add("sort__active");
    });
  }, []);

  return (
    <option value={value} onClick={(e) => changeSortHandler(e)}>
      {children}
    </option>
  );
};

export default Sort;
