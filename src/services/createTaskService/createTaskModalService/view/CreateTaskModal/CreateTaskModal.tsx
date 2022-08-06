import { Modal } from "antd";
import { FC } from "react";
import { CreateTaskModalProps } from "./CreateTaskModal.types";
import { StyledLabel } from "../../../../registrationService/view/RegistrationForm/RegistrationForm.styled";
import { FormInputDesk } from "../../../../createDeskService/view/CreateDeskModal/CreateDeskModal.styled";

export const CreateTaskModal: FC<CreateTaskModalProps> = ({
   close,
   open,
   isModalVisible,
}) => {
   return (
      <>
         <Modal
            title="Cоздай доску"
            visible={isModalVisible}
            // onOk={}
            onCancel={close}
            centered
         >
            <>
               <StyledLabel htmlFor="name">Название задачи:</StyledLabel>
               <br />
               <FormInputDesk
                  type={"text"}
                  name={"name"}
                  // onChange={handleChange}
                  // value={values.name}
               />
               <br />
               {/* <StyledError>{errors.name}</StyledError> */}
            </>
         </Modal>
      </>
   );
};
