export enum NotificationType {
   Error = "Error",
   Success = "Success",
   Warning = "Warning",
   Info = "Info"
}

export interface Notification {
   id: number;
   text: string;
   type: NotificationType;
}

export interface SendNotificationPayload extends Omit<Notification, "id"> {
   lifeTime?: number;
}
