import { Link, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import Image from "../components/image";
import Loading from "../components/loading";
import NotFound from "../components/not-found";
import Button from "../features/admin/components/button";
import { useDeleteProduct, useProductItem } from "../hooks/useProduct";
import Toast from "../config/swal";

const AdminProductPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useProductItem(id);
  const { mutate } = useDeleteProduct();
  const navigate = useNavigate();

  if (!isLoading && error?.status === 404) return <NotFound />;

  const deleteHandler = () => {
    Toast.fire().then((result) => {
      if (result.isConfirmed) {
        mutate(data._id);
        Swal.fire({ title: "با موفقیت حذف شد", icon: "success" });
        setTimeout(() => {
          navigate("/admin/products");
        }, 2000);
      }
    });
  };

  return (
    <>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="flex items-center justify-between">
              <Button status="delete" action={deleteHandler} title="محصول" />
              <Link to="/admin/products" className="rounded-lg border border-gray-200 px-4 py-2 dark:border-gray-950">
                بازگشت به محصولات
              </Link>
            </div>
            <div className="mt-8 flex gap-8">
              <div>
                <div className="size-96 overflow-hidden rounded-xl">
                  <Image cover={data?.cover} />
                </div>
              </div>
              <div>
                <h2>{data.name}</h2>
                <h3>{data.price.toLocaleString()} تومان</h3>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AdminProductPage;
