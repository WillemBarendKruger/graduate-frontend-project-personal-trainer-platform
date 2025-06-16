"use client";
import { useUserActions } from "@/Providers/clientProvider";
import { IUser } from "@/Providers/clientProvider/models";
import {
  ArrowRightOutlined,
  MailFilled,
  PhoneFilled,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  DatePicker,
  Flex,
  Form,
  Input,
  message,
  Select,
} from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
const { Option } = Select;

const LoginTrainer = () => {
  const router = useRouter();

  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { register } = useUserActions();

  const handleSignUp = async (values: IUser) => {
    setLoading(true);
    try {
      const userPayload: IUser = {
        name: values.name || "",
        email: values.email || "",
        password: values.password || "",
        confirmPassword: values.confirmPassword || "",
        role: values.role || "client",
        contactNumber: values.contactNumber || "",
        planType: values.planType || "base",
        activeState: values.role === "admin" ? true : undefined,
        trial: values.role === "admin" ? false : undefined,
        policiesAccepted: values.policiesAccepted || false,
      };

      if (
        !userPayload.name ||
        !userPayload.email ||
        !userPayload.password ||
        !userPayload.confirmPassword
      ) {
        message.error("Please fill all required fields");
        setLoading(false);
        return;
      }

      if (userPayload.password !== userPayload.confirmPassword) {
        message.error("Password and Confirm Password do not match");
        setLoading(false);
        return;
      }
      await register(userPayload);
      message.success("Signup successful!");
      router.push("/auth/signin");
    } catch (error) {
      console.error("Signup Error:", error);
      message.error("Signup failed. Please try again.");
    }
    setLoading(false);
  };

  const handleNextClick = async () => {
    try {
      await form.validateFields([
        "name",
        "email",
        "password",
        "confirmPassword",
      ]);
      setCurrentStep(2);
    } catch {
      message.error("Please fill all required fields correctly");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        backgroundImage: `linear-gradient(rgba(181, 179, 179, 0.6), rgba(8, 8, 8, 0.8)), url("/formBackground.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Form
        form={form}
        /*className={styles.loginForm}*/ onFinish={handleSignUp}
        style={{
          width: 300,
          background: "#2D6E7E",
          padding: 15,
          border: "2px solid white",
          borderRadius: 15,
        }}
      >
        <div style={{ display: currentStep === 1 ? "block" : "none" }}>
          <Form.Item>
            <Title
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Register
            </Title>
          </Form.Item>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Name is required!" }]}
          >
            <Input placeholder="Name" suffix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            name="email"
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
            name="password"
            rules={[{ required: true, message: "Password is required!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Confirm password is required!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm password" />
          </Form.Item>
          <Flex justify="center">
            <Button
              type="primary"
              icon={<ArrowRightOutlined />}
              onClick={handleNextClick}
              style={{ background: "yellowgreen", color: "black" }}
            >
              Next Step
            </Button>
          </Flex>
          <Form.Item>
            <Flex justify="center">
              <p style={{ fontSize: 12, color: "white" }}>
                Have an account?{""}
                <Link href={"/auth/login"}> log-In.</Link>
              </p>
            </Flex>
          </Form.Item>
        </div>

        <div style={{ display: currentStep === 2 ? "block" : "none" }}>
          <Form.Item
            name="role"
            rules={[{ required: true, message: "Please select a role!" }]}
          >
            <Select placeholder="Please select a role">
              <Option value="admin">Trainer</Option>
              <Option value="client">Client</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="contactNumber"
            rules={[
              {
                required: true,
                message: "Please input your contact number!",
              },
            ]}
          >
            <Input
              addonBefore="+27"
              placeholder="(00 000 0000)"
              suffix={<PhoneFilled />}
              style={{ background: "white", borderRadius: 10, padding: 5 }}
            />
          </Form.Item>
          <Form.Item
            name="dateOfBirth"
            rules={[
              {
                required: true,
                message: "Please select your Date of Birth!",
              },
            ]}
          >
            <DatePicker
              style={{ width: "100%", borderRadius: 15, height: 49 }}
              placeholder="Select Date of Birth"
              format="YYYY-MM-DD"
            />
          </Form.Item>
          <Form.Item
            name="policiesAccepted"
            valuePropName="checked"
            rules={[
              {
                required: true,
                message: "You must accept the Privacy Policy.",
              },
            ]}
          >
            <Checkbox style={{ color: "white" }}>
              I accept the <Link href="/privacy-policy">Privacy Policy</Link>
            </Checkbox>
          </Form.Item>
          <Flex justify="center">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              style={{ background: "yellowgreen", color: "black" }}
            >
              Sign Up
            </Button>
          </Flex>
        </div>
      </Form>
    </div>
  );
};

export default LoginTrainer;
