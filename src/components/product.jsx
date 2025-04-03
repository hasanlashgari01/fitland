import { Link } from "react-router";
import DiscountBadge from "./discount-badge";

const Product = ({ name, slug, price, discount, cover, inventory }) => {
  return (
    <div className="max-w-72 flex-1 overflow-hidden rounded-2xl bg-slate-50">
      <Link to={`/product/${slug}`} className="flex gap-4 sm:flex-col md:px-4 md:py-3">
        <div className="mx-auto h-29.5 sm:size-45 md:size-60">
          <img src={`http://localhost:3000/public/images/${cover}`} alt="" className="h-full object-cover" />
        </div>

        <div className="flex-2 p-1 pr-0">
          <h3 className="text-tiny xs:text-xs line-clamp-2 leading-relaxed md:text-sm">{name}</h3>
          <div className="flex min-h-6 justify-between pt-2 pl-5 sm:pt-1">
            {inventory < 10 && (
              <span className="text-tiny xs:text-xs xs:leading-relaxed text-red-500">
                تنها {inventory} عدد در انبار باقی مانده
              </span>
            )}
          </div>
          <div className="mt-1 flex flex-row-reverse items-center justify-between pt-3 sm:pt-1.5">
            <div className="flex items-center gap-1">
              <span className="text-xs leading-4 md:text-sm">
                {(price - (price * discount) / 100).toLocaleString()}
              </span>
              <img src="/src/assets/icon/toman.svg" alt="" className="size-4" />
            </div>
            <DiscountBadge discount={discount} />
          </div>
          <div className="flex flex-row-reverse justify-between pl-3 max-md:pt-1">
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
