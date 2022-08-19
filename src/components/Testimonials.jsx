import React from "react";
import "../styles/Testimonials.css";
import forbes from "../assets/forbes-logo.svg";
import huff from "../assets/huffpost-logo.svg";
import inc from "../assets/inc-logo.svg";
import entre from "../assets/entrepreneur-logo.svg";
import jeff from "../assets/jeff.jpg";
import sap from "../assets/SAP.svg";
import sap2 from "../assets/SAP2.svg";

const Testimonials = () => {
  return (
    <div className="Testimonals">
      <div className="row-landing">
        <div className="testimonals__companies">
          <h4>ACROSSBORDERS HAS BEEN FEATURED ON</h4>
          <div className="testimonals__companies-logos">
            <div>
              <img src={forbes} alt="" />
            </div>
            <div>
              <img src={huff} alt="" />
            </div>
            <div>
              <img src={inc} alt="" />
            </div>
            <div>
              <img src={entre} alt="" />
            </div>
          </div>
          <div className="testimonals__others">
            <h4>WHAT OTHERS ARE SAYING</h4>
          </div>

          <div className="comments__wrapper">
            <div className="testimonals__comments">
              <img src={sap} alt="" />
              <p id="testimonials-desc">
                “I had a complicated immigration case that took years to go
                through the path to citizenship. As a recently naturalized
                citizen of the United States, AB’s legal team remained
                steadfastly supportive through the years and responded promptly
                to questions. They dealt with my case with commendable
                transparency, and helped to bring in another immigration
                sub-specialist colleague when needed. I recommend working with
                their team to anyone seeking a competent, caring and astute team
                of immigration attorneys.”
              </p>
              <div>
                <h6>- Olatunfi </h6>
              </div>
            </div>
          </div>
          <div className="comments__wrapper">
            <div className="testimonals__comments">
              <img src={sap2} alt="" />
              <p id="testimonials-desc">
                “We hired AB for our J-1 waiver, H1-B (+ renewal) and green card
                application over the course of 5 years. They always provided
                excellent service, answering all our questions promptly and made
                sure our case was timely managed. Highly recommended!”
              </p>
              <div>
                <h6>- Philippe and M.</h6>
                {/* <h6>·</h6> <h5>WordStream</h5> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
