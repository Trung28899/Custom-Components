import React, { useState } from "react";
import classes from "./Modal.module.css";
import SimpleTextBox from "../SimpleTextBox/SimpleTextBox";
import wordpress from "../../assets/wordpress.png";
import buttonStyles from "./Button.module.css";
import firebase from "../../api/firebase";

const Modal = () => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState(wordpress);
  const [imageObject, setImageObject] = useState({ name: "" });
  const email = "trung28899@gmail.com";
  const onChangeUrl = (value) => {
    setUrl(value);
  };
  const onChangeTitle = (value) => {
    setTitle(value);
  };
  const deleteImage = () => {
    setIcon("");
  };

  const imageHandler = async (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setIcon(reader.result);
      }
    };
    try {
      const image = e.target.files[0];
      reader.readAsDataURL(image);
      setImageObject(image);
    } catch (error) {
      console.log(error.message);
    }
  };

  const saveImgFirebase = async () => {
    try {
      await firebase.login(email, "trungtrinh");
      firebase.updateImage(imageObject, imageObject.name, email).on(
        "state_changed",
        (snapshot) => {
          //nothing going on
        },
        (error) => {
          console.log(error);
        },
        () => {
          firebase.storage
            .ref("images/" + email)
            .child(imageObject.name)
            .getDownloadURL()
            .then((url) => {
              console.log("success: " + url);
              console.log("have to set state here to url");
            });
        }
      );
    } catch (error) {
      alert(error.message);
    }
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
          <div className={classes.thumbnailContainer}>
            <h5>Image Thumbnail (size limit 10mb)</h5>
            <div className={classes.btnContainer}>
              {icon && <img src={icon} alt="" />}
              <label htmlFor="input">Add Image</label>
              <div onClick={deleteImage}>Delete</div>
            </div>
          </div>
        </div>

        <div className={classes.output}>
          <h3>Preview</h3>
          <div className={classes.LinkBox}>
            <div>{icon && <img src={icon} alt="" />}</div>
            <div>
              <p>{title}</p>
            </div>
            <div>
              <i className="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>

      <div className={buttonStyles.button} onClick={saveImgFirebase}>
        Add Link
      </div>

      <input
        type="file"
        accept="image/*"
        name="image-upload1"
        id="input"
        onChange={imageHandler}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Modal;
