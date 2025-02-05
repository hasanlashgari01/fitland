import { Link } from "react-router";

const ProductHeader = () => {
  return (
    <div>
      <Link to="/admin/product/create">افزودن محصول جدید</Link>
    </div>
  );
};

export default ProductHeader;
