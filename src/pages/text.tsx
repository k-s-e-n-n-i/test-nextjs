import styled from "../styles/text.module.scss";

const Text = () => {
  return (
    <div className={styled.text}>
      <div className={styled.textBlock}>
        <p>G</p>
        <p>o</p>
        <p>o</p>
        <p>d</p>
        <p>b</p>
        <p>y</p>
        <p>e</p>
      </div>

      <div className={styled.block} />
    </div>
  );
};

export default Text;
