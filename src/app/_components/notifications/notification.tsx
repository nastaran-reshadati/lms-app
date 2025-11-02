"use client";
import { useNotificationStore } from "@/store/notification.store";
import { NotificationToast } from "./notification-toast";
import { NotificationProps } from "./notification.types";

export const Notifications: React.FC<NotificationProps> = () => {
  const notifications = useNotificationStore((state) => state.notifications);

  if (notifications.length < 1) return;
  return (
    <div className="fixed flex flex-col-reverse bottom-3 right-3 gap-3">
      {notifications.map((notif) => (
        <NotificationToast
          notification={notif}
          key={`notification-${notif.id}`}
        />
      ))}
    </div>
  );
};
