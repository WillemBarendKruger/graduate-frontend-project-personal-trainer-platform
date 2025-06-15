"use client";
import { Button, Checkbox, Form, FormProps, Input } from "antd";
import Title from "antd/es/typography/Title";

type FieldType = {
  fullname?: string;
  email?: string;
  password?: string;
  confirmpassword?: string;
  contactnumber?: string;

  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
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
        <Title style={{ color: "white" }}>Register as Trainer</Title>
        <Form.Item<FieldType>
          label="Name"
          name="fullname"
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
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
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

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Back
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default loginTrainer;
