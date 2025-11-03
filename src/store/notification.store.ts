import { Notification } from "@/types/notification.store";
import { GenerateId } from "@/utils/generateId";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type NotificationState = {
  notifications: Notification[];
  showNotification: (notification: Omit<Notification, "id">) => void;
  dismissNotification: (id: string) => void;
};

export const useNotificationStore = create<NotificationState>()(
  devtools((set, get) => ({
    notifications: [],
    showNotification: (notification) => {
      const id = GenerateId();
      set((state) => ({
        notifications: [...state.notifications, { id: id, ...notification }],
      }));

      setTimeout(() => {
        get().dismissNotification(id);
      }, 5000);
    },
    dismissNotification: (id) => {
      set((state) => ({
        notifications: state.notifications.filter((p) => p.id !== id),
      }));
    },
  }))
);
