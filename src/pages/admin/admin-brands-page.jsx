import DeleteModal from "../../components/delete-modal";
import Modal from "../../components/modal";
import Pagination from "../../components/pagination";
import { usePage } from "../../context/admin-page-context";
import BrandForm from "../../features/admin/components/brand-form";
import BrandItem from "../../features/admin/components/brand-item";
import Button from "../../features/admin/components/button";
import CategoryForm from "../../features/admin/components/category-form";
import { useBrandList, useDeleteBrand } from "../../hooks/useBrand";
import { useDeleteCategory } from "../../hooks/useCategory";
import useTitle from "../../hooks/useTitle";

const AdminBrandsPage = () => {
  useTitle("پنل ادمین - برندها");
  const { isForm, isModal, cancelHandler } = usePage();
  const { data, isLoading, refetch } = useBrandList();
  const { mutate: deleteMutate } = useDeleteBrand();

  console.log(data);

  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">لیست برندها</h1>
          <Button status="add" title="برند" />
        </div>
        <table className="table-container mt-8">
          <thead>
            <tr>
              <th className="table-header">عنوان</th>
              <th className="table-header">اسلاگ</th>
              <th className="table-header">وضعیت</th>
              <th className="table-header">عملیات</th>
            </tr>
          </thead>
          <tbody>{!isLoading && data?.map((brand) => <BrandItem key={brand._id} {...brand} />)}</tbody>
        </table>
      </div>
      {isForm && <BrandForm refetch={refetch} />}
      <Modal isOpen={isModal} cancelHandler={cancelHandler}>
        <DeleteModal
          title="حذف"
          body="آیا از حذف این برند اطمینان دارید؟"
          deleteMutate={deleteMutate}
          refetch={refetch}
        />
      </Modal>
    </>
  );
};

export default AdminBrandsPage;
