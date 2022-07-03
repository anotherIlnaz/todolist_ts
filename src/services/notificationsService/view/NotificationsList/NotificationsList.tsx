import { FC } from "react";
import { NotificationElem } from "./NotificationElem";
import { List, Wrapper } from "./NotificationsList.styled";
import { NotificationsListProps } from "./NotificationsList.types";

export const NotificationsList: FC<NotificationsListProps> = ({
   notifications,
}) => {
   return (
      <Wrapper>
         <List>
            <div>
               {notifications.map((elem) => (
                  <NotificationElem notification={elem} />
               ))}
            </div>
         </List>
      </Wrapper>
   );
};
