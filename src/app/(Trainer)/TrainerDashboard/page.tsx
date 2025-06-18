"use client";
import { useEffect, useRef, useState } from "react";
import { useUserState, useUserActions } from "@/Providers/clientProvider";
import { Card, Avatar, Spin, Flex, Pagination } from "antd";
import { EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { IUser } from "@/Providers/clientProvider/models";
import { decodeToken } from "@/utils/jwt";

const actions: React.ReactNode[] = [
  <EditOutlined key="edit" />,
  <EllipsisOutlined key="ellipsis" />,
];

const PAGE_SIZE = 9;

const TrainerDashboard = () => {
  const { users, isPending } = useUserState();
  const { getClients } = useUserActions();
  const fetchedClients = useRef(false);
  const [id, setId] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const { id } = decodeToken(token);
      setId(id);
    }
  }, []);

  useEffect(() => {
    if (id && !fetchedClients.current) {
      getClients(id);
      fetchedClients.current = true;
    }
  }, [id, getClients]);

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

  const startIdx = (page - 1) * PAGE_SIZE;
  const endIdx = startIdx + PAGE_SIZE;
  const paginatedUsers = users?.slice(startIdx, endIdx) || [];

  return (
    <div style={{ width: "100vw", padding: 20 }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          minHeight: 220,
        }}
      >
        {paginatedUsers.length > 0 ? (
          paginatedUsers.map((client: IUser) => (
            <Card
              key={client._id}
              style={{ minWidth: 300, maxHeight: 200, marginBottom: 16 }}
              actions={actions}
            >
              <Card.Meta
                avatar={
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                }
                title={client.fullName}
                description={
                  <>
                    <p>Email: {client.email}</p>
                    <p>Contact: {client.contactNumber}</p>
                    <p>DOB: {client.dateOfBirth}</p>
                    <p>Gender: {client.sex}</p>
                  </>
                }
              />
            </Card>
          ))
        ) : (
          <div>No clients found.</div>
        )}
      </div>
      <div style={{ marginTop: 24, textAlign: "center" }}>
        <Pagination
          current={page}
          pageSize={PAGE_SIZE}
          total={users?.length ?? 0}
          onChange={setPage}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default TrainerDashboard;
