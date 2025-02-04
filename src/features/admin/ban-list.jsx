import NotFoundBox from "../../components/not-found-box";
import BanItem from "./components/ban-item";

const BanList = ({ data }) => {
  return (
    <div className="h-[72dvh]">
      <table className="table-container">
        <thead>
          <tr>
            <th className="table-header">نام</th>
            <th className="table-header">موبایل</th>
            <th className="table-header">تاریخ بن شدن</th>
            <th className="table-header">عملیات</th>
          </tr>
        </thead>
        <tbody className="fade-in">
          {data?.data?.length !== 0 && data?.data?.map((user) => <BanItem key={user._id} {...user} />)}
        </tbody>
      </table>
      <NotFoundBox data={data.data} value="کاربر" />
    </div>
  );
};
export default BanList;
