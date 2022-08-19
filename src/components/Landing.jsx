import React from "react";
import "../styles/Landing.css";
import asset1 from "../assets/asset1.jpg";
import filfam from "../assets/filfam.jpg";
import sap from "../assets/SAP.svg";

const Landing = () => {
  return (
    <div className="Landing">
      <div className="row-landing">
        <div className="landing__wrapper">
          <div className="landing__text">
            <h1>
              Legally Go Across Borders and Find Your Next Big Opportunity in
              3-4 Years!”
            </h1>
            <div className="landing__box">
              <div className="landing__box-img">
                <img src={sap} alt="" />
              </div>
              <div className="landing__box-text">
                <p>
                  “We are committed to helping you navigate your way through the
                  bureaucratic maze of US immigration laws”
                </p>
                <cite className="landing__box-cite">
                   - AcrossBorders Org’s Legal Team
                </cite>
              </div>
            </div>
            <div className="landing__email-noti">
              <p className="landing__email-p">Stay in the know with our newsletter about the most recent immigration laws, news, and updates. We promise we won’t spam you!</p>
            </div>
            <div className="landing__email">
              <input
                type="email"
                id="email__form"
                placeholder="Email Address"
                className="email__form"
              />
              <div className="landing__button">
                <button>Subscribe for free</button>
              </div>
            </div>
          </div>
          <div className="landing__img">
            <img src={filfam} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
