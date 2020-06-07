import React, { useState, useEffect } from "react";
import styles from "./blogPost.module.css";
import Card from "../UI/Card/card";
import file from "../../Data/blog.json";

/**
 * @author
 * @function BlogPost
 **/

const BlogPost = (props) => {
  const [post, setPost] = useState({
    id: "",
    blogCategory: "",
    blogTitle: "",
    slug: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: "",
  });
  const [postId, setPostId] = useState("");
  useEffect(() => {
    const id = props.match.params.postId;
    const curPost = file.data.find((post) => post.id == id);

    setPost(curPost);
    setPostId(id);
    //console.log();
  }, [post, postId, props.match.params.postId]);

  if (post === undefined || post.blogImage == "") return null;

  return (
    <div className={styles.blogPostContainer}>
      <Card>
        <div className={styles.postImageContainer}>
          <img src={require(`../../Images/${post.blogImage}`)} alt="post img" />
        </div>
        <div className={styles.blogPostHeader}>
          <span className={styles.blogCategory}>{post.blogCategory}</span>
          <h1 className={styles.postTitle}>{post.blogTitle}</h1>
          <span className={styles.postedBy}>
            posted onJuly 21, 2016 bySora Blogging Tips
          </span>
          <p>{post.blogText}</p>
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
