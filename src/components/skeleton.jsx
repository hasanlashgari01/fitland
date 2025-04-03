const Skeleton = () => {
  return (
    <div className="flex max-w-72 flex-1 gap-4 overflow-hidden rounded-2xl bg-slate-50 sm:flex-col md:px-4 md:py-3">
      <div className="mx-auto h-29.5 animate-pulse rounded bg-gray-300 sm:size-45 md:size-60"></div>
      <div className="flex-2">
        <h3 className="h-5 w-full animate-pulse rounded bg-gray-300"></h3>
        <h3 className="mt-1 h-5 w-2/3 animate-pulse rounded bg-gray-300"></h3>
      </div>
      <div className="flex items-start justify-between">
        <div className="h-5 w-10 animate-pulse rounded bg-gray-300"></div>
        <div className="h-5 w-10 animate-pulse rounded bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Skeleton;
