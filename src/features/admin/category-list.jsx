import Loading from "../../components/loading";
import Modal from "../../components/modal";
import NotFoundBox from "../../components/not-found-box";
import Pagination from "../../components/pagination";
import { usePage } from "../../context/admin-page-context";
import { useCategories, useDeleteCategory } from "../../hooks/useCategory";
import CategoryForm from "./components/category-form";
import CategoryItem from "./components/category-item";
import DeleteModal from "./../../components/delete-modal";

const CategoryList = ({ status }) => {
  const { page, isForm, isModal, cancelHandler } = usePage();
  const { data, isLoading, refetch } = useCategories(status, page);
  const { mutate: deleteMutate } = useDeleteCategory();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="h-[73dvh]">
        <table className="table-container mt-8">
          <thead>
            <tr>
              <th className="table-header">عنوان</th>
              <th className="table-header">اسلاگ</th>
              <th className="table-header">وضعیت</th>
              <th className="table-header">عملیات</th>
            </tr>
          </thead>
          <tbody className="fade-in">
            {data?.data?.length !== 0 &&
              data?.data?.map((category) => <CategoryItem key={category._id} refetch={refetch} {...category} />)}
          </tbody>
        </table>
        <NotFoundBox data={data.data} value="دسته بندی" />
      </div>
      <Pagination data={data} />
      {isForm && <CategoryForm refetch={refetch} />}
      <Modal isOpen={isModal} cancelHandler={cancelHandler}>
        <DeleteModal
          title="حذف"
          body="آیا از حذف این دسته اطمینان دارید؟"
          deleteMutate={deleteMutate}
          refetch={refetch}
        />
      </Modal>
    </>
  );
};

export default CategoryList;
