import { useNavigate, useParams } from "react-router";
import Filter from "../../components/filter";
import FilterMobile from "../../components/filter-mobile";
import Loading from "../../components/loading";
import Product from "../../components/product";
import { useCategoryBySlug } from "../../hooks/useCategory";

const CategoryPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data: products, isLoading, isError, error } = useCategoryBySlug(slug);

  if (isLoading) return <Loading />;
  if (isError && error.status === 404) return navigate("/not-found");

  return (
    <div className="container">
      <div className="flex gap-6">
        <Filter isHidden />

        <div>
          <FilterMobile />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.data.map((productItem) => (
              <Product key={productItem._id} {...productItem.product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
