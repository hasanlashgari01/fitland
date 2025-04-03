import { useNavigate, useParams } from "react-router";
import Empty from "../../components/empty";
import Filter from "../../components/filter";
import FilterMobile from "../../components/filter-mobile";
import ProductList from "../../components/product-list";
import { SkeletonData } from "../../data/mock-data";
import { useCategoryBySlug } from "../../hooks/useCategory";
import useTitle from "../../hooks/useTitle";

const products = SkeletonData.products;

const CategoryPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useCategoryBySlug(slug);
  useTitle("دسته بندی");

  if (isError && error.status === 404) return navigate("/not-found");

  return (
    <div className="container">
      <div className="flex gap-6">
        <Filter isHidden />

        <div className="w-full">
          <FilterMobile />
          <div className="mt-6">
            {/* {!isLoading && data?.data.length == 0 && <Empty />} */}
            {isLoading ? (
              <ProductList products={products} isSkeleton={true} />
            ) : data?.data.length === 0 ? (
              <Empty />
            ) : (
              <ProductList products={data?.data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
