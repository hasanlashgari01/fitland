import { useNavigate, useParams } from "react-router";
import Loading from "../../components/loading";
import Product from "../../components/product";
import { useBrandListBySlug } from "../../hooks/useBrand";
import useTitle from "../../hooks/useTitle";

const BrandPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error, isError } = useBrandListBySlug(slug);
  useTitle("محصولات برند");


  if (isError && error.status === 404) return navigate("/not-found");

  console.log(data);

  return (
    <div className="container">
      <div className="w-full">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.data.map((product) => (
              <Product key={product._id} {...product.product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandPage;
