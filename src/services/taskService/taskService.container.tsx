import { useEvent } from "effector-react";
import { FC } from "react";
import { ConnectDropTarget } from "react-dnd";
import { TaskTinyResponseDto } from "../../api/types";
import { taskPresentationService } from "../taskPresentationService/taskPresentationService.model";
import { taskPresModalService } from "../taskPresentationService/view/TaskPresent/components/TaskPresModal/taskPresModal.model";
import { Task } from "./view/Task";

type TaskContainerProps = {
   tasks: TaskTinyResponseDto[];
   parentColumnId: string;
};

export const TaskContainer: FC<TaskContainerProps> = ({
   tasks,
   parentColumnId,
}) => {
   const modalOpeningHandler = useEvent(taskPresModalService.inputs.handleOpen);

   const taskIdTransmit = useEvent(taskPresentationService.inputs.taskIdTransmit);

   return (
      <>
         {tasks.map((task) => (
            <Task
               taskTitle={task.title}
               taskDescription={task.description}
               taskId={task._id}
               parentColumnId={parentColumnId}
               modalOpeningHandler={modalOpeningHandler}
               key={task._id}
               taskIdTransmit={taskIdTransmit}
            />
         ))}
      </>
   );
};
