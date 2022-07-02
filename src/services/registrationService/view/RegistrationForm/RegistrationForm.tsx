import { Formik } from 'formik';
import { FC } from 'react';
import * as yup from 'yup'

import { FormInput, FormItem, StyledButton, Wrapper } from './RegistrationForm.styled';
import { RegistrationFormProps } from './RegistrationForm.types';

const validationsSchema = yup.object().shape({
  name: yup.string().required("Обязательное поле"),
  email: yup.string().required("Обязательное поле"),
  confirmEmail: yup
     .string()
     .oneOf([yup.ref("email")], "Emailы не совпадают")
     .required("Обязательное поле"),
  password: yup.string().required("Обязательное поле"),
  confirmPassword: yup
     .string()
     .oneOf([yup.ref("password")], "Пароли не совпадают")
     .required("Обязательное поле"),
});

export const RegistrationForm: FC<RegistrationFormProps> = ({}) => {
 return (
    <Wrapper>
       <Formik
          initialValues={{
             name: "",
             email: "",
             confirmEmail: "",
             password: "",
             confirmPassword: "",
          }}
          onSubmit={(values) => console.log(values)}
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
                   <label htmlFor="confirmEmail">Confirm Email:</label>
                   <br />
                   <FormInput
                      type="email"
                      name={"confirmEmail"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmEmail}
                   />
                   {touched.confirmEmail && errors.confirmEmail && (
                      <p>{errors.confirmEmail}</p>
                   )}
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
                   <label htmlFor="confirmPassword">Подтверди пароль:</label>
                   <br />
                   <FormInput
                      type={"password"}
                      name={"confirmPassword"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                   />
                   {touched.confirmPassword && errors.confirmPassword && (
                      <p>{errors.confirmPassword}</p>
                   )}
                </FormItem>

                <StyledButton
                   disabled={!isValid && !dirty}
                   onClick={handleBlur}
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
