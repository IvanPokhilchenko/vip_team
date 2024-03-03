import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Burger } from "./Burger/Burger";
import { Navigation } from "./Navigation/Navigation";
import logo from "../media/images/logo.png";
import styles from "./Header/Header.module.css";
import { useSelector } from "react-redux";

const mediaQuery = window.matchMedia("(max-width: 768px)");

const Header = () => {
  const [isMobile, setIsMobile] = useState(mediaQuery.matches);
  const [active, setActive] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const itemsCountInCart = useSelector((state) => state.cart.items.length);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
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
    setIsSidebarOpen(!isSidebarOpen);
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
            {isMobile ? (
              <>
                <NavLink
                  className={styles.cart_link}
                  to="/cart"
                  onClick={() => setActive(false)}
                >
                  <HiOutlineShoppingBag />
                  {itemsCountInCart > 0 && (
                    <p className={styles.cart_total}>{itemsCountInCart}</p>
                  )}
                </NavLink>
                <Burger onClick={toggleActive} active={active && "active"} />
              </>
            ) : (
              <div
                className={`${styles.menu} ${styles[active ? "active" : ""]}`}
              >
                <Navigation onClick={() => setActive(false)} />
                <NavLink
                  className={styles.cart_link}
                  to="/cart"
                  onClick={() => setActive(false)}
                >
                  <HiOutlineShoppingBag />
                  {itemsCountInCart > 0 && (
                    <p className={styles.cart_total}>{itemsCountInCart}</p>
                  )}
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
      {isMobile && isSidebarOpen && (
        <>
          <div
            className={`${styles.overlay} ${styles.open}`}
            onClick={toggleActive}
          />
          <aside className={`${styles.aside} ${styles.open}`}>
            <button className={styles.close} onClick={toggleActive}>
              <img src="/close.png" alt="Close" />
            </button>
            <nav className={styles.mobileNav}>
              <HashLink to="/#home">Main Page</HashLink>
              <NavLink to="/categories">Categories</NavLink>
              <NavLink to="/products">All products</NavLink>
              <NavLink to="/discounted">All sales</NavLink>
            </nav>
          </aside>
        </>
      )}
    </header>
  );
};

export default Header;
