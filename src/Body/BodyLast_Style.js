import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 1550px;
  height: fit-content;
  background-color: #171836;
  justify-content: space-around;
  padding: 100px 120px 100px 120px;
  box-sizing: border-box;
`;

export const Circles = styled.div`
  display: flex;
`;

export const Cir = styled.img`
  width: 60px;
  height: 60px;
  margin: 10px 20px 0px 0px;
`;

export const Text = styled.div`
  h3 {
    font-size: 20px;
    color: white;
  }
  p {
    color: rgba(255, 255, 255, 0.4);
  }
`;
