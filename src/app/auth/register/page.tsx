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
  Image,
} from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useStyles } from "../style";
const { Option } = Select;

const Register = () => {
  const { styles } = useStyles();
  const router = useRouter();

  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { register } = useUserActions();

  const handleRegister = async (values: IUser) => {
    setLoading(true);

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
    try {
      await register(userPayload);
      message.success("Register successful!");
      router.push("/auth/login");
    } catch (error) {
      console.error("Register Error:", error);
      message.error("Register failed. Please try again.");
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
    <div className={styles.divContainer}>
      <Image src="/FitfusionLogo.png" style={{ width: 150 }} />
      <Form form={form} onFinish={handleRegister} layout="vertical">
        <div
          style={{ display: currentStep === 1 ? "flex" : "none" }}
          className={styles.formContainer}
        >
          <Title>Register</Title>
          <Form.Item
            className={styles.formItem}
            name="name"
            label="Name"
            layout="vertical"
            rules={[{ required: true, message: "Name is required!" }]}
          >
            <Input placeholder="Name" suffix={<UserOutlined />} />
          </Form.Item>
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
            rules={[
              { required: true, message: "Password is required!" },
              {
                min: 6,
                message: "Password must be at least 6 characters long!",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item
            className={styles.formItem}
            name="confirmPassword"
            label="Confirm Password"
            layout="vertical"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Confirm password is required!" },
              {
                min: 6,
                message: "Password must be at least 6 characters long!",
              },
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
          <Flex justify="center" className={styles.formItem}>
            <Button
              type="primary"
              icon={<ArrowRightOutlined />}
              onClick={handleNextClick}
              style={{ background: "yellowgreen", color: "black", padding: 10 }}
            >
              Next Step
            </Button>
          </Flex>
          <Form.Item>
            <Flex justify="center">
              <p style={{ fontSize: 12 }}>
                Have an account?{""}
                <Link href={"/auth/login"}> log-In.</Link>
              </p>
            </Flex>
          </Form.Item>
        </div>

        <div
          style={{ display: currentStep === 2 ? "flex" : "none" }}
          className={styles.formContainer}
        >
          <Form.Item
            className={styles.formItem}
            name="role"
            label="Role"
            layout="vertical"
            rules={[{ required: true, message: "Please select a role!" }]}
          >
            <Select placeholder="Please select a role">
              <Option value="admin">Trainer</Option>
              <Option value="client">Client</Option>
            </Select>
          </Form.Item>
          <Form.Item
            className={styles.formItem}
            name="contactNumber"
            label="Contact Number"
            layout="vertical"
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
            />
          </Form.Item>
          <Form.Item
            className={styles.formItem}
            name="dateOfBirth"
            label="Date of Birth"
            layout="vertical"
            rules={[
              {
                required: true,
                message: "Please select your Date of Birth!",
              },
            ]}
          >
            <DatePicker
              style={{
                width: "100%",
                borderRadius: 15,
                height: 49,
                padding: 5,
              }}
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
            <Checkbox>
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
              Register
            </Button>
          </Flex>
        </div>
      </Form>
    </div>
  );
};

export default Register;
