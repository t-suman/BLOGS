import React from "react";
import styles from "./complexCard.module.css";
import Card from "../UI/Card/card";

/**
 * @author
 * @function ComplexCard
 **/

const ComplexCard = (props) => {
  return (
    <div>
      <Card>
        <div className={styles.wrapper}>
          <section
            className={styles.sectionLeft}
            style={{ marginRight: "2px" }}
          >
            <div className={styles.imageBox}>
              <img src={require("../../Images/five.jpg")} alt="img" />
            </div>
          </section>
          <section className={styles.sectionRight}>
            <div className={styles.imageBox}>
              <img src={require("../../Images/two.jpg")} alt="img" />
            </div>
            <div className={styles.imageBox} style={{ margin: "2px 0" }}>
              <img src={require("../../Images/three.jpg")} alt="img" />
            </div>
            <div className={styles.imageBox}>
              <img src={require("../../Images/four.jpg")} alt="img" />
            </div>
          </section>
        </div>
      </Card>
    </div>
  );
};

export default ComplexCard;
