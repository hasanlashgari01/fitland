const NotFoundBox = ({ data, value }) => {
  return (
    <>
      {data?.length === 0 && (
        <div className="flex h-48 w-full items-center justify-center rounded-xl bg-red-400 py-5 text-center text-2xl text-white">
          {value} یافت نشد
        </div>
      )}
    </>
  );
};

export default NotFoundBox;
