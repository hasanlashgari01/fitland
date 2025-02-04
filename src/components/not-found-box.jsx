const NotFoundBox = ({ data, value }) => {
  return (
    <>
      {data?.length === 0 && (
        <h1 className="rounded-xl bg-red-400 py-5 text-center text-2xl text-white">{value} یافت نشد</h1>
      )}
    </>
  );
};

export default NotFoundBox;
