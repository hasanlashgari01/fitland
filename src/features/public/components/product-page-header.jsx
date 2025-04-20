import { useNavigate } from "react-router";
import Loading from "../../../components/loading";
import ProductBox from "../../../components/product-box";
import { roles } from "../../../data/roles";
import useTitle from "../../../hooks/useTitle";
import ProductPageDetails from "./product-page-details";
import ProductPageImage from "./product-page-image";

const ProductPageHeader = ({ data, isLoading, isError, error }) => {
  const navigate = useNavigate();

  useTitle(data?.name);

  if (isError && error.status === 404) return navigate("/not-found");

  return (
    <div className="flex gap-6">
      <div className="w-full">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="mt-6 flex flex-col gap-6.5 lg:flex-row">
            <ProductPageImage data={data} isLoading={isLoading} />

            <div className="flex flex-1 justify-between gap-10">
              <ProductPageDetails data={data} />

              <div className="flex w-80 flex-col gap-4 max-lg:hidden">
                {roles.map((role) => (
                  <ProductBox key={role.id} {...role} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPageHeader;
