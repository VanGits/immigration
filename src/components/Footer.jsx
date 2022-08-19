import React from "react";
import "../styles/Footer.css";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer__main">
        <div className="footer__div-1">
          <h1 className="logo">ACROSSBORDERS</h1>
          <h2 className="wow">
            Next-level SEO training and link building strategies
          </h2>
        </div>
        <div className="footer__div-2">
          <h4>Learn</h4>
          <p>Blog</p>
          <p>Newsletter</p>
        </div>
        <div className="footer__div-3">
          <h4>Company</h4>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="footer__div-4">
          <h4>Connect</h4>
          <ul className="socials">
            <li>
              <img src={twitter} alt="" />
            </li>
            <li>
              <img src={youtube} alt="" />
            </li>
            <li>
              <img src={instagram} alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__trademark">
        <p>© 2022 AcrossBorders is a Trademark of AcrossBorders Inc</p>
        <div className="footer__terms">
            <p>Terms of Service</p>
            <p>Privacy Notice</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
