import { QueryClient } from "@tanstack/react-query";

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000,
      retry: 1,
    },
  },
});
