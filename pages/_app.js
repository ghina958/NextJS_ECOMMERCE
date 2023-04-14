import "../styles/globals.css";
import Layout from "@/componenets/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
