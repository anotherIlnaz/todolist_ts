import { FC } from "react";
import { ColumnResponseDto } from "../../../../../api/types";
import { ColumnWrapper, WrapperSC } from "./Column.styled";

type ColumnsProps = {
   column: ColumnResponseDto;
};

export const Column: FC<ColumnsProps> = ({ column }) => {
   return (
      <WrapperSC>
         <ColumnWrapper columnColor={column.color}>
            <h1>{column.name}</h1>
         </ColumnWrapper>
      </WrapperSC>
   );
};
