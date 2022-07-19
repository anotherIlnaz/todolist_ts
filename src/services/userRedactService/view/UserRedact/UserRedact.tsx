import { Modal } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { Formik } from "formik";
import { FC } from "react";
import * as yup from "yup";

import { PatchUserDto } from "../../../../api/types";
import {
   ErrorMessage,
   FormInput,
   StyledLabel,
} from "../../../registrationService/view/RegistrationForm/RegistrationForm.styled";
import { userService } from "../../../userService";
import { UploadImageContainer } from "../../uploadImageService";
import { Wrapper } from "./UserRedact.styled";
import { UserRedactProps } from "./UserRedact.types";

const validationsSchema = yup.object().shape({
   name: yup.string(),
   email: yup.string(),
});

export const UserRedact: FC<UserRedactProps> = ({
   handleCancel,
   handleOk,
   isModalVisible,
   userData,
}) => {
   return (
      <Formik<PatchUserDto>
         initialValues={{
            name: userData?.name,
            email: userData?.email,
            avatar: userData?.avatar || "",
         }}
         onSubmit={handleOk}
         validateOnBlur
         validationSchema={validationsSchema}
         enableReinitialize={true}
      >
         {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            setFieldValue,
            handleSubmit,
         }) => (
            <Modal
               title="Basic Modal"
               visible={isModalVisible}
               onOk={() => handleSubmit()}
               onCancel={handleCancel}
               centered 
            >
               <Wrapper>
                  <>
                     <FormItem>
                        <UploadImageContainer
                           image={values.avatar}
                           handleChange={(image) =>
                              setFieldValue("avatar", image)
                           }
                        />
                     </FormItem>

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
                  </>
               </Wrapper>
            </Modal>
         )}
      </Formik>
   );
};
