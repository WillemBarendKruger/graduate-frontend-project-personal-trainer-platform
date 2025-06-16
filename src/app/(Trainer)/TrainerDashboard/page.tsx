"use client";
import { useEffect } from "react";
import { useUserState, useUserActions } from "@/Providers/clientProvider";
import { Card, Avatar, Spin } from "antd";
import withAuth from "@/app/HOC/withAuth";
import { EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { IUser } from "@/Providers/clientProvider/models";

const actions: React.ReactNode[] = [
  <EditOutlined key="edit" />,
  <EllipsisOutlined key="ellipsis" />,
];

const TrainerDashboard = () => {
  const state = useUserState();
  const { getClients } = useUserActions();

  useEffect(() => {
    const trainerId = state.user?.id;
    if (trainerId) {
      getClients(trainerId);
    }
  }, []);

  if (state.isPending) return <Spin tip="Loading clients..." />;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 24, padding: 20 }}>
      {state.users && state.users.length > 0 ? (
        state.users.map((client: IUser) => (
          <Card
            key={client._id}
            style={{ minWidth: 300, marginBottom: 16 }}
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
                  <p>Sex: {client.sex}</p>
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

// Only allow trainers and admins
export default withAuth(TrainerDashboard);
