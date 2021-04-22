import React from "react";
import classes from "./Embedded.module.css";
import ReactPlayer from "react-player/lazy";

const EmbeddedModal = () => {
  const url = "https://www.youtube.com/watch?v=WYRbdJhzj2M";
  return (
    <div className={classes.Modal}>
      <div className={classes.output}>
        <ReactPlayer url={url} controls={true} width="100%" height="100%" />
      </div>
      <div className={classes.input}></div>
    </div>
  );
};

export default EmbeddedModal;
