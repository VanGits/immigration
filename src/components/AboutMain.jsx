import React from "react";
import "../styles/AboutMain.css";
import asset from "../assets/asset1.jpg";
import forbes from "../assets/forbes-logo.svg"
const AboutMain = () => {
  return (
    <div className="AboutMain">
      <div className="about__content-wrapper">
        <div className="about__content">
          <div className="about__title">
            <h1>Want higher rankings and more traffic?</h1>
            <p>
              You’ve come to the right place. Backlinko is the place for
              next-level SEO training and link building strategies.
            </p>
          </div>
          <div className="about__img">
            <img src={asset} alt="" />
          </div>
        </div>
      </div>
      <div className="about__comments">
        <div className="comments__row">
        <div className="about__comments-img">
            <img src={forbes} alt="" />
            <p>"Brian Dean is one of the world’s most sought-after SEO experts"</p>
        </div>
        <div className="about__comments-img">
            <img src={forbes} alt="" />
            <p>"Brian Dean is one of the world’s most sought-after SEO experts"</p>
        </div>
        <div className="about__comments-img">
            <img src={forbes} alt="" />
            <p>"Brian Dean is one of the world’s most sought-after SEO experts"</p>
        </div>

        </div>
        <div className="comments__row">
        <div className="about__comments-img">
            <img src={forbes} alt="" />
            <p>"Brian Dean is one of the world’s most sought-after SEO experts"</p>
        </div>
        <div className="about__comments-img">
            <img src={forbes} alt="" />
            <p>"Brian Dean is one of the world’s most sought-after SEO experts"</p>
        </div>
        <div className="about__comments-img">
            <img src={forbes} alt="" />
            <p>"Brian Dean is one of the world’s most sought-after SEO experts"</p>
        </div>
        </div>
       
       
        
      </div>
    </div>
  );
};

export default AboutMain;
