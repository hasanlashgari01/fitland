import { Link, useNavigate, useParams } from "react-router";
import Image from "../components/image";
import Loading from "../components/loading";
import Modal from "../components/modal";
import NotFound from "../components/not-found";
import { usePage } from "../context/admin-page-context";
import Button from "../features/admin/components/button";
import { useDeleteProduct, useProductItem } from "../hooks/useProduct";

const AdminProductPage = () => {
  const { id } = useParams();
  const { isModal, cancelHandler, deleteHandler, showModalHandler } = usePage();
  const { data, isLoading, error } = useProductItem(id);
  const { mutate: deleteMutate } = useDeleteProduct();
  const navigate = useNavigate();

  if (!isLoading && error?.status === 404) return <NotFound />;

  const redirectToProducts = () => {
    deleteHandler({ mutate: deleteMutate, redirect: () => navigate("/admin/products") });
  };

  return (
    <>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="flex items-center justify-between">
              <Button status="delete" onDelete={() => showModalHandler(data._id)} title="محصول" />
              <Link to="/admin/products" className="rounded-lg border border-gray-200 px-4 py-2 dark:border-gray-950">
                بازگشت به محصولات
              </Link>
            </div>
            <div className="mt-8 flex gap-8">
              <div className="space-y-5">
                <div className="size-96 overflow-hidden rounded-xl">
                  <Image cover={data?.cover} />
                </div>
                <div className="flex gap-3 rounded-xl">
                  {data?.images.map((image, index) => (
                    <div className="size-24" key={index}>
                      <Image cover={image} />
                    </div>
                  ))}
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
      <Modal title="حذف" body="آیا از حذف این دسته اطمینان دارید؟" isOpen={isModal} cancelHandler={cancelHandler}>
        <button className="btn" onClick={cancelHandler}>
          انصراف
        </button>
        <button className="delete-btn" onClick={redirectToProducts}>
          حذف
        </button>
      </Modal>
    </>
  );
};

export default AdminProductPage;
