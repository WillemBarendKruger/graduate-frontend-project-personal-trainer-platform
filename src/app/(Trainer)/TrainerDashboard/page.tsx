"use client";
import { useEffect, useRef } from "react";
import { useUserState, useUserActions } from "@/Providers/clientProvider";
import { Card, Avatar, Spin, Flex } from "antd";
import { EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { IUser } from "@/Providers/clientProvider/models";
import { decodeToken } from "@/utils/jwt";

const actions: React.ReactNode[] = [
  <EditOutlined key="edit" />,
  <EllipsisOutlined key="ellipsis" />,
];

const TrainerDashboard = () => {
  const state = useUserState();
  const { getClients } = useUserActions();
  const fetchedClients = useRef(false);
  const userObj = decodeToken(sessionStorage.getItem("token") ?? "");

  useEffect(() => {
    const trainerId = userObj.id;
    if (trainerId && !fetchedClients.current) {
      getClients(trainerId);
      fetchedClients.current = true;
    }
  }, []);

  if (state.isPending)
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
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 24,
        padding: 20,
      }}
    >
      {state.users && state.users.length > 0 ? (
        state.users.map((client: IUser) => (
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
  );
};

export default TrainerDashboard;
