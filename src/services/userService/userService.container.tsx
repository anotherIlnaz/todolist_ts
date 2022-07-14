import { useStore } from "effector-react";
import React, { useEffect } from "react";
import { userService } from "./userService.model";
import { UserSettings } from "./view/UserSettings";

export const UserContainer = () => {
   useEffect(() => userService.inputs.loadUser(), []);
   const userData = useStore(userService.outputs.$userResponse);
   return (
      <>
         <UserSettings userData={userData} />
      </>
   );
};
