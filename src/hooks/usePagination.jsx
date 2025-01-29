import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();



  // const prevPageHandler = () => setPage((prev) => prev - 1);
  // const nextPageHandler = () => setPage((prev) => prev + 1);



  return {
    page,
    setPage,
    prevPageHandler,
    nextPageHandler,
  };
};

export default usePagination;
