import React from "react";
import styles from "./post.module.css";
import BlogPost from "../../components/BlogPost/blogPost";
import SideBar from "../../components/SideBar/sideBar";

/**
 * @author
 * @function Post
 **/

const Post = (props) => {
  return (
    <section className={styles.container}>
      <BlogPost {...props} />
      <SideBar />
    </section>
  );
};

export default Post;
