import { Formik } from "formik";
import { FC } from "react";
import * as yup from "yup";
import { CreateUserDto } from "../../../../api/types";

import {
   FormInput,
   FormItem,
   StyledButton,
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
               <div>
                  <FormItem>
                     <label htmlFor="name">Name:</label>
                     <br />
                     <FormInput
                        type={"text"}
                        name={"name"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                     />

                     {touched.name && errors.name && <p>{errors.name}</p>}
                  </FormItem>

                  <FormItem>
                     <label htmlFor="email">Email:</label>
                     <br />
                     <FormInput
                        type="email"
                        name={"email"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                     />
                     {touched.email && errors.email && <p>{errors.email}</p>}
                  </FormItem>

                  <FormItem>
                     <label htmlFor="password">Пароль:</label>
                     <br />
                     <FormInput
                        type={"password"}
                        name={"password"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                     />
                     {touched.password && errors.password && (
                        <p>{errors.password}</p>
                     )}
                  </FormItem>

                  <FormItem>
                     <label htmlFor="passwordConfirmation">
                        Подтверди пароль:
                     </label>
                     <br />
                     <FormInput
                        type={"password"}
                        name={"passwordConfirmation"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.passwordConfirmation}
                     />
                     {touched.passwordConfirmation &&
                        errors.passwordConfirmation && (
                           <p>{errors.passwordConfirmation}</p>
                        )}
                  </FormItem>

                  <StyledButton
                     disabled={(!isValid && !dirty) || isLoading}
                     onClick={() => handleSubmit()}
                     type={"submit"}
                  >
                     Зарегаться
                  </StyledButton>
               </div>
            )}
         </Formik>
      </Wrapper>
   );
};
