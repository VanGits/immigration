import React from "react";
import "../styles/Landing.css";
import asset1 from "../assets/asset1.jpg";
import filfam from "../assets/filfam.jpg"

const Landing = () => {
  return (
    <div className="Landing">
      <div className="row-landing">
        <div className="landing__wrapper">
          <div className="landing__text">
            <h1>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit</h1>
            <div className="landing__box">
              <div className="landing__box-img">
                <img src={asset1} alt="" />
              </div>
              <div className="landing__box-text">
                <p>
                  “Lorem ipsum dolor, sit amet consectetur adipisicing elit!”
                </p>
                <cite className="landing__box-cite">
                  Mark Zuckerberg, CEO of Meta
                </cite>
              </div>
            </div>
            <div className="landing__email">
              <input
                type="email"
                id="email__form"
                placeholder="Email Address"
              />
              <div className="landing__button">
                <button>Try It</button>
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
