import { useEffect, useRef } from "react";

const useInfiniteScroll = ({ hasMore, loadMore }) => {
  const observer = useRef(null);
  const lastElementRef = useRef(null);

  useEffect(() => {
    if (!hasMore) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 },
    );

    if (lastElementRef.current) observer.current.observe(lastElementRef.current);

    return () => observer.current && observer.current.disconnect();
  }, [hasMore, loadMore]);

  return lastElementRef;
};

export default useInfiniteScroll;
