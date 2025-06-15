import { UsersProvider } from "@/Providers/clientProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ display: "inline-flex", width: "100vw", height: "100vh" }}>
        <UsersProvider>{children}</UsersProvider>
      </body>
    </html>
  );
}
