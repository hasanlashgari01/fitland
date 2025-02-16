import { Link } from "react-router";
import DiscountBadge from "./discount-badge";

const Product = ({ name, slug, price, discount, cover, inventory, isSpecialOffer, createdAt }) => {
  return (
    <div className="overflow-hidden rounded-2xl">
      <Link to={`/product/${slug}`} className="flex gap-4 sm:flex-col md:px-4 md:py-3">
        <div className="mx-auto h-29.5 sm:size-45 md:size-60">
          <img src={`http://localhost:3000/public/images/${cover}`} alt="" className="h-full object-cover" />
        </div>

        <div className="flex-2 p-1 pr-0">
          <h3 className="text-tiny xs:text-xs line-clamp-2 leading-relaxed md:text-sm">{name}</h3>
          <div className="flex justify-between pt-2 pl-5 sm:pt-1">
            <span className="text-tiny xs:text-xs xs:leading-relaxed text-red-500">
              تنها {inventory} عدد در انبار باقی مانده
            </span>
          </div>
          <div className="mt-1 flex flex-row-reverse items-center justify-between pt-3 sm:pt-1.5">
            <div className="flex items-center gap-1">
              <span className="text-xs leading-4 md:text-sm">{price.toLocaleString()}</span>
              <img src="/src/assets/icon/toman.svg" alt="" className="size-4" />
            </div>
            <DiscountBadge discount={discount} />
          </div>
          <div className="flex flex-row-reverse justify-between max-md:pt-1 pl-3">
            {discount > 0 && (
              <span className="text-tiny xs:text-xs xs:leading-relaxed text-center text-gray-400 line-through md:text-sm">
                {price.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
