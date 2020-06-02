import React from "react";
import styles from "./card.module.css";
/**
 * @author
 * @function Card
 **/

const Card = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
