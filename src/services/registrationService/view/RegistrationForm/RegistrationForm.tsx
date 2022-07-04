import { Formik } from "formik";
import { FC } from "react";
import * as yup from "yup";
import { CreateUserDto } from "../../../../api/types";
import { WelcomePageStatus } from "../../../welcomePageService/welcomePageService.types";

import {
   ErrorMessage,
   FormInput,
   FormItem,
   StyledButton,
   StyledLabel,
   Wrapper,
} from "./RegistrationForm.styled";
import { RegistrationFormProps } from "./RegistrationForm.types";

const validationsSchema = yup.object().shape({
   name: yup.string().required("Обязательное поле"),
   email: yup.string().required("Обязательное поле"),

   password: yup.string().required("Обязательное поле"),
   passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Пароли не совпадают")
      .required("Обязательное поле"),
});

export const RegistrationForm: FC<RegistrationFormProps> = ({
   handleRegisterUser,
   isLoading,
   setStatus,
}) => {
   return (
      <Wrapper>
         <Formik<CreateUserDto>
            initialValues={{
               name: "",
               email: "",
               password: "",
               passwordConfirmation: "",
            }}
            onSubmit={handleRegisterUser}
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

                  <FormItem>
                     <StyledLabel htmlFor="password">Пароль:</StyledLabel>
                     <br />
                     <FormInput
                        type={"password"}
                        name={"password"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                     />
                     {touched.password && (
                        <ErrorMessage text={errors.password} />
                     )}
                  </FormItem>

                  <FormItem>
                     <StyledLabel htmlFor="passwordConfirmation">
                        Подтверди пароль:
                     </StyledLabel>
                     <br />
                     <FormInput
                        type={"password"}
                        name={"passwordConfirmation"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.passwordConfirmation}
                     />
                     {touched.passwordConfirmation && (
                        <ErrorMessage text={errors.passwordConfirmation} />
                     )}
                  </FormItem>

                  <StyledButton
                     disabled={(!isValid && !dirty) || isLoading}
                     onClick={() => handleSubmit()}
                     type={"submit"}
                  >
                     Зарегаться
                  </StyledButton>

                  <StyledButton
                  onClick={() => setStatus(WelcomePageStatus.Authentication)}
                  > Есть аккаунт </StyledButton>
               </>
            )}
         </Formik>
      </Wrapper>
   );
};
