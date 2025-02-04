import UserItem from "./components/user-item";

const UserList = ({ data }) => {
  return (
    <div className="h-[72dvh]">
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
        <tbody className="fade-in">
          {data?.data?.length !== 0 && data?.data?.map((user) => <UserItem key={user._id} {...user} />)}
        </tbody>
      </table>
    </div>
  );
};
export default UserList;
