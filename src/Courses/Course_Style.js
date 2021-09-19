import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1550px;
  height: fit-content;
  /* display: flex; */
  background-color: #171836;
  padding-bottom: 50px;
  padding-top: 70px;
`;

export const Text = styled.div`
  padding-bottom: 84px;
  h3 {
    text-align: center;
    color: white;
    font-size: 36px;
    margin: 0px;
  }
  p {
    color: rgba(255, 255, 255, 0.4);
    font-size: 18px;
    text-align: center;
  }
`;

export const WrapItem = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0px 120px;
`;

export const Items = styled.div`
  width: 270px;
  height: 422px;
  border-radius: 20px;
  margin-bottom: 50px;
  border: 2px solid #282b57;
  background: linear-gradient(rgba(50, 52, 101, 0.5), rgba(50, 52, 101, 0.15));
`;

export const Img = styled.img`
  width: 252px;
  height: 169px;
  border-radius: 10px;
  padding: 10px;
`;

export const Title = styled.div`
  h6 {
    color: #3bf5bd;
    font-size: 15px;
    padding: 15px;
    margin: 0px;
  }
  h2 {
    margin: 0px;
    color: white;
    font-size: 18px;
    padding-top: 15px;
    padding-left: 15px;
  }
  p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.4);
    padding-top: 15px;
    margin: 0px;
    padding-bottom: 20px;
    padding-left: 15px;
  }
  hr {
    width: 240px;
    border: 1px solid #292b56;
    margin: 0px 14px;
  }
`;

export const Contact = styled.div`
  display: flex;
`;

export const CircleImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 10px 20px;
`;

export const Name = styled.div`
  padding: 10px 0px;
  h3 {
    color: white;
    font-size: 14px;
    margin: 0px;
  }
  p {
    color: rgba(255, 255, 255, 0.4);
    font-size: 12px;
    margin: 0px;
  }
`;

export const Button = styled.button``;
