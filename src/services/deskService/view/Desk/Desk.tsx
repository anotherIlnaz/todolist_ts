import { Button } from "antd";
import { FC } from "react";
import { Column } from "./components/Column";
import { Title } from "./components/Title";
import { ColumnsWrapper, TitleContainerSc, Wrapper } from "./Desk.styled";
import { DeskProps } from "./Desk.types";

export const Desk: FC<DeskProps> = ({ deskValue, onDelete }) => {
   const deskTitle = deskValue.name;
   const columnsData = deskValue.columns;

   console.log(deskValue);

   return (
      <Wrapper>
         <TitleContainerSc>
            <Title deskTitle={deskTitle} />
            <Button danger onClick={() => onDelete(deskValue._id)}>
               Удалить доску
            </Button>
         </TitleContainerSc>
         <ColumnsWrapper>
            {columnsData.map((column) => (
               <Column column={column} />
            ))}
         </ColumnsWrapper>
      </Wrapper>
   );
};
