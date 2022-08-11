import { useEvent, useStore } from "effector-react";
import { taskPresModalService } from "./taskPresModal.model";
import { TaskPresModal } from "./view/TaskPresModal";

const { inputs, outputs } = taskPresModalService;

export const TaskPresModalContainer = () => {
   const open = useStore(outputs.$open);
   const closeHandler = useEvent(inputs.handleClose);

   return (
      <TaskPresModal
         open={open}
         closeHandler={closeHandler}
      />
   );
};
