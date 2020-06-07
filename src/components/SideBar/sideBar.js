import React, { useState, useEffect } from "react";
import styles from "./sideBar.module.css";
import Card from "../UI/Card/card";
import file from "../../Data/blog.json";
import { NavLink } from "react-router-dom";
import SocialMediaLinks from "../../components/SocialMediaLinks/socialMediaLinks";
/**
 * @author
 * @function SideBar
 **/

const SideBar = (props) => {
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    setDataArr(file.data);
  }, [dataArr]);
  return (
    <div className={styles.sideBarContainer}>
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className={styles.cardHeader}>
          <span>About us</span>
        </div>
        <div className={styles.aboutUsImg}>
          <img src={require("../../Images/five.jpg")} alt="my pic" />
        </div>
        <div className={styles.cardBody}>
          <p className={styles.personalBio}>
            I am Suman Kumar Thakur. I am a compitive Programmer and a Full
            Stack Developer.
          </p>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className={styles.cardHeader}>
          <span>Social network</span>
          <SocialMediaLinks />
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className={styles.cardHeader}>
          <span>Recent Posts</span>
        </div>

        <div className={styles.recentPosts}>
          {dataArr.map((data, i) => {
            return (
              <NavLink key={i} className={styles.links} to={`/post/${data.id}`}>
                <div className={styles.recentPost}>
                  <h3>{data.blogTitle}</h3>
                  <span>{data.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default SideBar;
