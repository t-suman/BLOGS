import React from "react";
import styles from "./socialMediaLinks.module.css";

/**
 * @author
 * @function SocialMediaLinks
 **/

const SocialMediaLinks = (props) => {
  return (
    <div className={styles.socialMediaLinks}>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100014496464783"
            target="_blank"
            rel="noopener noreferrer"
            title="facebook"
          >
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/t__suman/"
            target="_blank"
            rel="noopener noreferrer"
            title="instagram"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/t-suman/"
            target="_blank"
            rel="noopener noreferrer"
            title="linkedin"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaLinks;
