import React from "react";
import styles from "./header.module.css";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerMenu}>
        <a href="#"> Home</a>
        <a href="#"> About us</a>
        <a href="#"> Contact us</a>
      </nav>
      <div>Social madia links</div>
    </header>
  );
};

export default Header;
