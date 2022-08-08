import { useStore } from "effector-react";
import { FC } from "react";
import { TaskTinyResponseDto } from "../../api/types";
import { taskService } from "./taskService.model";
import { Task } from "./view/Task";

const { inputs, outputs } = taskService;

type TaskContainerProps = {
   tasks: TaskTinyResponseDto[];
};

export const TaskContainer: FC<TaskContainerProps> = ({ tasks }) => {
   return (
      <>
         {tasks.map((task) => (
            <Task
               taskTitle={task.title}
               taskDescription={task.description}
               taskId={task._id}
            />
         ))}
      </>
   );
};
