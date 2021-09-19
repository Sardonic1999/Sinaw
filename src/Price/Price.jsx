import React from "react";
import {
  Wrapper,
  Text,
  ItemWrap,
  Items,
  TextWrap,
  Img,
  Info,
  ImgWrap,
  Button,
} from "./Price_Style";
import star from "../assets/star.png";
import key from "../assets/key.png";
import crown from "../assets/crown.png";

const Price = () => {
  return (
    <Wrapper>
      <Text>
        <h1>Course Pricing</h1>
        <p>Choose pricing that suits to your need.</p>
      </Text>
      <ItemWrap>
        <Items>
          <ImgWrap>
            <Img src={star} />
            <TextWrap>
              <h2>Free</h2>
              <p>
                $0 <span>/month</span>
              </p>
            </TextWrap>
          </ImgWrap>
          <Info>
            <hr />
            <li>Free e-book for every class</li>
            <li>Materials update every day</li>
            <li>Free download material videos</li>
            <li>Unlock 5 material videos</li>
          </Info>
          <Button>
            <p>Your Current Package</p>
          </Button>
        </Items>
        <Items>
          <ImgWrap>
            <Img src={key} />
            <TextWrap>
              <h2>Express</h2>
              <p>
                $75 <span>/month</span>
              </p>
            </TextWrap>
          </ImgWrap>
          <Info>
            <hr />
            <li>Free e-book for every class</li>
            <li>Materials update every day</li>
            <li>Free download material videos</li>
            <li>Unlock 5 material videos</li>
          </Info>
          <Button>
            <p>Buy Express</p>
          </Button>
        </Items>
        <Items>
          <ImgWrap>
            <Img src={crown} />
            <TextWrap>
              <h2>Premium</h2>
              <p>
                $115 <span>/month</span>
              </p>
            </TextWrap>
          </ImgWrap>
          <Info>
            <hr />
            <li>Free e-book for every class</li>
            <li>Materials update every day</li>
            <li>Free download material videos</li>
            <li>Unlock 5 material videos</li>
          </Info>
          <Button>
            <p>Buy Premium</p>
          </Button>
        </Items>
      </ItemWrap>
    </Wrapper>
  );
};

export default Price;
