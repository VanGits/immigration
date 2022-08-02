import React from "react";
import "../styles/Featured.css";
import wave from "../assets/div-wave.svg";
import img from "../assets/sapiens.svg"

const Featured = () => {
  return (
    <div className="Featured">
      <img src={wave} alt="" />
      <div className="featured__blog">
        <h5>FEATURED BLOG</h5>
        <h1>SEO in 2022: The Definitive Guide</h1>
        <p>
          Learn the exact SEO strategies, tips and tactics that are working
          great right now.
        </p>
        <div className="featured__img">
            <img src={img} alt="" />
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
    </div>
  );
};

export default Featured;
