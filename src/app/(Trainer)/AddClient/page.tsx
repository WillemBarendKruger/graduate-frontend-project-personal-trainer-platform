"use client";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  FormProps,
  Input,
  message,
  Select,
} from "antd";
import { useStyles } from "../style";
import Title from "antd/es/typography/Title";
import { IClient } from "@/Providers/clientProvider/models";
import { useUserActions } from "@/Providers/clientProvider";
import { MailFilled } from "@ant-design/icons";
import { decodeToken } from "@/utils/jwt";

const { Option } = Select;

const AddClient = () => {
  const [form] = Form.useForm();
  const { createClient } = useUserActions();
  const userObj = decodeToken(sessionStorage.getItem("token") ?? "");

  const onFinish: FormProps<IClient>["onFinish"] = async (values) => {
    console.log("addpage", values);
    message.loading("Trying to register client");
    const clientPayload: IClient = {
      fullName: values.fullName,
      email: values.email,
      contactNumber: values.contactNumber,
      sex: values.sex,
      dateOfBirth: values.dateOfBirth,
      activeState: true,
      trainerId: userObj.id,
    };
    createClient(clientPayload);
  };

  const { styles } = useStyles();

  return (
    <div className={styles.divContainer}>
      <Form
        className={styles.formContainer}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Title>Create a Client</Title>
        <Form.Item
          name="fullName"
          label="Name"
          rules={[{ required: true, message: "Please input your name" }]}
        >
          <Input placeholder="Please enter a full name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
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
          name="contactNumber"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input addonBefore={"+27"} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="sex"
          label="Gender"
          rules={[{ required: true, message: "Please select gender!" }]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          // className={styles.formItem}
          name="dateOfBirth"
          label="Date of Birth"
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
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddClient;
