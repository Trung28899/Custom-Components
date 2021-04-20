import React from "react";
import classes from "./NewLinkBox.module.css";
import {
  loadIcons,
  loadIconsBlack,
  loadIconsBlue,
} from "../../../../utilities/load_icons";
import { openLink } from "../../../../utilities/helper_functions";
import { useSelector } from "react-redux";

const NewLinkBox = (props) => {
  const { iconType, content, artistContent, url, desktopPreview } = props;
  const condition = iconType !== "url";
  const iconBg = condition ? "#F6F6F6" : "";
  const LinkBoxStyle = [classes.LinkBox];
  const pStyle = [classes.p];
  const { iconStyle } = useSelector((state) => state.userInfo);
  const loadIconsHandler =
    iconStyle === "Blue"
      ? loadIconsBlue
      : iconStyle === "Black"
      ? loadIconsBlack
      : loadIcons;
  const emailSmaller = iconStyle !== "Original" && iconType === "mail";

  if (desktopPreview) {
    LinkBoxStyle.push(classes.LinkBoxPreview);
    pStyle.push(classes.pPreview);
  }

  return (
    <div
      className={LinkBoxStyle.join(" ")}
      onClick={() => openLink(iconType, url)}
    >
      <div className={classes.socialIconWrapper}>
        <div className={classes.iconPlate} style={{ backgroundColor: iconBg }}>
          {condition && (
            <img
              src={loadIconsHandler(iconType)}
              className={emailSmaller ? classes.emailIcon : classes.socialIcon}
              alt="url"
            />
          )}
        </div>
      </div>
      <h2 className={classes.content}>
        <p className={pStyle.join(" ")}>{content}</p>
        <p className={pStyle.join(" ")}>{artistContent}</p>
      </h2>
      <div className={classes.directIcon}>
        <i className="fas fa-angle-right"></i>
      </div>
    </div>
  );
};

export default NewLinkBox;
