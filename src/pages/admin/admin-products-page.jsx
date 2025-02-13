import Loading from "../../components/loading";
import Modal from "../../components/modal";
import Pagination from "../../components/pagination";
import { usePage } from "../../context/admin-page-context";
import Product from "../../features/admin/components/product";
import ProductHeader from "../../features/admin/components/product-header";
import { useDeleteProduct, useProducts } from "../../hooks/useProduct";

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
      <table className="table-container mt-8 table-auto">
        <thead>
          <tr>
            <th className="table-header w-16 text-center">عکس</th>
            <th className="table-header w-96 text-center">عنوان</th>
            <th className="table-header text-center">قیمت</th>
            <th className="table-header text-center">تخفیف</th>
            <th className="table-header text-center">موجودی</th>
            <th className="table-header text-center">وضعیت</th>
            <th className="table-header text-center">عملیات</th>
          </tr>
        </thead>
        <tbody className="fade-in">
          {data?.data?.length !== 0 &&
            data?.data?.map((category) => <Product key={category._id} refetch={refetch} {...category} />)}
        </tbody>
      </table>
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
