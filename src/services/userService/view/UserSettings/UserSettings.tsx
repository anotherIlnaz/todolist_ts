import { Button } from "antd";
import { FC } from "react";
import { Img, Item, Layout, Wrapper } from "./UserSettings.styled";
import { UserSettingsProps } from "./UserSettings.types";
import { apiUrl } from "../../../../api/urls";
import { getImageLink } from "../../../../utils";

export const UserSettings: FC<UserSettingsProps> = ({
   userData,
   modalOpen,
}) => {
   return (
      <Layout>
         <Wrapper>
            <Img src={userData?.avatar && getImageLink(userData?.avatar)} />
            <Item>
               {" "}
               <strong>User Name: </strong>
               {userData?.name}{" "}
            </Item>
            <Item>
               {" "}
               <strong>Email: </strong>
               {userData?.email}{" "}
            </Item>

            <Button onClick={modalOpen}>Редактировать профиль</Button>
         </Wrapper>
      </Layout>
   );
};
