"use client";
import { UsersProvider } from "@/Providers/clientProvider";
import "./globals.css";
import { ConfigProvider, theme } from "antd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { darkAlgorithm } = theme;
  return (
    <html lang="en">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#a0d911",
            colorInfo: "#a0d911",
          },
          algorithm: darkAlgorithm,
        }}
      >
        <body
          style={{ display: "inline-flex", width: "100vw", height: "100vh" }}
        >
          <UsersProvider>{children}</UsersProvider>
        </body>
      </ConfigProvider>
    </html>
  );
}
