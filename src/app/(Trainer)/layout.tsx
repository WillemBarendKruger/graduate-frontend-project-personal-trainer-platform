"use client";
import { UsersProvider, useUserActions } from "@/Providers/clientProvider";
import {
  AppstoreOutlined,
  BarChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, MenuProps } from "antd";
import withAuth from "../HOC/withAuth";
import React, { useState } from "react";
import Link from "next/link";

const { Content } = Layout;

const TrainerLayout = ({ children }: React.PropsWithChildren) => {
  const { logOut } = useUserActions();

  type MenuItem = Required<MenuProps>["items"][number];

  const items: MenuItem[] = [
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
      icon: <UserSwitchOutlined />,
      label: (
        <Link href="/auth/login" onClick={logOut}>
          Log Out
        </Link>
      ),
    },
  ];

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout hasSider style={{ background: "transparent", height: "95vh" }}>
      <div style={{ minWidth: 150 }}>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          style={{ height: "100%" }}
        />
      </div>
      <Layout>
        <Content style={{ width: "100%" }}>
          <UsersProvider>{children}</UsersProvider>
        </Content>
      </Layout>
    </Layout>
  );
};

export default withAuth(TrainerLayout);
