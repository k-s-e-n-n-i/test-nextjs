import { ReactNode } from "react";
import s from "./Sticky.module.scss";

type Props = {
  children: ReactNode;
  height?: string;
  containerWidth?: string;
  top?: string;
};

export const Sticky = ({ children, height = "3000px", containerWidth = "100%", top = "0" }: Props) => {
  return (
    <div className={s.sticky} style={height ? { height } : {}}>
      <div className={s.container} style={{ height, width: containerWidth }}>
        <div className={s.element} style={{ top }}>
          {children}
        </div>
      </div>
    </div>
  );
};
