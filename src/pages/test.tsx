import { APIData } from "@/services/Requests";
import styled from "../styles/test/test-block.module.scss";
import { API2 } from "@/services/APIRequests";
import { Props } from "./test/interfaces";

export const getServerSideProps = async () => {
  let dataArr: any = [];

  // const setProducts = (data: any) => {
  //   dataArr = data;
  // };

  // await APIData.getProducts({
  //   category: "clock",
  //   set: setProducts,
  // });

  await API2.getProducts({ category: "clock" }).then((data) => {
    dataArr = data.data;
  });

  return { props: { test1: 1234, products: dataArr } };
};

const Test = (props: Props) => {
  const { products } = props;

  return (
    <div className={styled.main}>
      <h1 className={styled.title}>Заголовок</h1>
      <p className={styled.text_red}>Описание</p>

      {products.map(({ name }, i) => (
        <p key={i}>{name}</p>
      ))}
    </div>
  );
};

export default Test;
