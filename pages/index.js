import Product from "@/componenets/Product";
import Head from "next/head";

const Home = ({ products }) => {
  return (
    <main className="container">
      <Head>
        <title>Home | The best ecommerce Website</title>
      </Head>
      <div className="main">
        {products.map((prouduct) => (
          <Product key={prouduct.id} product={prouduct} />
        ))}
      </div>
    </main>
  );
};
export default Home;

export async function getStaticProps() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  return {
    props: { products },
  };
}
