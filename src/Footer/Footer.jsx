import React from "react";
import { Wrapper, Img, Left, Right, Pages, Icons } from "./Footer_Style";
import logo from "../assets/logo.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";

const Footer = () => {
  return (
    <Wrapper>
      <Left>
        <Img src={logo} />
        <p>
          Any feedback or questions? <br /> Contact us on our social media
        </p>
        <Icons>
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={insta} alt="" />
        </Icons>
      </Left>
      <Right>
        <Pages>
          <h1>Menu</h1>
          <li>Home</li>
          <li>Courses</li>
          <li>Webinar</li>
        </Pages>
        <Pages>
          <h1>Services</h1>
          <li>Materials Update</li>
          <li>Trusted Mentor</li>
          <li>Free E-book</li>
          <li>Meeting</li>
        </Pages>
        <Pages>
          <h1>Further Information</h1>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </Pages>
        <Pages>
          <h1>Apps Download</h1>
          <li>Google Play Store</li>
          <li>App Store</li>
        </Pages>
      </Right>
    </Wrapper>
  );
};

export default Footer;
