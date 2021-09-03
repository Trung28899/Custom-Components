import React from "react";
import classes from "./BottomNav.module.css";
import InstaPost from "../InstagramEmbed/Insta";

const BottomNav = () => {
  return (
    <div>
      <div className={classes.nav}>
        <div className={classes.nav_link}>
          <i className="fas fa-user fa-lg"></i>
          <span className={classes.nav_text}>Cá Nhân</span>
        </div>
        <div className={classes.nav_link}>
          <i className="fas fa-briefcase fa-lg"></i>
          <span className={classes.nav_text}>Doanh Nghiệp</span>
        </div>
        <div className={classes.nav_link}>
          <i className="fas fa-shopping-cart fa-lg"></i>
          <span className={classes.nav_text}>Bán Hàng</span>
        </div>
      </div>
      <div>
        <InstaPost />
      </div>
    </div>
  );
};

export default BottomNav;
