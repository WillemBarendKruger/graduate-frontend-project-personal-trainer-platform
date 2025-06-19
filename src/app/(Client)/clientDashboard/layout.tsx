"use client";
import React from "react";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import { useUserActions, useUserState } from "@/Providers/clientProvider";
import withAuth from "@/app/HOC/withAuth";
import Image from "next/image";

const { Header, Content } = Layout;

const ClientLayout = ({ children }: React.PropsWithChildren) => {
  const { logOut } = useUserActions();
  const { user } = useUserState();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
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
              label: (
                <Image
                  src="/FitfusionLogo.png"
                  alt="logo"
                  width={50}
                  height={50}
                />
              ),
            },
            {
              key: "2",
              label: `${user?.name}`,
            },
            {
              key: "3",
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

export default withAuth(ClientLayout);
