import React, { useState } from "react";
import classes from "./Modal.module.css";
import SimpleTextBox from "../SimpleTextBox/SimpleTextBox";
import buttonStyles from "./Button.module.css";
import firebase from "../../api/firebase";
import pdf from "./assets/pdf.png";
import ppt from "./assets/ppt.png";
import sheets from "./assets/sheets.png";
import docs from "./assets/docs.png";

const loadImage = (fileExt) => {
  if (fileExt.includes(".xlsx") || fileExt.includes(".xls")) {
    return sheets;
  } else if (fileExt.includes(".ppt") || fileExt.includes(".pptx")) {
    return ppt;
  } else if (fileExt.includes(".pdf")) {
    return pdf;
  } else {
    return docs;
  }
};

const Modal = () => {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [fileObject, setfileObject] = useState({ name: "" });
  const email = "trevtrinh@gmail.com";

  const onChangeTitle = (value) => {
    setTitle(value);
  };

  const deleteImage = () => {
    setfileObject({ name: "" });
  };

  const fileHandler = async (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        // console.log(reader);
      }
    };
    try {
      const file = e.target.files[0];

      const extension = file.name.substring(
        file.name.length - 5,
        file.name.length
      );

      setIcon(loadImage(extension));
      reader.readAsDataURL(file);
      setfileObject(file);
    } catch (error) {
      console.log(error.message);
    }
  };

  const saveImgFirebase = async () => {
    try {
      await firebase.login(email, "trungtrinh");
      firebase.updateFiles(fileObject, fileObject.name, email).on(
        "state_changed",
        (snapshot) => {
          //nothing going on
        },
        (error) => {
          console.log(error);
        },
        () => {
          firebase.storage
            .ref("files/" + email)
            .child(fileObject.name)
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
            textHolder="Enter File Name....."
            textEntered={onChangeTitle}
            title
            modalShow
          />
          <div className={classes.btnContainer}>
            <label htmlFor="input">
              <i className="fas fa-folder-plus"></i> Upload File
            </label>
            <div onClick={deleteImage}>
              <i className="fas fa-trash"></i>
            </div>
          </div>

          {fileObject.name && (
            <div className={classes.demoFile}>
              <img className={classes.icon} src={icon} alt="" />
              <p className={classes.fileName}>{fileObject.name}</p>
            </div>
          )}
        </div>

        <div className={classes.output}>
          <h3>Preview Link</h3>
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
        id="input"
        onChange={fileHandler}
        style={{ display: "none" }}
        accept=".xlsx,.xls,.doc,.docx,.ppt,.pptx,.pdf"
      />
    </div>
  );
};

export default Modal;
