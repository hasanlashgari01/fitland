import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import AdminThemeProvider from "../context/admin-theme-context";
import Sidebar from "../features/admin/components/sidebar";
import AdminPageProvider from "../context/admin-page-context";

const AdminPanelLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/admin") {
      navigate("/admin/dashboard");
    }
  }, [location]);

  return (
    <AdminThemeProvider>
      <AdminPageProvider>
        <div className="flex min-h-dvh bg-white dark:bg-slate-900 dark:text-white">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          <main className="relative flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </AdminPageProvider>
    </AdminThemeProvider>
  );
};

export default AdminPanelLayout;
