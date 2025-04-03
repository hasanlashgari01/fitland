import { useEffect } from "react";
import { useLocation } from "react-router";

const useTitle = (title) => {
  const location = useLocation();

  const parent = "فیت لند";

  useEffect(() => {
    if (title) {
      document.title = `${parent} - ${title}`;
    } else {
      document.title = title;
    }
  }, [location, title]);
};

export default useTitle;
