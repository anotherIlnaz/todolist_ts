import { FC } from "react";
import { Column } from "./components/Column";
import { Title } from "./components/Title";
import { Wrapper } from "./Desk.styled";
import { DeskProps } from "./Desk.types";

export const Desk: FC<DeskProps> = ({ deskValue }) => {
   const deskTitle = deskValue.name;
   const columnsData = deskValue.columns;

   console.log(deskValue);

   return (
      <Wrapper>
         <Title deskTitle={deskTitle} />
         {columnsData.map((column) => (
            <Column column={column} />
         ))}
      </Wrapper>
   );
};
