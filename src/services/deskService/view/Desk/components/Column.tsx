import { FC } from "react";
import { useDrop } from "react-dnd";
import { ColumnResponseDto } from "../../../../../api/types";
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
         isOver: !!monitor.isOver(),
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
