import { createDomain } from "effector";
import {
   Notification,
   SendNotificationPayload,
} from "./notificationsService.types";

const domain = createDomain("notificationsService");

const $notificationsList = domain.createStore<Notification[]>([]);

const sendNotification = domain.createEvent<SendNotificationPayload>();

const removeNotification = domain.createEvent<number>();

$notificationsList
   .on(sendNotification, (notification, newNotifyPayload) => {
      const id = Date.now();

      setTimeout(
         () => removeNotification(id),
         newNotifyPayload.lifeTime || 2000
      );

      return [...notification, { id, ...newNotifyPayload }];
   })
   .on(removeNotification, (prev, id) => prev.filter((elem) => elem.id !== id));

export const notificationsService = {
   inputs: {
      sendNotification,
   },
   outputs: {
      $notificationsList,
   },
};
