import { FC } from "react";
import {
   ColumnResponseDto,
   TaskTinyResponseDto,
} from "../../../../../api/types";
import { CreateTaskContainer } from "../../../../createTaskService";
import { TaskContainer } from "../../../../taskService";
import { ColumnWrapper, NameSC, WrapperSC } from "./Column.styled";

type ColumnsProps = {
   column: ColumnResponseDto;
};

export const Column: FC<ColumnsProps> = ({ column }) => {
   return (
      <WrapperSC>
         <ColumnWrapper columnColor={column.color}>
            <NameSC>{column.name}</NameSC>
            <CreateTaskContainer />
            <TaskContainer tasks={column.tasks} />
         </ColumnWrapper>
      </WrapperSC>
   );
};
