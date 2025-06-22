"use client";
import { UsersProvider, useUserActions } from "@/Providers/clientProvider";
import {
  AppstoreOutlined,
  BarChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  UserSwitchOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, MenuProps, Drawer, Grid } from "antd";
import withAuth from "../HOC/withAuth";
import React, { useState } from "react";
import Link from "next/link";

const { Content } = Layout;
const { useBreakpoint } = Grid;

const TrainerLayout = ({ children }: React.PropsWithChildren) => {
  const { logOut } = useUserActions();
  const screens = useBreakpoint();

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
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Show Drawer for screens smaller than md (mobile/tablet)
  const isMobile = !screens.md;

  const menuComponent = (
    <Menu
      defaultSelectedKeys={["1"]}
      mode="inline"
      theme="dark"
      inlineCollapsed={collapsed && !isMobile}
      items={items}
      style={{ height: "100%" }}
      onClick={() => {
        if (isMobile) setDrawerOpen(false);
      }}
    />
  );

  return (
    <Layout hasSider style={{ background: "transparent", minHeight: "100vh" }}>
      {/* Sidebar for desktop, Drawer for mobile */}
      {isMobile ? (
        <>
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={() => setDrawerOpen(true)}
            style={{ margin: 16, position: "fixed", zIndex: 1001 }}
          />
          <Drawer
            title="Menu"
            placement="left"
            onClose={() => setDrawerOpen(false)}
            open={drawerOpen}
            bodyStyle={{ padding: 0 }}
            width={220}
          >
            {menuComponent}
          </Drawer>
        </>
      ) : (
        <div style={{ minWidth: 150 }}>
          <Button
            type="primary"
            onClick={() => setCollapsed(!collapsed)}
            style={{ marginBottom: 16 }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          {menuComponent}
        </div>
      )}
      <Layout>
        <Content style={{ width: "100%" }}>
          <UsersProvider>{children}</UsersProvider>
        </Content>
      </Layout>
    </Layout>
  );
};

export default withAuth(TrainerLayout);
