import React from "react";
import "./FlowingIcons.css";
import FlowingIcons_Image from "../../iconsAndImages/FlowingIcons_Image.svg";
import FirstFloating_Icon from "../../iconsAndImages/FirstFloating_Icon.svg";
import SecondFloating_Icon from "../../iconsAndImages/SecondFloating_Icon.svg";
import intg2 from "../../iconsAndImages/intg2.svg";
import intg3 from "../../iconsAndImages/intg3.svg";
import intg4 from "../../iconsAndImages/intg4.svg";
import intg5 from "../../iconsAndImages/intg5.svg";

const FlowingIcons = () => {
  return (
    <div className="flowingIcons_container">
      <img
        src={FirstFloating_Icon}
        className="w-[155px] h-[155px]"
        style={{ position: "absolute", top: "132px", left: "230px" }}
      />
      <img
        src={SecondFloating_Icon}
        className="w-[117px] h-[117.84px]"
        style={{ position: "absolute", top: "50.37px", left: "482px" }}
      />
      <img
        src={intg3}
        className="w-[170px] h-[170px]"
        style={{ position: "absolute", top: "187px", left: "682px" }}
      />
      <img
        src={intg4}
        className="w-[116px] h-[117px]"
        style={{ position: "absolute", top: "50px", left: "922px" }}
      />
      <img
        src={intg2}
        className="w-[140px] h-[140px]"
        style={{ position: "absolute", top: "39px", left: "1147px" }}
      />

      {/* <img src={FlowingIcons_Image} /> */}
    </div>
  );
};

export default FlowingIcons;
