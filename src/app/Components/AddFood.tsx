import { useFoodActions, useFoodState } from "@/Providers/foodProvider";
import { AppleOutlined } from "@ant-design/icons";
import {
  Button,
  Flex,
  Form,
  FormProps,
  Input,
  InputNumber,
  Modal,
  Select,
  Spin,
} from "antd";
import { useState } from "react";
import { useStyles } from "../(Trainer)/style";
import { IFood } from "@/Providers/foodProvider/context";

const { Option } = Select;

const AddFoodModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const { isPending } = useFoodState();
  const { createFood } = useFoodActions();
  const { styles } = useStyles();
  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const onFinish: FormProps<IFood>["onFinish"] = async (values) => {
    createFood(values);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <AppleOutlined />
        Add Food Items
      </Button>
      <Modal
        title="Create a Food Item"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
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
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 24,
                flexWrap: "wrap",
                width: "100%",
              }}
              className="food-modal-flex"
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Left column form items */}
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
                    {
                      required: true,
                      message: "Please input amount of protein!",
                    },
                  ]}
                >
                  <InputNumber placeholder="0" style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                  name="carbs"
                  label="Carbs"
                  rules={[
                    {
                      required: true,
                      message: "Please input amount of carbs!",
                    },
                  ]}
                >
                  <InputNumber placeholder="0" style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                  name="sugar"
                  label="Sugar"
                  rules={[
                    {
                      required: true,
                      message: "Please input amount of sugar!",
                    },
                  ]}
                >
                  <InputNumber placeholder="0" style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                  name="fat"
                  label="Fat"
                  rules={[
                    { required: true, message: "Please input amount of fat!" },
                  ]}
                >
                  <InputNumber placeholder="0" style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                  name="fiber"
                  label="Fiber"
                  rules={[
                    {
                      required: true,
                      message: "Please input amount of fiber!",
                    },
                  ]}
                >
                  <InputNumber placeholder="0" style={{ width: "100%" }} />
                </Form.Item>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Right column form items */}
                <Form.Item
                  name="sodium"
                  label="Sodium"
                  rules={[
                    {
                      required: true,
                      message: "Please input amount of sodium!",
                    },
                  ]}
                >
                  <InputNumber placeholder="0" style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                  name="potassium"
                  label="Potassium"
                  rules={[
                    {
                      required: true,
                      message: "Please input amount of potassium!",
                    },
                  ]}
                >
                  <InputNumber placeholder="0" style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                  name="category"
                  label="Category"
                  rules={[
                    { required: true, message: "Please select a category!" },
                  ]}
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
                  rules={[
                    { required: true, message: "Please input serving amount!" },
                  ]}
                >
                  <InputNumber placeholder="0" style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                  name="cholesterol"
                  label="Cholesterol"
                  rules={[
                    {
                      required: true,
                      message: "Please input amount of cholesterol!",
                    },
                  ]}
                >
                  <InputNumber placeholder="0" style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                  name="energy"
                  label="Energy"
                  rules={[
                    {
                      required: true,
                      message: "Please input amount of energy!",
                    },
                  ]}
                >
                  <InputNumber placeholder="0" style={{ width: "100%" }} />
                </Form.Item>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              <Form.Item className={styles.formItem}>
                <Button type="primary" htmlType="submit">
                  Add Food Item
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

export default AddFoodModal;
