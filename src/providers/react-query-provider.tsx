/** @format */
"use client";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
function QueryProvider({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default QueryProvider;
