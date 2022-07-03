import { useStore } from "effector-react";
import { notificationsService } from "./notificationsService.model";
import { NotificationsList } from "./view/NotificationsList";

const { outputs } = notificationsService;

export const NotificationsContainer = () => {
   const notifications = useStore(outputs.$notificationsList);

   return <NotificationsList notifications={notifications} />;
};
