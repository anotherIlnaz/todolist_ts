import { Modal } from "antd";
import { FC } from "react";
import { CreateTaskModalProps } from "./CreateTaskModal.types";
import { StyledLabel } from "../../../../registrationService/view/RegistrationForm/RegistrationForm.styled";
import { FormInputDesk } from "../../../../createDeskService/view/CreateDeskModal/CreateDeskModal.styled";
import { CreateTaskFormContainer } from "../../../createTaskFormService/createTaskFormService.container";

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
            onCancel={close}
            centered
            footer={null}
         >
            <>
               <CreateTaskFormContainer />
            </>
         </Modal>
      </>
   );
};
