import Link from "next/link";
import Styles from "./../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.container + " container"}>
        <div className={Styles.logo}>This Logo</div>
        <ul>
          <li>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a>about</a>
            </Link>
          </li>

          <li>
            <Link href="/cart" legacyBehavior>
              <a>cart</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
