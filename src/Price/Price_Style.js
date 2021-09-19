import styled from "styled-components";

export const Wrapper = styled.div`
  display: column;
  width: 1550px;
  height: fit-content;
  background-color: #171836;
  padding-bottom: 50px;
  padding-top: 70px;
`;

export const Text = styled.div`
  padding-bottom: 84px;
  h1 {
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

export const ItemWrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px 120px 50px 120px;
`;
export const ImgWrap = styled.div`
  display: flex;
`;
export const TextWrap = styled.div`
  display: column;
`;

export const Items = styled.div`
  display: column;
  width: 372px;
  height: 515px;
  border: 2px solid rgba(32, 34, 70, 1);
  border-radius: 20px;
  background: linear-gradient(rgba(32, 34, 70, 1), rgba(40, 43, 87, 0, 31));
  h2 {
    color: rgba(255, 255, 255, 0.8);

    padding-top: 35px;
    margin: 0px;
  }
  p {
    color: #f5453d;
    font-size: 28px;
    margin: 0px;
    span {
      color: rgba(255, 255, 255, 0.8);

      font-size: 15px;
    }
  }
`;

export const Img = styled.img`
  width: 56px;
  height: 56px;
  border: 1px solid green;
  border-radius: 20px;
  margin: 40px 30px 30px 36px;
`;

export const Info = styled.div`
  color: rgba(255, 255, 255, 0.8);
  padding: 20px 40px 50px 40px;
  li {
    padding-bottom: 15px;
  }
  hr {
    border-bottom: 1px solid #272953;
    margin-bottom: 40px;
  }
`;

export const Button = styled.button`
  width: 280px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #f5443b;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  text-align: center;
  margin: 36px;
  p {
    color: rgba(245, 68, 59, 1);
    font-size: 15px;
  }
  :hover {
    background: #f5443b;
    p {
      color: white;
    }
  }
`;
