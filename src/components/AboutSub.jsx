import React from "react";
import "../styles/AboutSub.css";
import forbes from "../assets/forbes-logo.svg"

const AboutSub = () => {
  return (
    <div className="AboutSub">
      <h1>What Lakbay is all about</h1>
      <div className="about__quotes">
        <div className="about__question">
        
            <p>If you’ve ever wondered:</p>
            <p>
              “Where can I find actionable SEO advice that gets results?”,
              you’re in the right place. Backlinko is where professional
              marketers turn for proven SEO advice.
            </p>
            <p>
              My effective SEO advice is why marketers from companies like
              Apple, Disney, IBM, and Amazon subscribe to my email newsletter.
            </p>
          
        </div>
        <div className="about__quote">
            <h2>“Brian is a really smart SEO guy who knows what he’s talking about because he lives it every day.”</h2>
            <img src={forbes} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutSub;
