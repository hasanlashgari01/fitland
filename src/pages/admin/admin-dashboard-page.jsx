import DashboardCard from "../../features/admin/components/dashboard-card";
import Welcome from "../../features/admin/components/welcome";
import DashboardCharts from "../../features/admin/dashboard-charts";
import { useDashboardData } from "../../hooks/useChartDashboard";
import useTitle from "../../hooks/useTitle";

const AdminDashboardPage = () => {
  useTitle("پنل ادمین - داشبورد");
  const { data, isLoading, error } = useDashboardData();

  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>خطا در دریافت دیتا</div>;

  console.log(data);

  return (
    <div>
      <Welcome />
      <section className="mt-10 grid grid-cols-6 gap-10">
        <DashboardCard data={data.categoriesCount} />
        <DashboardCard data={data.brandsCount} />
        <DashboardCard data={data.activeCommentCount} />
        <DashboardCard data={data.specialOffersCount} />
      </section>
      <DashboardCharts
        genderStats={data.genderStats}
        registrationStats={data.registrationStats}
        topSellingProducts={data.topSellingProducts}
      />
    </div>
  );
};
export default AdminDashboardPage;
