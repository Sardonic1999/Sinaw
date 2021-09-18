import React from "react";
import { Container, Circles, Cir, Text } from "./BodyLast_Style";
import cir1 from "../assets/circle1.png";
import cir2 from "../assets/circle2.png";
import cir3 from "../assets/circle3.png";

const Body_last = () => {
  return (
    <Container>
      <Circles>
        <Cir src={cir1} />
        <Text>
          <h3>Get New Friends</h3>
          <p>
            You will meet new friends in some of classes <br /> that you take.
            Say hello to them and make <br /> friends, it will be so much warm
            friendship!
          </p>
        </Text>
      </Circles>
      <Circles>
        <Cir src={cir2} />
        <Text>
          <h3>Expert and Fun Mentor</h3>
          <p>
            You will meet new friends in some of classes <br /> that you take.
            Say hello to them and make <br /> friends, it will be so much warm
            friendship!
          </p>
        </Text>
      </Circles>
      <Circles>
        <Cir src={cir3} />
        <Text>
          <h3>Flexible Access</h3>
          <p>
            You will meet new friends in some of classes <br /> that you take.
            Say hello to them and make <br /> friends, it will be so much warm
            friendship!
          </p>
        </Text>
      </Circles>
    </Container>
  );
};

export default Body_last;
