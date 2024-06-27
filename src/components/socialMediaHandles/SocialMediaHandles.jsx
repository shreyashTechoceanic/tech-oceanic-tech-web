import React from "react";
import "./SocialMediaHandles.css";
import Ui_Icon from "../../iconsAndImages/Ui_Icon.svg";
import Github_Icon from "../../iconsAndImages/Github_Icon.svg";
import Linkdin_Icon from "../../iconsAndImages/Linkdin_Icon.svg";
import Twitter_Icon from "../../iconsAndImages/Twitter_Icon.svg";
import Instagram_Icon from "../../iconsAndImages/Instagram_Icon.svg";

const SocialMediaHandles = () => {
  return (
    <div className="socialMediaHandles_container">
      <div className="socialMediaHandles_iconBg">
        <img src={Ui_Icon} />
      </div>
      <div className="socialMediaHandles_iconBg">
        <img src={Github_Icon} />
      </div>
      <div className="socialMediaHandles_iconBg">
        <img src={Linkdin_Icon} />
      </div>
      <div className="socialMediaHandles_iconBg">
        <img src={Twitter_Icon} />
      </div>
      <div className="socialMediaHandles_iconBg">
        <img src={Instagram_Icon} />
      </div>
    </div>
  );
};

export default SocialMediaHandles;
