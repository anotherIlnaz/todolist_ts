import { useStore } from "effector-react";
import { CreateTaskModalContainer } from "./createTaskModalService";
import { createTaskService } from "./createTaskService.model";

const { inputs, outputs } = createTaskService;

export const CreateTaskContainer = () => {
   const deskData = useStore(outputs.$deskData);

   return (
      <>
         <CreateTaskModalContainer />
      </>
   );
};
