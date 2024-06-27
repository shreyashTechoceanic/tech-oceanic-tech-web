import React from "react";
import "./FooterOptions.css";

const FooterOptions = () => {
  return (
    <div className="footerOptions_container">
      <div className="footerOptions_option">
        <div className="footerOptions_listHeading">Features</div>
        <ul>
          <li>Showcase</li>
          <li>Social Links</li>
          <li>Personalization</li>
          <li>Profile Themes</li>
        </ul>
      </div>
      <div className="footerOptions_option">
        <div className="footerOptions_listHeading">Resources</div>
        <ul>
          <li>Showcase</li>
          <li>GitHub</li>
          <li>Community</li>
          <li>Help Center</li>
        </ul>
      </div>
      <div className="footerOptions_option">
        <div className="footerOptions_listHeading">About</div>
        <ul>
          <li>xProfile + Youth Icon</li>
          <li>Open-source Software</li>
          <li>GitHub</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className="footerOptions_option">
        <div className="footerOptions_listHeading">Legal</div>
        <ul>
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterOptions;
