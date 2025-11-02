import { Notification } from "@/types/notification.store";
import { GenerateId } from "@/utils/generateId";
import { create } from "zustand";

export type NotificationState = {
  notifications: Notification[];
  showNotification: (notification: Omit<Notification, "id">) => void;
  dismissNotification: (id: string) => void;
};

export const useNotificationStore = create<NotificationState>((set, get) => ({
  notifications: [],
  showNotification: (notification) => {
    const id = GenerateId();

    set((state) => ({
      notifications: [...state.notifications, { id: id, ...notification }],
    }));

    setTimeout(() => {
      get().dismissNotification(id);
    }, notification.duration);
  },
  dismissNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter((notif) => notif.id !== id),
    }));
  },
}));
