import { FC } from "react";
import { Wrapper } from "./NotificationElem.styled";
import { NotificationElemProps } from "./NotificationElem.types";

export const NotificationElem: FC<NotificationElemProps> = ({
   notification,
}) => {
   return <Wrapper type={notification.type}>{notification.text}</Wrapper>;
};
