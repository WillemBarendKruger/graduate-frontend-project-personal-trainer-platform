"use client";
import { Button, Form, FormProps, Input } from "antd";
import Title from "antd/es/typography/Title";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const loginTrainer = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        backgroundImage: `linear-gradient(rgba(181, 179, 179, 0.6), rgba(8, 8, 8, 0.6)), url("/formBackground.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{
          maxWidth: 600,
          border: "2px solid white",
          padding: 10,
          borderRadius: 10,
          backgroundImage: `linear-gradient(rgba(181, 179, 179, 0.6))`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Title style={{ color: "white" }}>Login</Title>
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          label={null}
        >
          <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default loginTrainer;
