"use client";
import { useUserActions, useUserState } from "@/Providers/clientProvider";
import { Button, Form, FormProps, Input, message } from "antd";
import Title from "antd/es/typography/Title";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type FieldType = {
  email?: string;
  password?: string;
};

const LoginTrainer = () => {
  const { logIn } = useUserActions();
  const { user, isPending, isError } = useUserState();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      message.success("Login successful!");
      if (user.role === "trainer" || user.role === "admin") {
        router.replace("/TrainerDashboard");
      } else if (user.role === "client") {
        router.replace("/clientDashboard");
      }
    }
  }, [user]);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setLoading(true);
    try {
      await logIn(values.email || "", values.password || "");
    } catch {
      message.error("Login failed. Please check your credentials.");
    }
    setLoading(false);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = () => {
    message.error("Please fill in all required fields.");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        minHeight: "100vh",
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

        <Form.Item label={null}>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading || isPending}
          >
            Login
          </Button>
        </Form.Item>
        {isError && (
          <div style={{ color: "red", textAlign: "center" }}>
            Login failed. Please check your credentials.
          </div>
        )}
      </Form>
    </div>
  );
};

export default LoginTrainer;
