import { Button, Input, Modal } from "antd";
import { CreateColumnProps } from "./CreateColumn.types";
import {
   ColorPicker,
   Container,
   PaggingTop,
   StyledColumnInput,
   StyledDelete,
} from "./CreateDeskModal.styled";

import { HexColorPicker } from "react-colorful";
import { IoColorFilter } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

export const CreateColumn = ({
   deleteColumn,
   index,
   columnsStateValue,
   onChange,
}: CreateColumnProps) => {
   const [isModalVisible, setIsModalVisible] = useState(false);
   const color = useRef("");

   const showModal = () => {
      setIsModalVisible(true);
   };

   const handleOk = () => {
      setIsModalVisible(false);
   };

   const handleCancel = () => {
      setIsModalVisible(false);
   };
   console.log(index);

   return (
      <Container>
         <StyledColumnInput>
            <PaggingTop>
               <label htmlFor="name"></label>
               <br />
               <Input
                  allowClear
                  placeholder="Название колонки:"
                  style={{
                     border: `4px solid ${columnsStateValue.color}`,
                  }}
                  onChange={(e) =>
                     onChange({
                        name: e.target.value,
                        color: columnsStateValue.color,
                     })
                  }
               />
               <IoColorFilter size={26} onClick={showModal} />
            </PaggingTop>

            <Modal
               visible={isModalVisible}
               onOk={() => {
                  handleOk();
                  onChange({ color: color.current, name: columnsStateValue.name });
               }}
               onCancel={handleCancel}
               closable={false}
            >
               <label htmlFor="color"></label>
               <ColorPicker>
                  <HexColorPicker
                     color={columnsStateValue.color}
                     onChange={(value) => {
                        color.current = value;
                     }}
                  />
               </ColorPicker>
            </Modal>
         </StyledColumnInput>
         <StyledDelete onClick={() => deleteColumn(index)}>
            Удалить
         </StyledDelete>
      </Container>
   );
};
