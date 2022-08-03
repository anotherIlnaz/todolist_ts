import { FC } from "react";
import { ColumnResponseDto } from "../../../../../api/types";
import { WrapperSC } from "./Column.styled";

type ColumnsProps = {
   column: ColumnResponseDto;
};

export const Column: FC<ColumnsProps> = ({ column }) => {
   return (
      <WrapperSC>
         <h1>{column.name}</h1>
         <ColumnWrapper>
            <h1>{column.color}</h1>
         </ColumnWrapper>
      </WrapperSC>
   );
};
