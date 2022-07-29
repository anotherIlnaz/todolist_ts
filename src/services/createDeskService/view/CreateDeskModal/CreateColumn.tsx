import { Button, Input } from "antd";
import { CreateColumnProps } from "./CreateColumn.types";
import { Container, PaggingTop, StyledColumnInput, StyledDelete } from "./CreateDeskModal.styled";
import { CreateDeskModalProps } from "./CreateDeskModal.types";

export const CreateColumn= ({ deleteColumn, index }:CreateColumnProps) => {
   console.log(index);
   return (
      <Container>
         <StyledColumnInput>
            <PaggingTop>
            <label htmlFor="name"></label>
            <br />
            <Input allowClear placeholder="Название колонки:" />
            </PaggingTop>

            <label htmlFor="color"></label>
            <br />
            <Input allowClear placeholder="Цвет:" />
         </StyledColumnInput>
         <StyledDelete onClick={() => deleteColumn(index)}>Удалить</StyledDelete>
      </Container>
   );
};


