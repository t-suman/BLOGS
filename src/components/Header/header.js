import React from "react";
import styles from "./header.module.css";
import SocialMediaLinks from "../SocialMediaLinks/socialMediaLinks";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerMenu}>
        <a href="/"> Home</a>
        <a href="/aboutus"> About us</a>
        <a href="/contactus"> Contact us</a>
      </nav>
      <SocialMediaLinks />
    </header>
  );
};

export default Header;
