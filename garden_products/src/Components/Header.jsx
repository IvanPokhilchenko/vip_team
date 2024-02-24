import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Burger } from "./Burger/Burger";
import { Navigation } from "./Navigation/Navigation";
import logo from "../media/images/logo.png";
import styles from "./Header/Header.module.css";
import { useSelector } from "react-redux";


 const Header = () => {
  const [active, setActive] = useState(false);
  const [itemsInCart, setItemsInCart] = useState(0); // Локальное состояние для количества товаров в корзине из Redux Store

  const itemsCountInCart  = useSelector(state => state.cart.items.length); // получение количества товаров в корзине

  useEffect(() => {
    setItemsInCart(itemsCountInCart); // Установка начального значения из Redux Store
  }, [itemsCountInCart]);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth > 762) setActive(false);
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      if (active) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    document.addEventListener("wheel", handleScroll, { passive: false });
    document.addEventListener("touchmove", handleScroll, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleScroll);
      document.removeEventListener("touchmove", handleScroll);
    };
  }, [active]);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <div className="container">
          <div className={styles.header_wrapper}>
            <HashLink
              className={styles.logo_wrapper}
              smooth
              to="/#home"
              onClick={() => setActive(false)}
            >
              <div className={styles.logo}>
                <img src={logo} alt="logo" />
              </div>
            </HashLink>
            <div className={`${styles.menu} ${styles[active ? "active" : ""]}`}>
              <Navigation onClick={() => setActive(false)} />

              <NavLink
                className={styles.cart_link}
                to="/cart"
                onClick={() => setActive(false)}
              >
                <HiOutlineShoppingBag />
                <p className={styles.cart_total}>{itemsCountInCart}</p>
              </NavLink>
            </div>
            <Burger onClick={toggleActive} active={active && "active"} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

