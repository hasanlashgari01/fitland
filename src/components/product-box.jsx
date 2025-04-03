const ProductBox = ({ title, description, icon }) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl border-2 border-gray-200 bg-gray-100 px-5.5 py-2.5">
      <div>{icon}</div>
      <div>
        <h2 className="text-base/relaxed leading-7 font-semibold">{title}</h2>
        <h2 className="mt-0.25 text-sm leading-7 text-gray-600">{description}</h2>
      </div>
    </div>
  );
};
export default ProductBox;
