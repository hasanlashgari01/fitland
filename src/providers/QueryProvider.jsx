import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "../config/query";

const QueryProvider = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
