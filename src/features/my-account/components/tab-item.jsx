import { useSearchParams } from "react-router";

const TabItem = ({ param, text, count = 0, defaultActive, isLoading }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <li
      className={`tab ${defaultActive ? "tab--active" : ""}`}
      data-param={param}
      onClick={() => setSearchParams({ activeTab: param })}
    >
      <div className="flex">
        <div className="text-tiny md:text-sm lg:text-base">{text}</div>
        {!isNaN(count) && <div className={`tab__badge ${isLoading ? "fade-in" : ""}`}>{count}</div>}
      </div>
    </li>
  );
};

export default TabItem;
