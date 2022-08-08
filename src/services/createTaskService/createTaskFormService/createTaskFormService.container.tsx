import { useEvent, useStore } from "effector-react";
import { createTaskFormService } from "./createTaskFormService.model";
import { CreateTaskForm } from "./view/CreateTaskForm";

const { inputs, outputs } = createTaskFormService;

export const CreateTaskFormContainer = () => {
   const deskData = useStore(outputs.$deskData);

   const deskId = deskData?._id;
   const columnsList = deskData?.columns;

   const reGetDesk = useEvent(inputs.reGetDesk)

   const handleSubmit = useEvent(inputs.handleSubmit);

   return (
      <>
         <CreateTaskForm
            handleSubmit={handleSubmit}
            deskId={deskId}
            columnsList={columnsList}
         />
      </>
   );
};
