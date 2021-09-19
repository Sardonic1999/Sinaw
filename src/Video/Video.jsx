import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Wrapper, Img } from "./Video_Style";
import android from "../assets/android.png";
import "pure-react-carousel/dist/react-carousel.es.css";

const Video = () => {
  return (
    <Wrapper>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={3}
      >
        <Slider style={{ width: "1400px" }}>
          <Slide index={0}>
            <Img src={android} />
          </Slide>
          <Slide index={1}>
            <Img src={android} />
          </Slide>
          <Slide index={2}>
            <Img src={android} />
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </Wrapper>
  );
};

export default Video;
