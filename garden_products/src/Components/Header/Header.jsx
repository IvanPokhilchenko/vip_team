import React from "react";
import styles from "./Header.module.css";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const mediaQuery = window.matchMedia("(max-width: 768px)");

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(undefined);
  const [isMobile, setIsMobile] = React.useState(mediaQuery.matches);
  const [itemsInCart, setItemsInCart] = React.useState(0);

  const itemsCountInCart = useSelector((state) => state.cart.items.length);

  React.useEffect(() => {
    setItemsInCart(itemsCountInCart); // Установка начального значения из Redux Store
  }, [itemsCountInCart]);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const openClassName =
    isSidebarOpen === undefined ? "hidden" : isSidebarOpen ? "open" : "closed";

  return (
    <>
      <header className={styles.header}>
        <img src="/logo.png" alt="Logo" className={styles.logo} />
        <nav className={styles.nav}>
          <HashLink to="/#home">Main Page</HashLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink href="/products">All products</NavLink>
          <NavLink href="/discounted">All sales</NavLink>
        </nav>

        <div className={styles.buttons}>
          <button className={styles.cart}>
            <img src="/cart.png" alt="Cart" />
            {itemsInCart && <span className="badge">{itemsInCart}</span>}
          </button>
          <button
            className={styles.menu}
            onClick={() => setIsSidebarOpen(true)}
          >
            <img src="/menu.png" alt="Menu" />
          </button>
        </div>
      </header>

      {isMobile && (
        <>
          <div
            className={`${styles.overlay} ${openClassName}`}
            onClick={() => setIsSidebarOpen(false)}
          />
          <aside className={`${styles.aside} ${openClassName}`}>
            <button className={styles.close}>
              <img
                src="/close.png"
                alt="Close"
                onClick={() => setIsSidebarOpen(false)}
              />
            </button>
            <nav className={styles.mobileNav}>
              <HashLink to="/#home">Main Page</HashLink>
              <NavLink to="/categories">Categories</NavLink>
              <NavLink href="/products">All products</NavLink>
              <NavLink href="/discounted">All sales</NavLink>
            </nav>
          </aside>
        </>
      )}
    </>
  );
};
