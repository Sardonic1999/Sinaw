import React from "react";
import {
  Wrapper,
  Text,
  WrapItem,
  Items,
  Img,
  Title,
  Contact,
  CircleImg,
  Name,
} from "./Course_Style";
import android from "../assets/android.png";
import code from "../assets/code.png";
import figma from "../assets/figma.png";
import img1 from "../assets/img1.png";

const Course = () => {
  return (
    <Wrapper>
      <Text>
        <h3>What Do You Want to Learn?</h3>
        <p>Choose the right class as you need. Then enjoy studying.</p>
      </Text>
      <WrapItem>
        <Items>
          <Img src={img1} />
          <Title>
            <h6>Technology</h6>
            <h2>Digital Marketing Strategy</h2>
            <p>
              This course aims to give you deeper <br /> understanding of core
              processes ...
            </p>
            <hr />
          </Title>
          <Contact>
            <CircleImg src={img1} alt="img" />
            <Name>
              <h3>Joey Piere</h3>
              <p>Mentor</p>
            </Name>
          </Contact>
        </Items>
        <Items>
          <Img src={figma} />
          <Title>
            <h6>Design</h6>
            <h2>Figma Fundamental</h2>
            <p>
              These lessons and exercises will help <br /> you start designing
              with Figma ...
            </p>
            <hr />
          </Title>
          <Contact>
            <CircleImg src={figma} alt="img" />
            <Name>
              <h3>Araya Sheila</h3>
              <p>Mentor</p>
            </Name>
          </Contact>
        </Items>
        <Items>
          <Img src={code} />
          <Title>
            <h6>Coding</h6>
            <h2>HTML Fundamental</h2>
            <p>
              Well organized and easy to make you <br /> understand tutorials
              with lots of ...
            </p>
            <hr />
          </Title>
          <Contact>
            <CircleImg src={code} alt="img" />
            <Name>
              <h3>Ellisa Ruth</h3>
              <p>Mentor</p>
            </Name>
          </Contact>
        </Items>
        <Items>
          <Img src={android} />
          <Title>
            <h6>Coding</h6>
            <h2>Android App Development</h2>
            <p>
              Take your Android coding skills to the <br /> next level, advanced
              Android app ...
            </p>
            <hr />
          </Title>
          <Contact>
            <CircleImg src={android} alt="img" />
            <Name>
              <h3>Wendy Troye</h3>
              <p>Mentor</p>
            </Name>
          </Contact>
        </Items>
      </WrapItem>
    </Wrapper>
  );
};

export default Course;
