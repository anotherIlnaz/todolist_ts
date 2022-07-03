import styled from "styled-components";
import { NotificationType } from "../../../notificationsService.types";

const notificationColorsDictionary = {
   [NotificationType.Error]: "red",
   [NotificationType.Success]: "lightgreen",
   [NotificationType.Info]: "blue",
   [NotificationType.Warning]: "yellow",
};

export const Wrapper = styled.div<{ type: NotificationType }>`
   border: 1px solid ${({ type }) => notificationColorsDictionary[type]};
   border-radius: 10px;
   padding: 5px 10px;
   margin-top: 10px;

   &:first-child {
      margin-top: 0;
   }
`;
