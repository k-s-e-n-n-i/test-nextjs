import { Header } from "@/components/Header";
import styled from "../styles/app.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="body-main">
      <Header />
      <hr />
      <div className={styled.main}>{children}</div>
    </main>
  );
}
