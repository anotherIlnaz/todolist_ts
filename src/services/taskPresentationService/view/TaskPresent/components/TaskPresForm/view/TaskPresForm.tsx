import { Button, Form, Select } from "antd";
import { useFormik } from "formik";
import { FC } from "react";
import * as Yup from "yup";
import { FormInputDesk } from "../../../../../../createDeskService/view/CreateDeskModal/CreateDeskModal.styled";
import {
   ErrorText,
   TextareaSC,
} from "../../../../../../createTaskService/createTaskFormService/view/CreateTaskForm.styled";
import { PatchTaskPayload } from "../../../../../taskPresentation.types";
import { Wrapper } from "./TaskPresForm.styled";
import { TaskPresFormProps } from "./TaskPresForm.types";

const CreateTaskSchema = Yup.object().shape({
   title: Yup.string().max(30).required("Без заголовка нельзя ;("),
   description: Yup.string().required("Без описания не имеет смысла "),
});

export const TaskPresForm: FC<TaskPresFormProps> = ({ taskData }) => {

   const { values, setFieldValue, handleChange, errors, submitForm } =
      useFormik<PatchTaskPayload>({
         initialValues: {
            data: {
               title: taskData.title,
               preview: taskData.preview,
               description: taskData.description,
            },
            id: taskData._id,
         },
         validateOnBlur: false,
         validateOnChange: false,
         validationSchema: CreateTaskSchema,
         onSubmit: (values) => {
            // без ретурна, иначе при возвращении  интерфейс формика ругается что мы ему возращаем эти значения
         },
         enableReinitialize: true,
      });
   return (
      <Wrapper>
         <FormInputDesk
            type={"text"}
            name={"title"}
            onChange={handleChange}
            value={values.data.title}
         />
         <br />
         <ErrorText>{errors.data?.title}</ErrorText>

         <TextareaSC
            value={values.data.description}
            name="description"
            onChange={handleChange}
         ></TextareaSC>
         <ErrorText>{errors.data?.description}</ErrorText>

         <Button
            onClick={() => {
               submitForm();
            }}
         >
            Готово
         </Button>
      </Wrapper>
   );
};
