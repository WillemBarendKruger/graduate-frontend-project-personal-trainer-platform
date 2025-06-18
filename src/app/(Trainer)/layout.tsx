"use client";
import { UsersProvider, useUserActions } from "@/Providers/clientProvider";
import {
  AppstoreOutlined,
  BarChartOutlined,
  FileAddOutlined,
  TeamOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import withAuth from "../HOC/withAuth";
import React from "react";
import Link from "next/link";

const { Content, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

const TrainerLayout = ({ children }: React.PropsWithChildren) => {
  const { logOut } = useUserActions();
  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <TeamOutlined />,
              label: <Link href="/TrainerDashboard">Dashboard</Link>,
            },
            {
              key: "2",
              icon: <AppstoreOutlined />,
              label: <Link href="/TrainerMeals">Meals</Link>,
            },
            {
              key: "3",
              icon: <BarChartOutlined />,
              label: <Link href="/TrainerFood">Foods</Link>,
            },
            {
              key: "4",
              icon: <UserAddOutlined />,
              label: <Link href="/AddClient">Add Client</Link>,
            },
            {
              key: "5",
              icon: <FileAddOutlined />,
              label: <Link href="/addFood">Add Food Item</Link>,
            },
            {
              key: "6",
              icon: <UserSwitchOutlined />,
              label: (
                <Link href="/auth/login" onClick={logOut}>
                  Log Out
                </Link>
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Content style={{ width: "100%" }}>
          <UsersProvider>{children}</UsersProvider>
        </Content>
      </Layout>
    </Layout>
  );
};

export default withAuth(TrainerLayout);
