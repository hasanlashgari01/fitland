import { useState } from "react";
import CategoryList from "../../features/admin/category-list";
import CategoryHeader from "../../features/admin/components/category-header";
import useTitle from "../../hooks/useTitle";

const AdminCategoriesPage = () => {
  useTitle("پنل ادمین - دسته بندی ها");
  const [status, setStatus] = useState("ALL");

  return (
    <div>
      <CategoryHeader status={status} setStatus={setStatus} />
      <CategoryList status={status} />
    </div>
  );
};

export default AdminCategoriesPage;
