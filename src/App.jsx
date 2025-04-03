import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import QueryProvider from "./providers/QueryProvider";
import router from "./router";
import { store } from "./store/store";

function App() {
  return (
    <QueryProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster />
      </Provider>
      {/* <ReactQueryDevtools /> */}
    </QueryProvider>
  );
}

export default App;
