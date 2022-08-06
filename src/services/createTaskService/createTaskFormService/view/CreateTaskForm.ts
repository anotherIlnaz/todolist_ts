export {}


// import { Button, Form, Input, Select } from "antd";
// import { useFormik } from "formik";
// import { FC } from "react";
// import * as Yup from "yup";
// import { ErrorText, Wrapper } from "./CreateTaskForm.styled";

// const CreateTaskSchema = Yup.object().shape({
//   title: Yup.string().max(30).required("Title is required"),
//   description: Yup.string().required(),
// });

// export const CreateTaskForm: FC<CreateTaskFormProps> = ({
//   handleSubmit,
//   columnsList,
// }) => {
//   const { values, setFieldValue, handleChange, errors, submitForm } =
//     useFormik<TaskForm>({
//       initialValues: {
//         title: "",
//         description: "",
//         columnId: `${columnsList[0].id}`,
//       },
//       validateOnBlur: false,
//       validateOnChange: false,
//       validationSchema: CreateTaskSchema,
//       onSubmit: handleSubmit,
//     });
//   return (
//     <Wrapper>
//       <Form.Item label="Title of new task">
//         <Input
//           style={{ width: "75%" }}
//           value={values.title}
//           name="title"
//           onChange={handleChange}
//           placeholder="Title"
//           status={errors.title && "error"}
//         ></Input>
//         <ErrorText>{errors.title}</ErrorText>
//       </Form.Item>
//       <Form.Item label="Descritpion">
//         <Input
//           style={{ width: "75%" }}
//           value={values.description}
//           name="description"
//           onChange={handleChange}
//           placeholder="Description"
//           status={errors.description && "error"}
//         ></Input>
//         <ErrorText>{errors.description}</ErrorText>
//       </Form.Item>
//       <Form.Item label="Choose Desk">
//         <Select
//           style={{ width: "75%" }}
//           value={values.columnId}
//           onChange={(id) => setFieldValue("columnId", id)}
//         >
//           {columnsList?.map((column) => (
//             <Select.Option value={column.id} key={column.id}>
//               {column.name}
//             </Select.Option>
//           ))}
//         </Select>
//       </Form.Item>
      
//         <Button  onClick={submitForm}>
//           Submit
//         </Button>
      
//     </Wrapper>
//   );
// };