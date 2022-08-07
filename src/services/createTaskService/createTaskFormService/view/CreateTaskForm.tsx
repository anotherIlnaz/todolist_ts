import { Button, Form, Select } from "antd";
import { useFormik } from "formik";
import { FC } from "react";
import * as Yup from "yup";
import { CreateTaskDto } from "../../../../api/types";
import { FormInputDesk } from "../../../createDeskService/view/CreateDeskModal/CreateDeskModal.styled";
import { StyledLabel } from "../../../registrationService/view/RegistrationForm/RegistrationForm.styled";
import { ErrorText, TextareaSC, Wrapper } from "./CreateTaskForm.styled";

import { CreateTaskFormProps } from "./CreateTaskForm.types";

const CreateTaskSchema = Yup.object().shape({
   title: Yup.string().max(30).required("Без заголовка нельзя ;("),
   description: Yup.string().required("Без описания не имеет смысла "),
});

export const CreateTaskForm: FC<CreateTaskFormProps> = ({
   handleSubmit,
   columnsList,
   deskId,
}) => {
   const { values, setFieldValue, handleChange, errors, submitForm } =
      useFormik<CreateTaskDto>({
         initialValues: {
            title: "",
            description: "",
            deskId: `${deskId}`,
            columnId: columnsList?.[0]?._id || "",
         },
         validateOnBlur: false,
         validateOnChange: false,
         validationSchema: CreateTaskSchema,
         onSubmit: (values) => {
            handleSubmit(values);
            // без ретурна, иначе при возвращении  интерфейс формика ругается что мы ему возращаем эти значения
         },
         enableReinitialize: true,
      });
   return (
      <Wrapper>
         <StyledLabel htmlFor="title">Название задачи:</StyledLabel>
         <br />
         <FormInputDesk
            type={"text"}
            name={"title"}
            onChange={handleChange}
            value={values.title}
         />
         <br />
         {/* <StyledError>{errors.name}</StyledError> */}
         <ErrorText>{errors.title}</ErrorText>

         <Form.Item>
            <TextareaSC
               value={values.description}
               name="description"
               onChange={handleChange}
               placeholder="Описание задачи"
            ></TextareaSC>
            <ErrorText>{errors.description}</ErrorText>
         </Form.Item>
         <Form.Item label="Чуз колумн">
            <Select
               style={{ width: "75%" }}
               value={values.columnId}
               onChange={(id) => setFieldValue("columnId", id)}
               placeholder="Выбери колонку"
            >
               {columnsList?.map((column) => (
                  <Select.Option value={column._id} key={column._id}>
                     {column.name}
                  </Select.Option>
               ))}
            </Select>
         </Form.Item>

         <Button onClick={submitForm}>Готово</Button>
      </Wrapper>
   );
};
