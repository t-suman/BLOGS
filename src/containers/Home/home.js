import React from "react";
import styles from "./home.module.css";
import ComplexCard from "../../components/ComplexCard/complexCard";
import Card from "../../components/UI/Card/card";
import SideBar from "../../components/SideBar/sideBar";
import file from "../../Data/blog.json";

const Home = (props) => {
  return (
    <div>
      <ComplexCard />
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          {file.data.map((obj, ind) => {
            console.log(ind);
            return (
              <Card style={{ marginBottom: "20px" }} key={ind}>
                <div className={styles.imageWrap}>
                  <img
                    src={require(`../../Images/${obj.blogImage}`)}
                    alt="img"
                  />
                </div>
                <div style={{ padding: "20px 30px" }}>
                  <header className={styles.cardHeader}>
                    <span>{obj.blogCategory}</span>
                    <h2>{obj.slug.split("-").join(" ")}</h2>
                    <span>{`posted on ${obj.postedOn} by ${obj.author}`}</span>
                  </header>
                  <p className={styles.disc}>{`${obj.blogText.substr(
                    0,
                    300
                  )}...`}</p>
                </div>
                <div className={styles.readText}>
                  <a className={styles.readMore} href={`/post/${ind + 1}`}>
                    read more
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
        <SideBar />
      </div>

      <div
        style={{
          height: "30px",
          width: "30px",
        }}
      ></div>
    </div>
  );
};

export default Home;
