"use client";
import { UsersProvider, useUserActions } from "@/Providers/clientProvider";
import {
  DashboardOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";
import { useState } from "react";
import withAuth from "../HOC/withAuth";

const TrainerLayout = ({ children }: React.PropsWithChildren) => {
  const [collapsed, setCollapsed] = useState(false);
  const { logOut } = useUserActions();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ display: "inline-flex", width: "100vw", height: "100vh" }}>
      <div style={{ width: 200 }}>
        <div>
          <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{ marginBottom: 16, left: 0, position: "sticky" }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="lg"
          collapsedWidth="0"
          style={{
            overflow: "auto",
            height: "100%",
            insetInlineStart: 0,
            top: 0,
            bottom: 0,
            scrollbarGutter: "stable",
          }}
          /*className={styles.sider}*/
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: <Link href="/TrainerDashboard">Dashboard</Link>,
              },
              {
                key: "2",
                icon: <DashboardOutlined />,
                label: <Link href="/TrainerMeals">Meals</Link>,
              },
              {
                key: "3",
                icon: <DashboardOutlined />,
                label: <Link href="/TrainerFoods">Foods</Link>,
              },
              {
                key: "4",
                icon: <UserAddOutlined />,
                label: <Link href="/AddClient">Add Client</Link>,
              },
              {
                key: "5",
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
      </div>

      <UsersProvider>{children}</UsersProvider>
    </div>
  );
};

export default withAuth(TrainerLayout);
