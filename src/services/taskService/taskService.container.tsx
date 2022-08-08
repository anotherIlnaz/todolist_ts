import { FC } from "react";
import { TaskTinyResponseDto } from "../../api/types";
import { Task } from "./view/Task";

type TaskContainerProps = {
   tasks: TaskTinyResponseDto[];
   parentColumnId: string;
};

export const TaskContainer: FC<TaskContainerProps> = ({
   tasks,
   parentColumnId,
}) => {
   return (
      <>
         {tasks.map((task) => (
            <Task
               taskTitle={task.title}
               taskDescription={task.description}
               taskId={task._id}
               parentColumnId={parentColumnId}
            />
         ))}
      </>
   );
};
