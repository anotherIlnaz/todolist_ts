import { Input, Typography } from "@mui/material";
import { Button, Form, Select } from "antd";
import { useFormik } from "formik";
import { FC } from "react";
import * as Yup from "yup";
import { PatchTaskDto } from "../../../../../../../api/types";
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

export const TaskPresForm: FC<TaskPresFormProps> = ({
   taskData,
   deleteTask,
   patchTask,
}) => {
   const { values, handleChange, errors, submitForm } =
      useFormik<PatchTaskPayload>({
         initialValues: {
            title: taskData.title,
            preview: taskData.preview,
            description: taskData.description,
            id: taskData._id,
         },
         validateOnBlur: false,
         validateOnChange: false,
         validationSchema: CreateTaskSchema,
         onSubmit: (values) => {
            patchTask(values);
            // без ретурна, иначе при возвращении  интерфейс формика ругается что мы ему возращаем эти значения
         },
         enableReinitialize: true,
      });
   return (
      <Wrapper>
         <Input
            type={"text"}
            name={"title"}
            onChange={handleChange}
            value={values.title}
            size="medium"
         />
         <br />
         <ErrorText>{errors?.title}</ErrorText>

         <TextareaSC
            value={values.description}
            name="description"
            onChange={handleChange}
         ></TextareaSC>
         <ErrorText>{errors?.description}</ErrorText>

         <Button onClick={submitForm}>Готово</Button>
         <Button
            onClick={() => {
               deleteTask(taskData._id);
            }}
         >
            Удалить
         </Button>
      </Wrapper>
   );
};
