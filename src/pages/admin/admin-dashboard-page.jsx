import Welcome from "../../features/admin/components/welcome";
import useTitle from "../../hooks/useTitle";

const AdminDashboardPage = () => {
  useTitle("پنل ادمین - داشبورد");

  return (
    <div>
      <Welcome />
    </div>
  );
};
export default AdminDashboardPage;
