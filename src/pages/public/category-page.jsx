import { useNavigate, useParams } from "react-router";
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
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {products.data.map((productItem) => (
          <>
            <Product key={productItem._id} {...productItem.product} />
            <Product key={productItem._id} {...productItem.product} />
          </>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
