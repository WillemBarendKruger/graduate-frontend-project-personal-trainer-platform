"use client";
import React from "react";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import { useUserActions } from "@/Providers/clientProvider";

const { Header, Content } = Layout;

const ClientLayout = ({ children }: React.PropsWithChildren) => {
  const { logOut } = useUserActions();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            {
              key: "1",
              label: "Username",
            },
            {
              key: "2",
              label: (
                <Link href="/auth/login" onClick={logOut}>
                  Log Out
                </Link>
              ),
            },
          ]}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default ClientLayout;
