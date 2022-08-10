import React from "react";
import "../styles/Newsletter.css";
import connect from "../assets/connect.svg";
const Newsletter = () => {
  return (
    <div className="Newsletter">
      <div className="newsletter__words">
        <h1>Proven SEO Tips Straight to Your Inbox</h1>
        <p>
          Get access to exclusive tips, strategies and case studies that I don't
          share anywhere else.
        </p>
        <div className="landing__email">
          <input type="email" id="email__form" placeholder="Email Address" />
          <div className="landing__button">
            <button>Try It</button>
          </div>
        </div>
      </div>
      <div className="newsletter__img">
        <img src={connect} alt="" />
      </div>
    </div>
  );
};

export default Newsletter;
