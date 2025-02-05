import { createBrowserRouter } from "react-router";
import Login from "./features/identity/login";
import Register from "./features/identity/register";
import AdminPanelLayout from "./layout/admin-panel-layout";
import IdentityLayout from "./layout/identity-layout";
import AdminBansPage from "./pages/admin-bans-page";
import AdminCategoriesPage from "./pages/admin-categories-page";
import AdminDashboardPage from "./pages/admin-dashboard-page";
import AdminOrdersPage from "./pages/admin-orders-page";
import AdminProductPage from "./pages/admin-product-page";
import AdminProductsPage from "./pages/admin-products-page";
import AdminUsersPage from "./pages/admin-users-page";
import HomePage from "./pages/home-page";
import NotFoundPage from "./pages/not-found-page";
import AdminProductCreatePage from "./pages/admin-product-create-page";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    element: <IdentityLayout />,
    children: [
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminPanelLayout />,
    children: [
      { path: "dashboard", element: <AdminDashboardPage /> },
      { path: "products", element: <AdminProductsPage /> },
      { path: "product/create", element: <AdminProductCreatePage /> },
      { path: "products/:id", element: <AdminProductPage /> },
      { path: "users", element: <AdminUsersPage /> },
      { path: "orders", element: <AdminOrdersPage /> },
      { path: "categories", element: <AdminCategoriesPage /> },
      { path: "bans", element: <AdminBansPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
