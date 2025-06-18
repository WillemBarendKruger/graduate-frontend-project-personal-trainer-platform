"use client";
import { IFood } from "@/Providers/foodProvider/context";
import { Button, Flex, Form, FormProps, Input, Select, Spin } from "antd";
import Title from "antd/es/typography/Title";
import { useFoodActions, useFoodState } from "@/Providers/foodProvider";
import { useStyles } from "../style";

const { Option } = Select;

const AddFood = () => {
  const [form] = Form.useForm();
  const { isPending } = useFoodState();
  const { createFood } = useFoodActions();
  const { styles } = useStyles();

  const onFinish: FormProps<IFood>["onFinish"] = async (values) => {
    createFood(values);
  };

  if (isPending)
    return (
      <Flex
        justify="center"
        align="center"
        style={{ marginBottom: 20, width: "100%" }}
      >
        <Spin size="large" />
      </Flex>
    );

  return (
    <div>
      <Form
        className={styles.formContainer}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Title>Create a Food Item</Title>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please input the name" }]}
        >
          <Input placeholder="Please enter a full name" />
        </Form.Item>

        <Form.Item
          name="protein"
          label="Protein"
          rules={[
            { required: true, message: "Please input amount of protein!" },
          ]}
        >
          <Input placeholder="0" />
        </Form.Item>

        <Form.Item
          name="carbs"
          label="Carbs"
          rules={[{ required: true, message: "Please input amount of carbs!" }]}
        >
          <Input placeholder="0" />
        </Form.Item>

        <Form.Item
          name="sugar"
          label="Sugar"
          rules={[{ required: true, message: "Please input amount of sugar!" }]}
        >
          <Input placeholder="0" />
        </Form.Item>

        <Form.Item
          name="fat"
          label="Fat"
          rules={[{ required: true, message: "Please input amount of fat!" }]}
        >
          <Input placeholder="0" />
        </Form.Item>

        <Form.Item
          name="fiber"
          label="Fiber"
          rules={[
            { required: true, message: "Please input amount of protein!" },
          ]}
        >
          <Input placeholder="0" />
        </Form.Item>
        <Form.Item
          name="sodium"
          label="Sodium"
          rules={[
            { required: true, message: "Please input amount of sodium!" },
          ]}
        >
          <Input placeholder="0" />
        </Form.Item>
        <Form.Item
          name="potassium"
          label="potassium"
          rules={[
            { required: true, message: "Please input amount of potassium!" },
          ]}
        >
          <Input placeholder="0" />
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please select a category!" }]}
        >
          <Select placeholder="select a Category">
            <Option value="veg">veg</Option>
            <Option value="fruit">fruit</Option>
            <Option value="grains">grains</Option>
            <Option value="dairy">dairy</Option>
            <Option value="meat">meat</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="servingSize"
          label="Serving Size"
          rules={[{ required: true, message: "Please input serving amount!" }]}
        >
          <Input placeholder="0" />
        </Form.Item>
        <Form.Item
          name="cholesterol"
          label="Cholesterol"
          rules={[
            { required: true, message: "Please input amount of cholesterol!" },
          ]}
        >
          <Input placeholder="0" />
        </Form.Item>

        <Form.Item
          name="energy"
          label="Energy"
          rules={[
            { required: true, message: "Please input amount of energy!" },
          ]}
        >
          <Input placeholder="0" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Item
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddFood;
