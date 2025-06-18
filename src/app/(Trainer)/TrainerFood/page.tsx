"use client";
import { decodeToken } from "@/utils/jwt";
import { useFoodState, useFoodActions } from "@/Providers/foodProvider/index";
import { IFood } from "@/Providers/foodProvider/context";
import { EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Card, Flex, Spin } from "antd";
import { useEffect } from "react";

const actions: React.ReactNode[] = [
  <EditOutlined key="edit" />,
  <EllipsisOutlined key="ellipsis" />,
];

const FoodsPage = () => {
  const { foods, isPending } = useFoodState();
  const { getFoods } = useFoodActions();

  useEffect(() => {
    const userObj = decodeToken(sessionStorage.getItem("token") ?? "");
    if (userObj.id) {
      getFoods();
    }
  }, []);

  if (isPending)
    return (
      <Flex
        justify="center"
        align="center"
        style={{ marginBottom: 20, width: "100vw", height: "100vh" }}
      >
        <Spin size="large" />
      </Flex>
    );

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 24,
        padding: 20,
        minWidth: 500,
        width: "100vw",
      }}
    >
      {foods && foods.length > 0 ? (
        foods.map((food: IFood) => (
          <Card
            key={food.id}
            style={{
              minWidth: 300,
              maxHeight: "fit-content",
              marginBottom: 16,
            }}
            actions={actions}
          >
            <Card.Meta
              title={food.name}
              description={
                <div>
                  <p>protein: {food.protein}</p>
                  <p>carbs: {food.carbs}</p>
                  <p>sugar: {food.sugar}</p>
                  <p>fat: {food.fat}</p>
                  <p>fiber: {food.fiber}</p>
                  <p>sodium: {food.sodium}</p>
                  <p>potassium: {food.potassium}</p>
                  <p>cholesterol: {food.cholesterol}</p>
                  <p>energy: {food.energy}</p>
                </div>
              }
            />
          </Card>
        ))
      ) : (
        <div>No food items found.</div>
      )}
    </div>
  );
};

export default FoodsPage;
