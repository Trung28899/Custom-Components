import React, { useState } from "react";
import classes from "./TikTokModal.module.css";
import SimpleTextBox from "../SimpleTextBox/SimpleTextBox";
import buttonStyles from "./Button.module.css";

const Modal = () => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  // const [tikTokID, setTikTokID] = useState("");

  const onChangeUrl = (value) => {
    setUrl(value);
    console.log(value);
    console.log(value.indexOf("/video/"));
    console.log(
      value.splice(value.indexOf("/video/") + 6, value.indexOf("/video/") + 25)
    );
  };
  const onChangeTitle = (value) => {
    setTitle(value);
  };

  const saveImgFirebase = async () => {
    console.log(url, title);
  };

  return (
    <div className={classes.Modal}>
      <div className={classes.closeButton}>
        <i className="fas fa-times"></i>
      </div>

      <div className={classes.container}>
        <div className={classes.input}>
          <SimpleTextBox
            textHolder="Enter Link Name....."
            textEntered={onChangeTitle}
            title
            modalShow
          />
          <SimpleTextBox
            textHolder="Enter Link....."
            textEntered={onChangeUrl}
            modalShow
          />
        </div>

        <div className={classes.output}>
          <h3>Preview</h3>
          <div className={classes.tiktokContainer}>
            <blockquote
              className="tiktok-embed"
              data-video-id="6983991901670182171"
            >
              <section></section>
            </blockquote>
          </div>
        </div>
      </div>

      <div className={buttonStyles.button} onClick={saveImgFirebase}>
        Add Link
      </div>
    </div>
  );
};

export default Modal;
