import { FC } from "react";
import { useDrag } from "react-dnd";
import { TaskPresentationContainer } from "../../../taskPresentationService";
import { Wrapper } from "./Task.styled";
import { TaskProps } from "./Task.types";

export const Task: FC<TaskProps> = ({
   taskTitle,
   taskDescription,
   taskId,
   parentColumnId,
   modalOpeningHandler,
   taskIdTransmit,
}) => {
   const [{ isDragging }, drag] = useDrag(() => ({
      type: "task",
      item: { taskId: taskId, fromId: parentColumnId },
      collect: (monitor) => ({
         isDragging: monitor.isDragging(),
      }),
   }));
   return (
      <Wrapper
         ref={drag}
         isDragging={isDragging}
         onClick={() => {
            modalOpeningHandler();
            taskIdTransmit(taskId);
         }}
      >
         <h1>{taskTitle}</h1>
         <div>{taskDescription}</div>
      </Wrapper>
   );
};
