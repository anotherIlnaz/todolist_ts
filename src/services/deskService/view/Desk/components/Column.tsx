import { useEvent } from "effector-react";
import { FC } from "react";
import { useDrop } from "react-dnd";
import { ColumnResponseDto } from "../../../../../api/types";
import { TaskContainer, taskService } from "../../../../taskService";
import { ColumnWrapper, NameSC, WrapperSC } from "./Column.styled";

type ColumnsProps = {
   column: ColumnResponseDto;
};

export const Column: FC<ColumnsProps> = ({ column }) => {

   const moveTask = useEvent(taskService.inputs.moveTask)

   const [{ isOver }, drop] = useDrop(() => ({
      accept: "task",
      drop: (item: { taskId: string; fromId: string }) =>
      moveTask({
        taskId: item.taskId,
        fromId: item.fromId,
        toId: column._id,
      }),
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
