import React from "react";
import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";
import Body_last from "./Body/Body_last";
import Course from "./Courses/Course";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Body_last />
      <Course />
    </div>
  );
};

export default Root;
