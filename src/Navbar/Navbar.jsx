import React from "react";
import { Container, Logo, Pages, Login, Language } from "./Nav_Style";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <Container>
      <Logo src={logo} />
      <Pages>
        <li>Home</li>
        <li>Courses</li>
        <li>Webinar</li>
        <li>Pricing</li>
        <Language>
          <select>
            <option>En</option>
            <option>Ru</option>
            <option>Uz</option>
          </select>
          <Login>Login</Login>
        </Language>
      </Pages>
    </Container>
  );
};

export default Navbar;
