import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Col } from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        backgroundImage: `linear-gradient(rgba(181, 179, 179, 0.85), rgba(8, 8, 8, 0.85)), url("/FitnessBackground.jfif")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "100vh",
        }}
      >
        <div>
          <Title style={{ color: "whitesmoke" }}>Welcome</Title>
        </div>
        <div>
          <Button className="btn">Login</Button>
          <Button className="btn">Register</Button>
        </div>

        {/* On register click */}
        <div>
          <Col span={8}>
            <Card
              title=""
              variant="borderless"
              style={{
                width: 300,
                display: "flexbox",
                flexDirection: "column",
                background: "#2f2f2f",
                color: "white",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  <Title level={2}>Account Type?</Title>{" "}
                </div>
                <div>
                  <Link href="">
                    <CloseOutlined />
                  </Link>
                </div>
              </div>
              <div>
                <Link href="">
                  <UserOutlined />
                  Trainer
                </Link>
              </div>
              <div>
                <Link href="">
                  <UserOutlined />
                  Client
                </Link>
              </div>
            </Card>
          </Col>
        </div>
      </div>
    </div>
  );
}
