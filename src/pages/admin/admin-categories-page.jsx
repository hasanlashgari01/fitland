import { useState } from "react";
import CategoryList from "../../features/admin/category-list";
import CategoryHeader from "../../features/admin/components/category-header";

const AdminCategoriesPage = () => {
  const [status, setStatus] = useState("ALL");

  return (
    <div>
      <CategoryHeader status={status} setStatus={setStatus} />
      <CategoryList status={status} />
    </div>
  );
};

export default AdminCategoriesPage;
