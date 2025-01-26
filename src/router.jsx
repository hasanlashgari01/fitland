import { createBrowserRouter } from "react-router";
import Login from "./features/identity/login";
import Register from "./features/identity/register";
import IdentityLayout from "./layout/identity-layout";
import HomePage from "./pages/home-page";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    element: <IdentityLayout />,
    children: [
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default router;
