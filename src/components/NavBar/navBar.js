import React, { useState } from "react";
import styles from "./navBar.module.css";
import searchIcon from "../../Assets/Icons/search.png";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function NavBar
 **/

const NavBar = (props) => {
  const [search, setSearch] = useState(false);
  const submitSearch = (e) => {
    e.preventDefault();
    alert("Searched");
  };

  const showSearch = () => {
    setSearch(!search);
  };

  const searchClass = search
    ? [styles.searchInput, styles.active].join(" ")
    : [styles.searchInput, styles.inactive].join(" ");

  return (
    <div className={styles.navbar}>
      <ul className={styles.navbarMenus}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/post/1">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/contactus">Contact Us</NavLink>
        </li>
      </ul>
      <div className={styles.search}>
        <form onSubmit={submitSearch}>
          <input className={searchClass} type="text" placeholder="search" />
          <img
            onClick={showSearch}
            className={styles.searchicon}
            src={searchIcon}
            alt="search"
          />
        </form>
      </div>
    </div>
  );
};

export default NavBar;
