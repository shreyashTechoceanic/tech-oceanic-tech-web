import React from "react";
import "./Footer.css";
import Logo from "../logo/Logo";
import SocialMediaHandles from "../socialMediaHandles/SocialMediaHandles";
import FooterOptions from "../footerOptions/FooterOptions";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="bg-purple-900 h-[100%] flex flex-col justify-between">
        <div className=" flex flex-col gap-6">
          <Logo />
          <div className="footer_logoText">
            Giving developers the power to connect with inspiring developers by
            sharing their projects and skills.
          </div>
          <SocialMediaHandles />
        </div>
        <p className="footer_smallText">© 2024techoceanictechnologies, org </p>
      </div>
      <div>
        <FooterOptions />
      </div>
    </div>
  );
};

export default Footer;
