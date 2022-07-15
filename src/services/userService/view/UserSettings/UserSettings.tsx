import { Button } from "antd";
import  { FC } from "react";
import { Img, Item, Layout, Wrapper } from "./UserSettings.styled";
import { UserSettingsProps } from "./UserSettings.types";

export const UserSettings: FC<UserSettingsProps> = ({ userData, modalOpen }) => {
   return (
      <Layout>
         <Wrapper>
            
            <Img src={userData?.avatar || "https://bycars.ru/upload/photos/79/7957.jpg"} alt={userData?.name} />
            <Item> <strong>User Name: </strong>{userData?.name} </Item>
            <Item> <strong>Email: </strong>{userData?.email} </Item>

            <Button onClick={modalOpen}>Редактировать профиль</Button>

         </Wrapper>
      </Layout>
   );
};
