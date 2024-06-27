import React from "react";
import "./JoinTheCommunity.css";
import SocialMediaHandles from "../socialMediaHandles/SocialMediaHandles";

const JoinTheCommunity = () => {
  return (
    <div className="joinTheCommunity_container">
      <div className="joinTheCommunity_headingWhiteText">
        Join The{" "}
        <span className="joinTheCommunity_headingBlueText">Community</span>
      </div>
      <div className="joinTheCommunity_contentText">
        Join the conversation in our community groups. Share ideas, thoughts,
        feedback and help us grow this unique network. You'll find us on the
        usual channels below.
      </div>
      <div>
        <SocialMediaHandles />
      </div>
    </div>
  );
};

export default JoinTheCommunity;
