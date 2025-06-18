"use client";
import { useEffect } from "react";
import { Table, Spin, Flex } from "antd";
import { useFoodState, useFoodActions } from "@/Providers/foodProvider/index";
import { IFood } from "@/Providers/foodProvider/context";
import { decodeToken } from "@/utils/jwt";
import type { TableColumnsType } from "antd";

const FoodsPage = () => {
  const { foods, isPending } = useFoodState();
  const { getFoods } = useFoodActions();

  useEffect(() => {
    const userObj = decodeToken(sessionStorage.getItem("token") ?? "");
    if (userObj.id) {
      getFoods();
    }
  }, []);

  // Prepare data for the table
  const data =
    foods?.map((food: IFood, idx: number) => ({
      key: food.id ?? idx.toString(),
      name: food.name,
      protein: food.protein,
      carbs: food.carbs,
      sugar: food.sugar,
      fat: food.fat,
      fiber: food.fiber,
      sodium: food.sodium,
      potassium: food.potassium,
      cholesterol: food.cholesterol,
      energy: food.energy,
    })) || [];

  // Generate unique name filters for the Name column
  const nameFilters = Array.from(new Set(data.map((d) => d.name))).map(
    (name) => ({
      text: name,
      value: name,
    })
  );

  const columns: TableColumnsType<(typeof data)[0]> = [
    {
      title: "Name",
      dataIndex: "name",
      filters: nameFilters,
      onFilter: (value, record) => record.name === value,
      filterSearch: true,
      width: "fir-content",
    },
    {
      title: "Protein",
      dataIndex: "protein",
      sorter: (a, b) => a.protein - b.protein,
      width: "fir-content",
    },
    {
      title: "Carbs",
      dataIndex: "carbs",
      sorter: (a, b) => a.carbs - b.carbs,
      width: "fir-content",
    },
    {
      title: "Sugar",
      dataIndex: "sugar",
      sorter: (a, b) => a.sugar - b.sugar,
      width: "fir-content",
    },
    {
      title: "Fat",
      dataIndex: "fat",
      sorter: (a, b) => a.fat - b.fat,
      width: "fir-content",
    },
    {
      title: "Fiber",
      dataIndex: "fiber",
      sorter: (a, b) => a.fiber - b.fiber,
      width: "fir-content",
    },
    {
      title: "Sodium",
      dataIndex: "sodium",
      sorter: (a, b) => a.sodium - b.sodium,
      width: "fir-content",
    },
    {
      title: "Potassium",
      dataIndex: "potassium",
      sorter: (a, b) => a.potassium - b.potassium,
      width: "fir-content",
    },
    {
      title: "Cholesterol",
      dataIndex: "cholesterol",
      sorter: (a, b) => a.cholesterol - b.cholesterol,
      width: "fir-content",
    },
    {
      title: "Energy",
      dataIndex: "energy",
      sorter: (a, b) => a.energy - b.energy,
      width: "fir-content",
    },
  ];

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
    <div style={{ padding: 20, width: "80vw" }}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 8 }}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default FoodsPage;
