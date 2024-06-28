import Link from "next/link";
import styled from "./styled.module.scss";

export const Header = () => {
  return (
    <div className={styled.menu}>
      <Link href="/use-reducer">use-reducer</Link>
      <Link href="/gsap-animations">gsap-animations</Link>
      <Link href="/gsap-scroll">gsap-scroll</Link>
      <Link href="/test-api">test-api</Link>
      <Link href="/adaptive-flex">adaptive-flex</Link>
      <Link href="/animations-text">animations-text</Link>
      <Link href="/popper">popper</Link>
      <Link href="/parallax">parallax</Link>

      <Link href="/other">other</Link>
    </div>
  );
};
