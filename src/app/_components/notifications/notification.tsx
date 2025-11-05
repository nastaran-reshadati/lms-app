"use client";
import { useNotificationStore } from "@/store/notification.store";
import { NotificationToast } from "./notification-toast";
import { NotificationProps } from "./notification.types";

export const Notifications: React.FC<NotificationProps> = () => {
  const notifications = useNotificationStore((state) => state.notifications);

  console.log(notifications);

  // if (notifications.length < 1) return;
  return (
    <div className="fixed bottom-3 right-2">
      {notifications?.map((notif) => (
        <NotificationToast
          notification={notif}
          key={`notification-${notif.id}`}
        />
      ))}
    </div>
  );
};
