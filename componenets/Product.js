import Image from "next/image";
import Styles from "./../styles/Product.module.css";
import Link from "next/link";

const Product = ({ product }) => {
  const { title, price, image, id } = product || {};
  return (
    <div className={Styles.product}>
      <div>
        <Image src={image} width="200" height="200" />
      </div>
      <ul>
        <li>{title}</li>
        <li>{price}$</li>
      </ul>
      <Link href={"/products/" + product.id} legacyBehavior>
        <a className={Styles.button}>More Details</a>
      </Link>
    </div>
  );
};
export default Product;
