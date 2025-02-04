import { useState } from "react";
import { useUsers } from "../hooks/useUser";
import { useSearchParams } from "react-router";
import Loading from "../components/loading";
import UserItem from "../features/admin/components/user-item";

const AdminUsersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const { data, isLoading } = useUsers(page);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <table className="table-container">
        <thead>
          <tr>
            <th className="table-header">نام</th>
            <th className="table-header">موبایل</th>
            <th className="table-header">ایمیل</th>
            <th className="table-header">تاریخ عضویت</th>
            <th className="table-header">عملیات</th>
          </tr>
        </thead>
        <tbody>{data?.data?.length !== 0 && data?.data?.map((user) => <UserItem key={user._id} {...user} />)}</tbody>
      </table>
    </>
  );
};

export default AdminUsersPage;
