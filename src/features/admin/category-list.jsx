import { useState } from "react";
import { useSearchParams } from "react-router";
import Loading from "../../components/loading";
import Modal from "../../components/modal";
import Pagination from "../../components/pagination";
import { useCategories, useDeleteCategory } from "../../hooks/useCategory";
import CategoryItem from "./components/category-item";
import NotFoundBox from "../../components/not-found-box";

const CategoryList = ({ status }) => {
  const [searchParams] = useSearchParams();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { data, isLoading, refetch } = useCategories(status, searchParams.get("page"));
  const { mutate: deleteMutate } = useDeleteCategory();

  if (isLoading) {
    return <Loading />;
  }

  const showModalHandler = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowDeleteModal(true);
  };

  const deleteHandler = () => {
    deleteMutate(selectedCategory);
    setShowDeleteModal(false);
    setTimeout(() => {
      refetch();
    }, 100);
  };

  return (
    <>
      <table className="mt-8 table w-full border-collapse border-slate-400 text-right dark:border-slate-800">
        <thead>
          <tr>
            <th className="table-header">عنوان</th>
            <th className="table-header">اسلاگ</th>
            <th className="table-header">وضعیت</th>
            <th className="table-header">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.length !== 0 &&
            data?.data?.map((category) => (
              <CategoryItem key={category._id} {...category} onShowModal={showModalHandler} refetch={refetch} />
            ))}
        </tbody>
      </table>
      {data?.data?.length === 0 && <NotFoundBox />}
      {data.pagination.totalPage !== 0 && data.pagination.totalPage > 1 && <Pagination data={data} />}
      <Modal title="حذف" body="آیا از حذف این دسته اطمینان دارید؟" isOpen={showDeleteModal} onShow={setShowDeleteModal}>
        <button className="btn" onClick={() => setShowDeleteModal(false)}>
          انصراف
        </button>
        <button className="delete-btn" onClick={deleteHandler}>
          حذف
        </button>
      </Modal>
    </>
  );
};

export default CategoryList;
