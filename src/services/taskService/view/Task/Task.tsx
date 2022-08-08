import { FC } from "react";
import { useDrag } from "react-dnd";
import { Wrapper } from "./Task.styled";
import { TaskProps } from "./Task.types";

export const Task: FC<TaskProps> = ({
   taskTitle,
   taskDescription,
   taskId,
   parentColumnId,
}) => {
   const [{ isDragging }, drag] = useDrag(() => ({
      type: "task",
      item: { taskId: taskId, fromId: parentColumnId },
      collect: (monitor) => ({
         isDragging: monitor.isDragging(),
      }),
   }));
   return (
      <Wrapper ref={drag} isDragging={isDragging}>
         <h1>{taskTitle}</h1>
         <div>{taskDescription}</div>
      </Wrapper>
   );
};
