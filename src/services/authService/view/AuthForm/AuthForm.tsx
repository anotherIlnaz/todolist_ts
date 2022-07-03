import React, { FC } from "react";
import { Button, Checkbox, Form, Input } from "antd";

import { Wrapper } from "./AuthForm.styled";
import { AuthFormProps } from "./AuthForm.types";

export const AuthForm: FC<AuthFormProps> = ({}) => {
   const onFinish = (values: any) => {
      console.log("Success:", values);
   };

   const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
   };

   return (
      <Form
         name="basic"
         labelCol={{ span: 8 }}
         wrapperCol={{ span: 16 }}
         initialValues={{ remember: true }}
         onFinish={onFinish}
         onFinishFailed={onFinishFailed}
         autoComplete="off"
      >
         <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Введи Eмайл!" }]}
         >
            <Input />
         </Form.Item>

         <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Введи пароль!" }]}
         >
            <Input.Password />
         </Form.Item>

         <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
         >
            <Checkbox>Сохранить в кэше</Checkbox>
         </Form.Item>

         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
               Submit
            </Button>
         </Form.Item>
      </Form>
   );
};
