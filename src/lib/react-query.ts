/** @format */

import { QueryCache, QueryClient } from "react-query";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      //show popup
    },
  }),
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      useErrorBoundary: false,
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
});
