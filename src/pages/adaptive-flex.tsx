import styled from "../styles/test2.module.scss";

const Test2 = () => {
  return (
    <div className={styled.main}>
      <h1 className={styled.title}>
        Заголовок - тут был какой-то длинный текст, тут был какой-то длинный текст
      </h1>
      <div className={styled.block} />
    </div>
  );
};

export default Test2;
