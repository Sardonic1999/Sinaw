import styled, { css } from "styled-components";

const back = css`
  background-color: #171836;
`;

export const Container = styled.div`
  width: 1550px;
  height: 70px;
  display: flex;
  align-items: center;
  ${back}
  box-sizing: border-box;
`;

export const Logo = styled.img`
  padding: 10px 120px 10px 120px;
  width: 100px;
  height: 50px;
  cursor: pointer;
`;

export const Pages = styled.div`
  display: flex;
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 10;
  line-height: 17px;
  align-items: center;
  padding-left: 50px;
  li {
    list-style-type: none;
    margin-right: 50px;
    cursor: pointer;
  }
`;

export const Language = styled.div`
  align-items: center;
  margin-left: 450px;
  padding-right: 120px;
  select {
    ${back}
    color: white;
  }
`;

export const Login = styled.button`
  border-radius: 10px;
  background-color: red;
  color: white;
  width: 100px;
  height: 40px;
  cursor: pointer;
  margin-left: 40px;
`;
