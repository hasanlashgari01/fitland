import { Link } from "react-router";
import ProductBtn from "../../../components/product-btn";

const ProductPageDetails = ({ data }) => {
  return (
    <div className="flex flex-1 flex-col justify-between p-4">
      <div className="h-full">
        <h1 className="text-lg/relaxed font-semibold">{data.name}</h1>
        <div className="mt-4.5 max-sm:text-sm">
          <span className="text-gray-500">برند : </span>
          <Link to={`/brand/${data.brand.slug}`}>
            {data.brand.name} | {data.brand.slug}
          </Link>
        </div>
        <h4 className="mt-4">فقط {data.inventory} عدد تو انبار باقی مانده</h4>
      </div>
      <ProductBtn {...data} />
    </div>
  );
};

export default ProductPageDetails;
