import { Button, Modal } from "antd";
import { FC } from "react";
import { FormInputDesk } from "./CreateDeskModal.styled";
import { CreateDeskModalProps } from "./CreateDeskModal.types";
import { StyledLabel } from "../../../registrationService/view/RegistrationForm/RegistrationForm.styled";
import { CreateColumn } from "./CreateColumn";

export const CreateDeskModal: FC<CreateDeskModalProps> = ({
   deleteColumn,
   addColumn,
   isModalOpen,
   handleCancel,
   columns,
}) => {
   return (
      <>
         <Modal
            title="Cоздай доску"
            visible={isModalOpen}
            // onOk={() => handleSubmit()}
            onCancel={handleCancel}
            centered
         >
            <>
               <>
                  <StyledLabel htmlFor="name">Название доски:</StyledLabel>
                  <br />
                  <FormInputDesk
                     type={"text"}
                     name={"name"}
                     // onChange={handleChange}
                     // onBlur={handleBlur}
                     // value={values.name}
                  />

                  {/* {touched.name && <ErrorMessage text={errors.name} />} */}

                  {columns.map((elem, index) => (
                     <CreateColumn
                        key={index}
                        deleteColumn={deleteColumn}
                        index={index}
                     />
                  ))}
                  <br />
                  <Button type="primary" onClick={() => addColumn()}>
                     {" "}
                     Добавить колонку{" "}
                  </Button>
               </>
            </>
         </Modal>
      </>
   );
};
