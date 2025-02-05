import Loading from "../components/loading";
import Modal from "../components/modal";
import Pagination from "../components/pagination";
import { usePage } from "../context/admin-page-context";
import Product from "../features/admin/components/product";
import ProductHeader from "../features/admin/components/product-header";
import { useDeleteProduct, useProducts } from "../hooks/useProduct";

const AdminProductsPage = () => {
  const { page, isModal, cancelHandler, deleteHandler } = usePage();
  const { data, isLoading, refetch } = useProducts(page);
  const { mutate: deleteMutate } = useDeleteProduct();

  if (isLoading) {
    return <Loading />;
  }

  if (data.pagination.totalPage < page) {
    return <h1>یافت نشد</h1>;
  }

  return (
    <>
      <ProductHeader />
      <div className="xs:grid-cols-2 mt-8 grid min-h-[34rem] grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-4">
        {data.data.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
      <Pagination data={data} />
      <Modal title="حذف" body="آیا از حذف این دسته اطمینان دارید؟" isOpen={isModal} cancelHandler={cancelHandler}>
        <button className="btn" onClick={cancelHandler}>
          انصراف
        </button>
        <button className="delete-btn" onClick={() => deleteHandler({ mutate: deleteMutate, refetch })}>
          حذف
        </button>
      </Modal>
    </>
  );
};

export default AdminProductsPage;
