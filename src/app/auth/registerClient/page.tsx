"use client";

import React from "react";
import { Button, Checkbox, DatePicker, Form, Input, InputNumber } from "antd";
import FormItem from "antd/es/form/FormItem";
import Title from "antd/es/typography/Title";

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegisterClient: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Form
      {...formItemLayout}
      form={form}
      variant="filled"
      style={{ maxWidth: 600, background: "#2D6E7E" }}
      initialValues={{ variant: "filled" }}
    >
      <Form.Item>
        <Title>Register as Client</Title>
      </Form.Item>
      <Form.Item
        label="Full Name"
        name="name"
        rules={[{ required: true, message: "Please input your full name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Date of Bith"
        name="birthdate"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input addonBefore="+27" style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="reset">
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterClient;
