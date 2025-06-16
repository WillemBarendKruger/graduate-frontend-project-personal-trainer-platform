"use client";
import { UsersProvider } from "@/Providers/clientProvider";
import {
  DashboardOutlined,
  HomeOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";
import { useState } from "react";

export default function TrainerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [collapsed] = useState(false);

  return (
    <div style={{ display: "inline-flex", width: "100vw", height: "100vh" }}>
      <div style={{ width: 256 }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="lg"
          collapsedWidth="0"
          style={{
            overflow: "auto",
            height: "100%",
            position: "sticky",
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
                icon: <UserSwitchOutlined />,
                label: <Link href="/auth/login">Sign Out</Link>,
              },
            ]}
          />
        </Sider>
      </div>
      <UsersProvider>{children}</UsersProvider>
    </div>
  );
}
