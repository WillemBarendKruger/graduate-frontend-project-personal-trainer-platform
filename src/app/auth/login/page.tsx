"use client";
import { useUserActions, useUserState } from "@/Providers/clientProvider";
import { MailFilled } from "@ant-design/icons";
import { Button, Flex, Form, FormProps, Input, message } from "antd";
import Title from "antd/es/typography/Title";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useStyles } from "../style";
import Link from "next/link";

type FieldType = {
  email?: string;
  password?: string;
};

const LoginTrainer = () => {
  const { logIn } = useUserActions();
  const { user, isPending, isError } = useUserState();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { styles } = useStyles();

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
    <div className={styles.divContainer}>
      <Form
        name="basic"
        className={styles.formContainer}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Title style={{ color: "white" }}>Login</Title>
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
        >
          <Input placeholder="Email" suffix={<MailFilled />} />
        </Form.Item>

        <Form.Item
          className={styles.formItem}
          name="password"
          label="Password"
          layout="vertical"
          rules={[{ required: true, message: "Password is required!" }]}
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

export default LoginTrainer;
