import { Button } from "antd";
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
          <Title
            style={{
              color: "whitesmoke",
              fontSize: 80,
              textDecoration: "underline",
            }}
          >
            FitFusion
          </Title>
          <p style={{ fontSize: 20, fontFamily: "Roboto" }}>
            Where fitness meets its fusion
          </p>
        </div>
        <div style={{ scale: 1.5 }}>
          <Link href="./auth/login">
            <Button className="btn">Login</Button>
          </Link>
          <Link href="./auth/register">
            <Button className="btn">Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
