import { useEvent, useStore } from "effector-react";
import { userService } from "../userService";
import { userRedactService } from "./userRedactService.model";
import { UserRedact } from "./view/UserRedact";

export const UserRedactContainer = () => {
   const isModalVisible = useStore(userRedactService.outputs.$modalActive);
   const handleOk = useEvent(userRedactService.inputs.handlePatch);
   const handleCancel = useEvent(userRedactService.inputs.closeModal);

   const userData = useStore(userService.outputs.$userResponse)
   
   return (
      <UserRedact
         handleCancel={handleCancel}
         handleOk={handleOk}
         isModalVisible={isModalVisible}
         userData={userData}
      />
   );
};
