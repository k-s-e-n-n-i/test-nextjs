import Layout from "../components/layout";
import "../styles/all.scss";

type Props = {
  Component: {
    (props: any): JSX.Element;
    config?: {
      hasContainer?: boolean;
    };
  };
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: Props) {
  return (
    <Layout hasContainer={Component.config?.hasContainer}>
      <Component {...pageProps} />
    </Layout>
  );
}
