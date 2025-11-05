/** @format */

import { useNotificationStore } from "@/store/notification.store";
import { Problem } from "@/types/http-errors.interface";
import { Notification } from "@/types/notification.store";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      //show popup
    },
  }),

  mutationCache: new MutationCache({
    onError: (error: unknown) => {
      showNotification(error as Problem);
      // Show Notification
    },
  }),
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      throwOnError: false,
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});

const showNotification = (problem: Problem) => {
  const notifications: Omit<Notification, "id">[] = [];

  if (problem.errors) {
  } else if (problem.detail) {
    Object.entries(problem.errors).forEach([_ , values] => {
      values.forEach((message)=> {
         notifications.push({
      type: "error",
      message: problem.detail,
    });
      })
    });
    notifications.push({
      type: "error",
      message: problem.detail,
    });
  }

  useNotificationStore.getState().notifications;
};
