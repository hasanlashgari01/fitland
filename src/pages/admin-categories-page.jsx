import { useState } from "react";
import Loading from "../components/loading";
import Button from "../features/admin/components/button";
import CategoryItem from "../features/admin/components/category-item";
import { useCategories } from "../hooks/useCategory";

const AdminCategoriesPage = () => {
  const [status, setStatus] = useState();
  const { data, isLoading } = useCategories(status);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex gap-6">
          <span onClick={() => setStatus(null)}>همه</span>
          <span onClick={() => setStatus(1)}>فعال</span>
          <span onClick={() => setStatus(0)}>غیرفعال</span>
        </div>
        <Button status="add" title="دسته بندی" />
      </div>
      <table className="mt-8 table w-full border-collapse border-slate-400 text-right dark:border-slate-800">
        <tr>
          <th className="table-header">عنوان</th>
          <th className="table-header">اسلاگ</th>
          <th className="table-header">وضعیت</th>
          <th className="table-header"></th>
        </tr>
        {data.data.length !== 0 && data.data.map((category) => <CategoryItem key={category._id} {...category} />)}
      </table>
      {data.data.length === 0 && (
        <h1 className="rounded-xl bg-red-400 py-5 text-center text-2xl">دسته بندی یافت نشد</h1>
      )}
    </div>
  );
};

export default AdminCategoriesPage;
