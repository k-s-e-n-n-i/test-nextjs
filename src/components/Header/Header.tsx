import Link from "next/link";
import styled from "./styled.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { MENU } from "./constants";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const open = () => setIsOpenMenu(true);
  const close = () => setIsOpenMenu(false);

  const router = useRouter();

  return (
    <div className={styled.header}>
      <div className={styled.topMenu}>
        {isOpenMenu ? <button onClick={close}>X</button> : <button onClick={open}>show menu</button>}
      </div>

      <div className={`${styled.menu}${isOpenMenu ? "" : " " + styled.closedMenu}`}>
        {MENU.map(({ text, link }, i) => (
          <Link href={link} className={router.pathname === link ? "active" : ""} onClick={close} key={i}>
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
};
