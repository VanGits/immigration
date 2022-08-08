import React from "react";
import "../styles/AboutAction.css";
import forbes from "../assets/forbes-logo.svg"
const AboutAction = () => {
  return (
    <div className="AboutAction">
      <div className="about__action-box">
        <h1>Want actionable SEO advice from me? Then hop on the newsletter</h1>
        <div className="landing__email">
          <input type="email" id="email__form" placeholder="Email Address" />
          <div className="landing__button">
            <button>Try It</button>
          </div>
        </div>
      </div>
      <div className="about__trusted">
        <h4>TRUSTED BY</h4>
        <img src={forbes} alt="" />
        <img src={forbes} alt="" />
        <img src={forbes} alt="" />
      </div>
    </div>
  );
};

export default AboutAction;
