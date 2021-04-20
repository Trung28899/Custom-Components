import React, { useState, useEffect } from "react";
import classes from "./SimpleTextBox.module.css";

const SimpleTextBox = ({
  title,
  textEntered,
  textHolder,
  modalShow,
  defaultValue,
}) => {
  const [titleLong, setTitleLong] = useState(false);
  const [value, setValue] = useState("");
  let noticeString = null;
  let cssClasses = [classes.input];

  if (title && titleLong) {
    noticeString = (
      <small className={classes.maxLengthReached}>
        Tên quá dài (quá 50 ký tự)
      </small>
    );
    cssClasses.push(classes.maxLengthReached);
  }

  useEffect(() => {
    if (modalShow === false) {
      setValue("");
    }
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [modalShow, defaultValue]);

  const updateInput = (event) => {
    textEntered(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder={textHolder}
        className={cssClasses.join(" ")}
        onChange={(event) => {
          const eventValue = event.target.value;
          title && eventValue.length > 50
            ? setTitleLong(true)
            : setTitleLong(false);
          setValue(eventValue);
          return updateInput(event);
        }}
        value={value}
      ></input>
      {noticeString}
    </>
  );
};

export default SimpleTextBox;
