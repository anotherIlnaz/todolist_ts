import { Button, message, Modal } from "antd";
import { FC } from "react";
import { FormInputDesk, StyledError } from "./CreateDeskModal.styled";
import { CreateDeskModalProps } from "./CreateDeskModal.types";
import { StyledLabel } from "../../../registrationService/view/RegistrationForm/RegistrationForm.styled";
import { CreateColumn } from "./CreateColumn";
import { useFormik } from "formik";
import { ColumnCreateDto, CreateDeskDto } from "../../../../api/types";
import * as Yup from "yup";

const CreateDeskSchema = Yup.object().shape({
   name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(30)
      .required("Имя обязательно"),
   columns: Yup.array().of(
      Yup.object().shape({
         name: Yup.string().required("Назовите колонку"),
         color: Yup.string(),
      })
   ),
});

export const CreateDeskModal: FC<CreateDeskModalProps> = ({
   isModalOpen,
   handleSubmit,
   handleCancel,
}) => {
   const { values, setFieldValue, handleChange, errors, submitForm } =
      useFormik<CreateDeskDto>({
         initialValues: {
            name: "",
            columns: [
               { name: "", color: "#888888" },
               { name: "", color: "#739e9e" },
            ] as ColumnCreateDto[],
         },
         validateOnBlur: false,
         validateOnChange: false,
         validationSchema: CreateDeskSchema,
         onSubmit: handleSubmit,
      });
   const columnsValue = values.columns;

   const addColumn = () => {
      if (values.columns.length <= 5)
         return setFieldValue("columns", [
            ...values.columns,
            { name: "", color: "#ffffff" },
         ]);
      return message.error("Число колонок не может быть больше 6");
   };

   const deleteColumn = (index: number) => {
      setFieldValue(
         "columns",
         columnsValue.filter((_, i) => index !== i)
      );
   };
   // const patchColumn = (
   //    index: number,
   //    value: string,
   //    fieldName: "name" | "color"
   // ) => {
   //    setColumns((prev) =>
   //       prev.map((elem, i) =>
   //          index === i ? { ...elem, [fieldName]: value } : elem
   //       )
   //    );
   // };

   console.log(errors.columns);

   return (
      <>
         <Modal
            title="Cоздай доску"
            visible={isModalOpen}
            onOk={() => submitForm()}
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
                     onChange={handleChange}
                     value={values.name}
                  />
                  <br />
                  <StyledError>{errors.name}</StyledError>

                  {columnsValue.map((columnsStateValue, index) => (
                     <>
                        <CreateColumn
                           key={index}
                           deleteColumn={deleteColumn}
                           index={index}
                           columnsStateValue={columnsStateValue}
                           onChange={(value) =>
                              setFieldValue(`columns[${index}]`, value)
                           }
                        />
                        <StyledError>
                           {(errors.columns?.[index] as { name: string })
                              ?.name || null}
                        </StyledError>
                     </>
                  ))}
                  <br />

                  <Button type="primary" onClick={addColumn}>
                     Добавить колонку
                  </Button>
               </>
            </>
         </Modal>
      </>
   );
};
