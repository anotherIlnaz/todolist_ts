import { useEvent, useStore } from "effector-react";
import { taskPresentationService } from "../../../../taskPresentationService.model";
import { taskPresFormService } from "./taskPresForm.model";
import { TaskPresForm } from "./view";

export const TaskPresFormContainer = () => {
   const taskData = useStore(taskPresentationService.outputs.$taskData);

   const deleteTask = useEvent(taskPresFormService.inputs.deleteTask);
   const patchTask = useEvent(taskPresFormService.inputs.patchTask);

   return (
      <>
         <TaskPresForm
            taskData={taskData}
            deleteTask={deleteTask}
            patchTask={patchTask}
         />
      </>
   );
};
