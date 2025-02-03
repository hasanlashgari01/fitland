import { useState } from "react";
import CategoryList from "../features/admin/category-list";
import CategoryHeader from "../features/admin/components/category-header";

const AdminCategoriesPage = () => {
  const [status, setStatus] = useState("ALL");
  const [isShowForm, setIsShowForm] = useState(false);

  return (
    <div>
      <CategoryHeader status={status} setStatus={setStatus} setIsShowForm={setIsShowForm} />
      <CategoryList status={status} isShowForm={isShowForm} setIsShowForm={setIsShowForm} />
    </div>
  );
};

export default AdminCategoriesPage;
