"use client";
import React, { useState } from "react";
import {
  Button,
  Checkbox,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Select,
  Spin,
} from "antd";
import { IClient } from "@/Providers/clientProvider/models";
import { useUserActions, useUserState } from "@/Providers/clientProvider";
import { MailFilled, UserAddOutlined } from "@ant-design/icons";
import { decodeToken } from "@/utils/jwt";
import { useStyles } from "../(Trainer)/style";

const { Option } = Select;

const AddClientModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const { isPending } = useUserState();
  const { createClient } = useUserActions();
  const userObj = decodeToken(sessionStorage.getItem("token") ?? "");
  const { styles } = useStyles();

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const onFinish = async (values: IClient) => {
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
    await createClient(clientPayload);
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <UserAddOutlined />
        Add Client
      </Button>
      <Modal
        title="Create a Client"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        destroyOnClose
      >
        {isPending ? (
          <Flex
            justify="center"
            align="center"
            style={{ marginBottom: 20, width: "100%" }}
          >
            <Spin size="large" />
          </Flex>
        ) : (
          <Form
            className={styles.formContainer}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
            layout="vertical"
          >
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
              <InputNumber addonBefore={"+27"} style={{ width: "100%" }} />
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
            <div style={{ display: "flex" }}>
              <Form.Item className={styles.formItem}>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
              <Form.Item className={styles.formItem}>
                <Button onClick={handleCancel}>Cancel</Button>
              </Form.Item>
            </div>
          </Form>
        )}
      </Modal>
    </>
  );
};

export default AddClientModal;
