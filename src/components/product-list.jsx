import { cn } from "../shared/cn";
import Product from "./product";

const ProductList = ({ products, isSkeleton = false }) => {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", `${isSkeleton ? "skeleton" : ""}`)}>
      {products.map(({ _id, product }) => (
        <Product key={_id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
