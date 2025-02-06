import { Link } from "react-router";

const ProductHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <Link to="/admin/product/create" className="rounded bg-sky-500 px-4 py-2 text-white">
        افزودن محصول جدید
      </Link>
    </div>
  );
};

export default ProductHeader;
