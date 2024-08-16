import { Header } from "@/components/Header";
import styled from "../styles/app.module.scss";

export default function Layout({
  children,
  hasContainer = true,
}: {
  children: React.ReactNode;
  hasContainer?: boolean;
}) {
  const content = (
    <>
      <Header />
      <hr />
      <div className={styled.container}>{children}</div>
    </>
  );

  return hasContainer ? <main className={styled.main}>{content}</main> : content;
}
