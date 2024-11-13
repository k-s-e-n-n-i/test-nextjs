import { useGSAP } from "@gsap/react";
import s from "./Harmonic.module.scss";
import { useEffect, useRef } from "react";
import { goAnimation, goCssAnimation, goJsAnimation } from "./functions";

type Props = {
  list: number[];
  type: "qsap" | "js" | "css";
};

export const Harmonic = ({ list, type }: Props) => {
  const container: any = useRef();

  useGSAP(
    () => {
      if (type === "qsap") goAnimation(document.querySelectorAll(`.${s.baseBlock}.qsap`), "50");
    },
    { scope: container }
  );

  useEffect(() => {
    if (type === "js") goJsAnimation(container.current.querySelectorAll(`.${s.baseBlock}.js`));
    if (type === "css") goCssAnimation(container.current.querySelectorAll(`.${s.baseBlock}.css`));
  }, []);

  return (
    <div className={s.harmonic} ref={container}>
      {list.map((item, i) => (
        <div className={`${s.baseBlock} ${type}`} key={i}>
          <div className={s.block}>{item}</div>
        </div>
      ))}
    </div>
  );
};
