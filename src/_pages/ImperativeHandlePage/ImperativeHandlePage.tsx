import { MutableRefObject, useRef } from "react";
import styled from "./ImperativeHandlePage.module.scss";
import { Child } from "./Child";

const ImperativeHandlePage = () => {
  const childRef: MutableRefObject<any> = useRef(null);

  const handleFocus = () => {
    childRef.current?.focus();
  };

  const handleClickSetColorButton = () =>
    childRef.current?.setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);

  return (
    <div className={styled.parent} ref={childRef}>
      <Child ref={childRef} />

      <button onClick={handleFocus}>focus</button>
      <button onClick={handleClickSetColorButton}>setRandomColor</button>
    </div>
  );
};

export default ImperativeHandlePage;
