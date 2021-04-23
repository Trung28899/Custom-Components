import React, { useState } from "react";
import classes from "./Embedded.module.css";
import ReactPlayer from "react-player/lazy";
import SimpleTextBox from "../SimpleTextBox/SimpleTextBox";

const EmbeddedModal = () => {
  const [url, setUrl] = useState("");
  const onChangeUrl = (value) => {
    setUrl(value);
  };

  return (
    <div className={classes.Modal}>
      <div className={classes.closeButton}>
        <i className="fas fa-times"></i>
      </div>
      <h3 className={classes.title}>
        Nhúng <span>Youtube</span> Video
      </h3>
      <div className={classes.output}>
        <ReactPlayer
          url={url || " "}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
      <div className={classes.input}>
        <SimpleTextBox
          textHolder="Nhập đường link Youtube..."
          textEntered={onChangeUrl}
          modalShow
        />
      </div>
      <div className={classes.button}>Add Link</div>
    </div>
  );
};

export default EmbeddedModal;
