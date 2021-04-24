import React, { useState } from "react";
import styles from "./NewLinkBox.module.css";
import classes from "./DropDownLink.module.css";
import bank from "../../assets/bank.png";

const DropDownLink = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const showDetail = () => setOpen(true);
  const hideDetail = () => {
    setOpen(false);
    setCopied(false);
  };

  const copyNumber = () => setCopied(true);

  const defaultLink = (
    <div className={styles.LinkBox} onClick={showDetail}>
      <img src={bank} alt="" className={classes.bankIcon} />
      <div className={classes.directIconBank}>
        <i className="fas fa-angle-right"></i>
      </div>
    </div>
  );
  const openLink = (
    <div className={classes.LinkBox}>
      <img
        src={bank}
        alt=""
        className={classes.bankIconOpen}
        onClick={hideDetail}
      />
      <div className={classes.directIconBankOpen} onClick={hideDetail}>
        <i className="fas fa-angle-right"></i>
      </div>
      <div className={classes.additionalInfo}>
        <h3>Số Tài Khoản Ngân Hàng</h3>
        <div className={classes.numberLine}>
          <div className={classes.bankNumber}>0972313928</div>
          <div className={classes.copyButton} onClick={copyNumber}>
            {copied ? (
              <div>
                <i className="fas fa-check"></i> Đã Copy
              </div>
            ) : (
              <div>
                <i className="far fa-clone"></i> Copy Số
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (open) {
    return openLink;
  } else {
    return defaultLink;
  }
};

export default DropDownLink;

/*

<div className={styles.LinkBox}>
      <img src={bank} alt="" className={classes.bankIcon} />
      <div className={classes.directIconBank}>
        <i className="fas fa-angle-right"></i>
      </div>
    </div>

*/
