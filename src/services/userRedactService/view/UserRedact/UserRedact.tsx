import { Modal } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { Formik } from "formik";
import { FC, useState } from "react";
import * as yup from "yup";

import { PatchUserDto } from "../../../../api/types";
import {
   ErrorMessage,
   FormInput,
   StyledButton,
   StyledLabel,
} from "../../../registrationService/view/RegistrationForm/RegistrationForm.styled";
import { Wrapper } from "./UserRedact.styled";
import { UserRedactProps } from "./UserRedact.types";

const validationsSchema = yup.object().shape({
   name: yup.string().required("Обязательное поле"),
   email: yup.string().required("Обязательное поле"),
});

export const UserRedact: FC<UserRedactProps> = ({
   handleCancel,
   handleOk,
   isModalVisible,
}) => {
   return (
      <Formik<PatchUserDto>
         initialValues={{
            name: "",
            email: "",
            avatar: "",
         }}
         onSubmit={handleOk}
         validateOnBlur
         validationSchema={validationsSchema}
      >
         {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
         }) => (
            <Modal
               title="Basic Modal"
               visible={isModalVisible}
               onOk={() => handleSubmit()}
               onCancel={handleCancel}
            >
               <Wrapper>
                  <>
                     <FormItem>
                        <StyledLabel htmlFor="name">Name:</StyledLabel>
                        <br />
                        <FormInput
                           type={"text"}
                           name={"name"}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.name}
                        />

                        {touched.name && <ErrorMessage text={errors.name} />}
                     </FormItem>

                     <FormItem>
                        <StyledLabel htmlFor="email">Email:</StyledLabel>
                        <br />
                        <FormInput
                           type="email"
                           name={"email"}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.email}
                        />
                        {touched.email && <ErrorMessage text={errors.email} />}
                     </FormItem>

                     <StyledButton
                        disabled={!isValid && !dirty}
                        onClick={() => handleSubmit()}
                        type={"submit"}
                     >
                        Изменить
                     </StyledButton>
                  </>
               </Wrapper>
            </Modal>
         )}
      </Formik>
   );
};
