import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { cn } from "../shared/cn";

const Pagination = ({ data }) => {
  const { totalPage } = data.pagination;
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page") < 1 ? 1 : searchParams.get("page")));

  useEffect(() => {
    setSearchParams({ page });
  }, [page]);

  const prevPageHandler = () => setPage((prev) => prev - 1);
  const nextPageHandler = () => setPage((prev) => prev + 1);

  const renderPages = () => {
    const pages = [];

    for (let page = 1; page <= totalPage; page++) {
      pages.push(page);
    }

    return pages;
  };

  return (
    <>
      {totalPage !== 0 && totalPage > 1 && (
        <div className="mt-10 flex justify-center gap-2">
          <button className="pagination-btn" disabled={page === 1} onClick={prevPageHandler}>
            قبلی
          </button>
          {renderPages(data).map((item, index) => (
            <span
              key={index}
              className={cn("pagination-btn", { "bg-amber-500 text-white": item === page })}
              onClick={() => setPage(item)}
            >
              {item}
            </span>
          ))}
          <button className="pagination-btn" disabled={page === totalPage} onClick={nextPageHandler}>
            بعدی
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
