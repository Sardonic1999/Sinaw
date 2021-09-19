import React from "react";
import { Wrapper, Side, Left, Right, Store, Img, Play } from "./Google_style";
import app from "../assets/app.png";
import google from "../assets/google.png";
import hello from "../assets/hello.png";

const Google = () => {
  return (
    <Wrapper>
      <Side>
        <Left>
          <h1>Get Our Apps, Now!</h1>
          <p>
            Reach out our apps everywhere and everytime <br /> with Sinauw
            Mobile Application.
          </p>
          <Play>
            <Store src={google} />
            <Store src={app} />
          </Play>
        </Left>
        <Right>
          <Img src={hello} />
        </Right>
      </Side>
    </Wrapper>
  );
};

export default Google;
