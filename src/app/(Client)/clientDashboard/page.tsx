"use client";

import { Flex, Spin } from "antd";
import { useMealActions, useMealState } from "@/Providers/mealProvider";
import { useEffect, useRef, useState } from "react";
import { decodeToken } from "@/utils/jwt";

// const actions: React.ReactNode[] = [
//   <EditOutlined key="edit" />,
//   <EllipsisOutlined key="ellipsis" />,
// ];

// const PAGE_SIZE = 9;

const ClientDashboard = () => {
  const { isPending } = useMealState();
  const { getMealClient } = useMealActions();
  const fetchedClients = useRef(false);
  const [id, setId] = useState<string | null>(null);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const { id } = decodeToken(token);
      setId(id);
    }
  }, []);

  useEffect(() => {
    if (id && !fetchedClients.current) {
      getMealClient(id);
      fetchedClients.current = true;
    }
  }, [id, getMealClient]);

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

  // const startIdx = (page - 1) * PAGE_SIZE;
  // const endIdx = startIdx + PAGE_SIZE;
  // const paginatedUsers = meals?.slice(startIdx, endIdx) || [];

  return (
    <div style={{ width: "100vw", height: "80vh", padding: 20 }}>
      {/* <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          minHeight: 220,
        }}
      >
        {paginatedUsers.length > 0 ? (
          paginatedUsers.map((meal: IMeals) => (
            <Card
              key={meal._id}
              style={{ minWidth: 300, maxHeight: 200, marginBottom: 16 }}
              actions={actions}
            >
              <Card.Meta
                avatar={
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                }
                title="test"
                description={
                  <>
                    <p>Trainer ID: {meal.trainerId}</p>
                    <p>Client ID: {meal.clientId}</p>
                    <p>Meals: {meal.meals}</p>
                  </>
                }
              />
            </Card>
          ))
        ) : (
          <div>No meals found.</div>
        )}
      </div>
      <div style={{ marginTop: 24, textAlign: "center" }}>
        <Pagination
          current={page}
          pageSize={PAGE_SIZE}
          total={meals?.length ?? 0}
          onChange={setPage}
          showSizeChanger={false}
        />
      </div> */}
      meals page
    </div>
  );
};

export default ClientDashboard;
