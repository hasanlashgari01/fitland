import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50"];

const DashboardCharts = ({ genderStats, registrationStats, topSellingProducts }) => {
  const genderData = Object.entries(genderStats).map(([key, value]) => (key, value));
  const regData = registrationStats.map(({ date, count }) => ({ name: date, value: count }));
  const topProducts = topSellingProducts.map(({ name, count }) => ({ name, count }));

  return (
    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-5">
      <div className="col-span-5 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-xl md:col-span-2">
        <h3 className="mb-4 text-center font-bold">توزیع جنسیت کاربران</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={genderData} dataKey="value" nameKey="name" outerRadius={100} label>
              {genderData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="col-span-5 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-xl md:col-span-3">
        <h3 className="mb-4 text-center font-bold">روند ثبت‌نام کاربران</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={regData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => [`${value}`, "تعداد"]} />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="col-span-5 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-xl">
        <h3 className="mb-4 text-center font-bold">محصولات پرفروش</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topProducts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="count" hide />
            <YAxis />
            <Tooltip
              formatter={(value) => [`${value}`, "تعداد"]}
              labelFormatter={(label) => {
                const product = topProducts.find((p) => p.count === label);
                return product ? product.name : label;
              }}
            />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardCharts;
