import React from "react";
import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";
import Body_last from "./Body/Body_last";
import Course from "./Courses/Course";
import Video from "./Video/Video";
import Price from "./Price/Price";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Body_last />
      <Course />
      {/* <Video /> */}
      <Price />
    </div>
  );
};

export default Root;
