import { FC } from "react";
import { Wrapper } from "./Task.styled";
import { TaskProps } from "./Task.types";

export const Task: FC<TaskProps> = ({ taskTitle, taskDescription, taskId }) => {
   return (
      <Wrapper>
         <h1>{taskTitle}</h1>
         <div>{taskDescription}</div>
      </Wrapper>
   );
};
