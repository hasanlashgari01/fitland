import { useSearchParams } from "react-router";
import Loading from "../components/loading";
import Pagination from "../components/pagination";
import Button from "../features/admin/components/button";
import Product from "../features/admin/components/product";
import { useProducts } from "../hooks/useProduct";

const AdminProductsPage = () => {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useProducts(searchParams.get("page"));

  if (!isLoading && data.pagination.totalPage < searchParams.get("page")) {
    return <h1>یافت نشد</h1>;
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div>
            <Button status="add" title="محصول" />
          </div>
          <div className="xs:grid-cols-2 mt-8 grid min-h-[34rem] grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-4">
            {data.data.map((product) => (
              <Product key={product._id} {...product} />
            ))}
          </div>
          {data.pagination.totalPage !== 1 && <Pagination data={data} />}
        </>
      )}
    </>
  );
};

export default AdminProductsPage;
