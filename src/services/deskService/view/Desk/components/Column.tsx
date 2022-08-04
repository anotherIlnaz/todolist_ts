import { FC } from "react";
import { ColumnResponseDto } from "../../../../../api/types";
import { ColumnWrapper, NameSC, WrapperSC } from "./Column.styled";

type ColumnsProps = {
   column: ColumnResponseDto;
};

export const Column: FC<ColumnsProps> = ({ column }) => {
   return (
      <WrapperSC>
         <ColumnWrapper columnColor={column.color}>
            <NameSC>{column.name}</NameSC>
         </ColumnWrapper>
      </WrapperSC>
   );
};
