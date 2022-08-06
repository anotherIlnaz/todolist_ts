import { useEvent, useStore } from "effector-react";
import { createTaskModalService } from "./createTaskModalService.model";
import { CreateTaskModal } from "./view/CreateTaskModal";

const { inputs, outputs } = createTaskModalService;

export const CreateTaskModalContainer = () => {
   const close = useEvent(inputs.closeDeskModal);
   const open = useEvent(inputs.openDeskModal);
   const isModalVisible = useStore(outputs.$isModalOpen);

   return (
      <>
         <CreateTaskModal
            close={close}
            open={open}
            isModalVisible={isModalVisible}
         />
      </>
   );
};
