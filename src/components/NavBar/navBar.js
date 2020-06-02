import React from "react";
import styles from "./navBar.module.css";
import searchIcon from "../../Assets/Icons/search.png";
/**
 * @author
 * @function NavBar
 **/

const NavBar = (props) => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.navbarMenus}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Posts</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <div className={styles.search}>
        <input type="text" placeholder="search" />
        <img src={searchIcon} alt="search" />
      </div>
    </div>
  );
};

export default NavBar;
