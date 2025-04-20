const DiscountBadge = ({ discount }) => {
  return (
    <>
      {discount !== 0 && (
        <div className="target flex h-5 min-w-8 items-center justify-center rounded-full bg-red-500 text-white md:h-6 md:min-w-10">
          <span className="text-tiny xs:text-xs md:text-sm">{discount}٪</span>
        </div>
      )}
    </>
  );
};

export default DiscountBadge;
