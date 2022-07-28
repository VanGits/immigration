import React from "react";
import "../styles/Testimonials.css";
import forbes from "../assets/forbes-logo.svg";
import huff from "../assets/huffpost-logo.svg";
import inc from "../assets/inc-logo.svg";
import entre from "../assets/entrepreneur-logo.svg";

const Testimonials = () => {
  return (
    <div className="Testimonals">
      <div className="row-landing">
        <div className="testimonals__companies">
          <h4>LAKBAY HAS BEEN FEATURED ON</h4>
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
          <div className="testimonals__comments">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
