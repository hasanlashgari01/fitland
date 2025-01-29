import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import QueryProvider from "./providers/QueryProvider";
import router from "./router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
      <Toaster />
      <ReactQueryDevtools />
    </QueryProvider>
  );
}

export default App;
