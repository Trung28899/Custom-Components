import React from "react";
import classes from "./TiktokPost.module.css";

const TiktokPost = () => {
  return (
    <div className={classes.container}>
      <blockquote
        className={["tiktok-embed", classes.blockStyle].join(" ")}
        data-video-id="6992197910008024346"
        style={{ maxWidth: "605px" }}
      >
        <section></section>
      </blockquote>
    </div>
  );
};

export default TiktokPost;
