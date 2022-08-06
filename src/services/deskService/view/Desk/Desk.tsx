import { Button } from "antd";
import { FC } from "react";
import { CreateTaskModalContainer } from "../../../createTaskService/createTaskModalService";
import { Column } from "./components/Column";
import { Title } from "./components/Title";
import {
   ButtonBlock,
   ButtonSC,
   ColumnsWrapper,
   TitleContainerSc,
   Wrapper,
} from "./Desk.styled";
import { DeskProps } from "./Desk.types";

export const Desk: FC<DeskProps> = ({ deskValue, onDelete, addNewTask }) => {
   const deskTitle = deskValue.name;
   const columnsData = deskValue.columns;


   return (
      <Wrapper>
         <CreateTaskModalContainer />

         <TitleContainerSc>
            <Title deskTitle={deskTitle} />
            <ButtonBlock>
               <ButtonSC onClick={ () =>  addNewTask(deskValue._id) } >Новая задача</ButtonSC>
               <Button danger onClick={() => onDelete(deskValue._id)}>
                  Удалить доску
               </Button>
            </ButtonBlock>
         </TitleContainerSc>

         <ColumnsWrapper>
            {columnsData.map((column) => (
               <Column column={column} />
            ))}
         </ColumnsWrapper>
         
      </Wrapper>
   );
};
