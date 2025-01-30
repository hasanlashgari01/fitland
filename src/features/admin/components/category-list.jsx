import { useState } from "react";
import Loading from "../../../components/loading";
import Modal from "../../../components/modal";
import { useCategories, useDeleteCategory } from "../../../hooks/useCategory";
import CategoryItem from "./category-item";

const CategoryList = ({ status }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { data, isLoading, refetch } = useCategories(status);
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
        <tr>
          <th className="table-header">عنوان</th>
          <th className="table-header">اسلاگ</th>
          <th className="table-header">وضعیت</th>
          <th className="table-header"></th>
        </tr>
        {data.data.length !== 0 &&
          data.data.map((category) => (
            <CategoryItem key={category._id} {...category} onShowModal={showModalHandler} refetch={refetch} />
          ))}
      </table>
      {data.data.length === 0 && (
        <h1 className="rounded-xl bg-red-400 py-5 text-center text-2xl text-white">دسته بندی یافت نشد</h1>
      )}
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
