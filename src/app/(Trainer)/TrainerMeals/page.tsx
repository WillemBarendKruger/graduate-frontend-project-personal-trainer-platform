import { Flex, Spin } from "antd";

const mealsPage = () => {
  if (true)
    return (
      <Flex
        justify="center"
        align="center"
        style={{ marginBottom: 20, width: "100vw", height: "100vh" }}
      >
        <Spin size="large" />
      </Flex>
    );
  return <div>meals page</div>;
};

export default mealsPage;
