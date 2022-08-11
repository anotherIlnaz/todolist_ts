import {  useStore } from "effector-react";
import { taskPresentationService } from "../../../../taskPresentationService.model";
import { TaskPresForm } from "./view";

export const TaskPresFormContainer = () => {
   const currentTaskId = useStore(
      taskPresentationService.outputs.$taskId
   );

   return (
      <>
         <TaskPresForm />
      </>
   );
};
