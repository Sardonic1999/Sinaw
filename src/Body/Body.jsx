import React from "react";
import {
  Book,
  Contact,
  Fon,
  Img,
  Lamp,
  Left,
  Main,
  Right,
  Wrapper,
  Button,
  Title,
  Input,
  Search,
  WrapInput,
  WrapSuggest,
  WrapSuggest2,
  Items,
} from "./Body_Style";
import rect from "../assets/rect.png";
import main from "../assets/main.png";
import lamp from "../assets/lamp.png";
import book from "../assets/book.png";
import search from "../assets/search.png";
const Body = () => {
  return (
    <Wrapper>
      <Left>
        <Fon src={rect} />
        <Main src={main} />
        <Lamp>
          <img style={{ padding: "10px" }} src={lamp} alt="" />
        </Lamp>
        <Book>
          <img src={book} alt="" />
        </Book>
        <Contact>
          <Img src={book} />
          <Img src={lamp} />
          <Img src={book} />
          <Img src={lamp} />
          <Button>
            <p>+</p>
          </Button>
          <p>
            More than 80k+ <br />
            Students joined!
          </p>
        </Contact>
      </Left>
      <Right>
        <Title>
          <h1>
            Grow Your Skills <br /> To Advance Your <br /> Career Path.
          </h1>
          <p>We have something big for you who want to level up!</p>
          <WrapInput>
            <Input placeholder="What do you want to learn..." />
            <Search src={search} />
            <p>Suggestions</p>
          </WrapInput>
          <WrapSuggest>
            <Items>UI UX Design</Items>
            <Items>CSS Fundamental</Items>
            <Items>3D Design Illustration</Items>
          </WrapSuggest>
          <WrapSuggest2>
            <Items>Website Development</Items>
            <Items>Logo Design</Items>
            <Items>Icon Design</Items>
          </WrapSuggest2>
        </Title>
      </Right>
    </Wrapper>
  );
};

export default Body;
