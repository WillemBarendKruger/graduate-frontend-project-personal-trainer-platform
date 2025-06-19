import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="landingDiv">
      <Image src="/FitfusionLogo.png" alt="logo" style={{ width: 280 }} />
      <div>
        <div style={{ maxWidth: 500, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "geometric sans-serif",
              fontSize: 28,
              marginBottom: 12,
            }}
          >
            Where fitness meets its{" "}
            <span style={{ color: "#C6DE41" }}>fusion</span>.
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: 18,
              color: "#C6DE41",
            }}
          >
            <li style={{ marginBottom: 10 }}>
              Manage clients, create meal plans, and track nutrition—all in one
              place.
            </li>
            <li>
              Empowering trainers and clients to achieve their goals together.
            </li>
          </ul>
        </div>
      </div>
      <div style={{ scale: 1.5, marginTop: 100 }}>
        <Link href="/auth/login">
          <Button className="btn">Login</Button>
        </Link>
        <Link href="/auth/register">
          <Button className="btn">Register</Button>
        </Link>
      </div>
    </div>
  );
}
