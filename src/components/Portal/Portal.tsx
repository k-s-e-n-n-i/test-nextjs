import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const Portal = (props: any) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#__next");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div className="portal" style={{ zIndex: 0 }}>
          {props.children}
        </div>,
        ref.current
      )
    : null;
};
