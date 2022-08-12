import { useStore } from "effector-react";
import { taskPresentationService } from "../../../../taskPresentationService.model";
import { TaskPresForm } from "./view";

export const TaskPresFormContainer = () => {
   const taskData = useStore(taskPresentationService.outputs.$taskData);

   console.log(taskData);

   return (
      <>
         <TaskPresForm taskData={taskData} />
      </>
   );
};
