"use client";
import { useFoodState } from "@/Providers/foodProvider/index";
import { IFood } from "@/Providers/foodProvider/context";
import { EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Card, Spin } from "antd";

const actions: React.ReactNode[] = [
  <EditOutlined key="edit" />,
  <EllipsisOutlined key="ellipsis" />,
];

const ClientDashboard = () => {
  const { foods, isPending } = useFoodState();
  if (isPending) return <Spin tip="Loading clients..." />;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 24,
        padding: 20,
      }}
    >
      {foods && foods.length > 0 ? (
        foods.map((food: IFood) => (
          <Card
            key={food.id}
            style={{ minWidth: 300, maxHeight: 200, marginBottom: 16 }}
            actions={actions}
          >
            <Card.Meta
              title={food.name}
              description={
                <div>
                  <p>protein: {food.protein}</p>
                  <p>carbs: {food.carbs}</p>
                  <p>suger: {food.sugar}</p>
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

export default ClientDashboard;
