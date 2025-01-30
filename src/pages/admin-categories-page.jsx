import { useState } from "react";
import CategoryHeader from "../features/admin/components/category-header";
import CategoryList from "../features/admin/components/category-list";

const AdminCategoriesPage = () => {
  const [status, setStatus] = useState(null);

  return (
    <div>
      <CategoryHeader status={status} setStatus={setStatus} />
      <CategoryList status={status} />
    </div>
  );
};

export default AdminCategoriesPage;
