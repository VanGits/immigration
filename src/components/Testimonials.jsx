import React from "react";
import "../styles/Testimonials.css";
import forbes from "../assets/forbes-logo.svg";
import huff from "../assets/huffpost-logo.svg";
import inc from "../assets/inc-logo.svg";
import entre from "../assets/entrepreneur-logo.svg";
import jeff from "../assets/jeff.jpg";

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

          <div className="comments__wrapper">
            <div className="testimonals__comments">
              <img src={jeff} alt="" />
              <p id="testimonials-desc">
                Lakbay is insane. If you want higher rankings,
                you need to read his stuff – he’s the Unicorn among a sea of
                donkey SEOs.
              </p>
              <div>
                <h6>Jeff Bezos </h6>
                <h6>·</h6> <h5> Amazon</h5>
              </div>
            </div>
          </div>
          <div className="comments__wrapper">
            <div className="testimonals__comments">
              <img src={jeff} alt="" />
              <p id="testimonials-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore, esse nesciunt. Quidem, commodi quasi magni neque qui
                amet? Numquam magnam non expedita iure hic corporis pariatur
                suscipit quaerat et? Officiis.
              </p>
              <div>
                <h6>Larry Kim </h6>
                <h6>·</h6> <h5>WordStream</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
