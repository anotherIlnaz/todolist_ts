import { useEvent, useStore } from "effector-react";
import { useEffect } from "react";
import { UserRedactContainer, userRedactService } from "../userRedactService";
import { userService } from "./userService.model";
import { UserSettings } from "./view/UserSettings";

export const UserContainer = () => {
   useEffect(() => userService.inputs.loadUser(), []);
   const userData = useStore(userService.outputs.$userResponse);

   const modalOpen = useEvent(userRedactService.inputs.modalOpen);

   return (
      <>
         <UserRedactContainer />
         <UserSettings userData={userData} modalOpen={() => modalOpen()} />
      </>
   );
};
