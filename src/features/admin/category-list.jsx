import { useState } from "react";
import { useSearchParams } from "react-router";
import Loading from "../../components/loading";
import Modal from "../../components/modal";
import NotFoundBox from "../../components/not-found-box";
import Pagination from "../../components/pagination";
import { useCategories, useDeleteCategory } from "../../hooks/useCategory";
import CategoryForm from "./components/category-form";
import CategoryItem from "./components/category-item";

const CategoryList = ({ status, isShowForm, setIsShowForm }) => {
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

  const showFormModalHandler = (categoryId) => {
    setSelectedCategory(categoryId);
    setIsShowForm(true);
  };

  const deleteHandler = () => {
    deleteMutate(selectedCategory);
    setShowDeleteModal(false);
    setTimeout(() => {
      refetch();
    }, 100);
  };

  const cancelHandler = () => {
    setSelectedCategory(null);
    setShowDeleteModal(false);
    setIsShowForm(false);
  };

  return (
    <>
      <table className="table-container mt-8">
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
              <CategoryItem
                key={category._id}
                {...category}
                onShowModal={showModalHandler}
                onShowForm={showFormModalHandler}
                refetch={refetch}
              />
            ))}
        </tbody>
      </table>
      {data?.data?.length === 0 && <NotFoundBox />}
      {data.pagination.totalPage !== 0 && data.pagination.totalPage > 1 && <Pagination data={data} />}
      {isShowForm && <CategoryForm cancelHandler={cancelHandler} id={selectedCategory} refetch={refetch} />}
      <Modal
        title="حذف"
        body="آیا از حذف این دسته اطمینان دارید؟"
        isOpen={showDeleteModal}
        cancelHandler={cancelHandler}
      >
        <button className="btn" onClick={cancelHandler}>
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
