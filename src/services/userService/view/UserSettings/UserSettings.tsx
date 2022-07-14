import React, { FC } from "react";
import { Layout, Wrapper } from "./UserSettings.styled";
import { UserSettingsProps } from "./UserSettings.types";

export const UserSettings: FC<UserSettingsProps> = ({ userData }) => {
   return (
      <Layout>
         <Wrapper>
            
            <img src={userData?.avatar || "https://bycars.ru/upload/photos/79/7957.jpg"} alt={userData?.name} />
            <div> <strong>user: </strong>{userData?.name} </div>
            <div> <strong>Email: </strong>{userData?.email} </div>


         </Wrapper>
      </Layout>
   );
};
