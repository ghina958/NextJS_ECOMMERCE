import Image from "next/image";
import Styles from "./../../styles/single.module.css";

const SingleProduct = ({ product }) => {
  const { title, price, description, category, image } = product || {};
  return (
    <div className="container">
      <div className={Styles.product}>
        <div>
          <Image src={image} width="100" height="100" className={Styles.img} />
        </div>

        <div className={Styles.des}>
          <h2>{title}</h2>
          <p>{category}</p>
          <h3>{price}.00$</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  const paths = products.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const req = await fetch("https://fakestoreapi.com/products//" + id);
  const product = await req.json();
  return {
    props: { product },
  };
}
export default SingleProduct;
