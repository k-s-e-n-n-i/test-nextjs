import { forwardRef, MutableRefObject, useEffect, useImperativeHandle, useRef } from "react";
import styled from "./ImperativeHandlePage.module.scss";

export const Child = forwardRef(
  (_, ref: React.ForwardedRef<{ focus: () => void; setColor: (color: string) => void }>) => {
    const inputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
    const childRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

    useImperativeHandle(
      ref,
      () => ({
        focus() {
          inputRef?.current?.focus();
        },
        setColor(color: string) {
          if (childRef.current) {
            childRef.current.style.backgroundColor = color;
          }
        },
      }),
      []
    );

    return (
      <div className={styled.child} ref={childRef}>
        <input ref={inputRef} type="text" />
      </div>
    );
  }
);

Child.displayName = "Child";
