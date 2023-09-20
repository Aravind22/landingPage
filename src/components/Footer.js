import React from "react";
import Cookzy from "../Assets/COOKZY.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = ({scrollToHomeComponet,scrollToWorkComponent,scrollToContactComponent, scrollToAboutComponent}) => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Cookzy} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span onClick={scrollToHomeComponet}>Home</span>
          <span onClick={scrollToAboutComponent}>About</span>
          <span onClick={scrollToWorkComponent}>How it works</span>
          <span onClick={scrollToContactComponent}>Contact</span>
        </div>
        <div className="footer-section-columns">
          <span>info@dexwox.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;