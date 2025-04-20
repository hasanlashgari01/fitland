import { Link } from "react-router";
import DiscountBadge from "../../../components/discount-badge";

const Product = ({ slug, name, cover, price, discount }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-300 bg-white">
      <div className="absolute top-5 right-5">
        <DiscountBadge discount={discount} />
      </div>
      <div className="xs:size-48 mx-auto size-40 sm:size-56 md:h-72">
        <img src={`http://localhost:3000/public/images/${cover}`} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <Link to={`/product/${slug}`} className="line-clamp-2 h-12">
          {name}
        </Link>
        <div className="mt-1 flex items-center justify-between pt-3 sm:pt-1.5">
          <div className="flex items-center gap-1">
            <span className="text-xs leading-4 md:text-sm">{(price - (price * discount) / 100).toLocaleString()}</span>
            <img src="/src/assets/icon/toman.svg" alt="" className="size-4" />
          </div>
        </div>
        <div className="flex justify-between pl-3 max-md:pt-1">
          {discount > 0 && (
            <span className="text-tiny xs:text-xs xs:leading-relaxed text-center text-gray-400 line-through md:text-sm">
              {price.toLocaleString()}
            </span>
          )}
        </div>
      </div>
      {}
    </div>
  );
};

export default Product;
