import { FC } from "react";
import { ConnectDropTarget, useDrop } from "react-dnd";
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
   const [{ isOver }, drop] = useDrop(() => ({
      accept: "task",
      drop: () => {},
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      }),
   }));

   return (
      <WrapperSC ref={drop} isOver={isOver}>
         <ColumnWrapper columnColor={column.color}>
            <NameSC>{column.name}</NameSC>

            <TaskContainer tasks={column.tasks} parentColumnId={column._id} />
         </ColumnWrapper>
      </WrapperSC>
   );
};
