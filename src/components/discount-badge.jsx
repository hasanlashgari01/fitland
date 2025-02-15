const DiscountBadge = ({ discount }) => {
  return (
    <>
      {discount !== 0 && (
        <div className="h-5 min-w-8 rounded-full bg-red-500 flex items-center justify-center text-white">
          <span className="text-tiny xs:text-xs sm:text-sm">{discount}٪</span>
        </div>
      )}
    </>
  );
};

export default DiscountBadge;
