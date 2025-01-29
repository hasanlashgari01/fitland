import { Link } from "react-router";
import Image from "../../../components/image";

const Product = ({ _id, name, slug, cover, price, discount }) => {
  return (
    <div className="overflow-hidden rounded-2xl">
      <div className="h-56">
        <Image cover={cover} />
      </div>
      <Link to={`${_id}`} className="mt-4">
        {name}
      </Link>
    </div>
  );
};
export default Product;
