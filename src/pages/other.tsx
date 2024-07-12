import Highlight from "react-highlight";
import styled from "../styles/text.module.scss";

const Other = () => {
  const code = `
  // Ваш фрагмент кода здесь
  <div className={styled.textBlock}>
    <p>G</p>
    <p>o</p>
    <p>o</p>
    <p>d</p>
    <p>b</p>
    <p>y</p>
    <p>e</p>
  </div>
  `;

  return (
    <div>
      <div className={styled.code}>
        <Highlight className="language-html">{code}</Highlight>
      </div>
    </div>
  );
};

export default Other;
