import React, { useState } from "react";
import classes from "./Modal.module.css";
import SimpleTextBox from "../SimpleTextBox/SimpleTextBox";
import wordpress from "../../assets/wordpress.png";

const Modal = () => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState(wordpress);
  const onChangeUrl = (value) => {
    setUrl(value);
  };
  const onChangeTitle = (value) => {
    setTitle(value);
  };
  return (
    <div className={classes.Modal}>
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
          <div className={classes.thumbnailContainer}>
            <h5>Image Thumbnail (size limit 10mb)</h5>
            <div className={classes.btnContainer}>
              <img src={icon} alt="" />
              <div>Add Image</div>
              <div>Delete</div>
            </div>
          </div>
        </div>
        <div className={classes.output}></div>
      </div>
    </div>
  );
};

export default Modal;
