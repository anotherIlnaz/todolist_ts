import { FC } from "react";
import { TaskPresModalContainer } from "./components/TaskPresModal/taskPresModal.container";
import { Wrapper } from "./TaskPresent.styled";
import { TaskPresentProps } from "./TaskPresent.types";

export const TaskPresent: FC<TaskPresentProps> = ({}) => {
   return (
      <Wrapper>
         <TaskPresModalContainer />
      </Wrapper>
   );
};
