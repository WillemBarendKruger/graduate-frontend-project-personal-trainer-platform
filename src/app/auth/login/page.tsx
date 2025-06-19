"use client";
import { useUserActions, useUserState } from "@/Providers/clientProvider";
import { MailFilled } from "@ant-design/icons";
import { Button, Flex, Form, FormProps, Input, message } from "antd";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";
import { useStyles } from "../style";
import Link from "next/link";
import Image from "next/image";

type FieldType = {
  email?: string;
  password?: string;
};

const Login = () => {
  const { logIn } = useUserActions();
  const { user, isPending, isError } = useUserState();
  const [loading, setLoading] = useState(false);

  const { styles } = useStyles();

  useEffect(() => {
    if (user) {
      message.success("Login successful!");
    }
  }, [user]);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setLoading(true);
    try {
      await logIn(values.email ?? "", values.password ?? "");
    } catch {
      message.error("Login failed. Please check your credentials.");
    }
    setLoading(false);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = () => {
    message.error("Please fill in all required fields.");
  };

  return (
    <div className={styles.divContainer}>
      <Image src="/FitfusionLogo.png" alt="logo" width={200} height={200} />
      <Form
        name="basic"
        className={styles.formContainer}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Title>Login</Title>
        <Form.Item
          className={styles.formItem}
          name="email"
          label="Email"
          layout="vertical"
          rules={[
            {
              required: true,
              type: "email",
              message: "Valid email required!",
            },
          ]}
          style={{ marginBottom: 16 }}
        >
          <Input placeholder="Email" suffix={<MailFilled />} />
        </Form.Item>

        <Form.Item
          className={styles.formItem}
          name="password"
          label="Password"
          layout="vertical"
          rules={[
            { required: true, message: "Password is required!" },
            { min: 6, message: "Password must be at least 6 characters long!" },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Flex justify="center">
            <p style={{ fontSize: 12 }}>
              Dont have an account?{""}
              <Link href={"/auth/register"}> Register.</Link>
            </p>
          </Flex>
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

export default Login;
