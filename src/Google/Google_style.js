import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1550px;
  height: fit-content;
  display: flex;
  background-color: #171836;
  padding: 60px 120px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;

export const Side = styled.div`
  display: flex;
  width: 1200px;
  height: 430px;
  background: linear-gradient(102.01deg, #23265c 1.96%, #352a56 101.68%);
  border-radius: 40px;
`;

export const Left = styled.div`
  flex: 1;
  h1 {
    color: white;
    font-size: 45px;
    margin: 0px;
    padding: 80px 0px 10px 100px;
  }
  p {
    padding: 20px 0px 10px 100px;
    margin: 0px;
    color: rgba(255, 255, 255, 0.4);
    font-size: 18px;
  }
`;

export const Right = styled.div`
  flex: 1;
`;

export const Play = styled.div`
  display: flex;
  padding: 40px 0px 20px 100px;
`;

export const Store = styled.img`
  width: 150px;
  height: 50px;
  margin-right: 40px;
  cursor: pointer;
`;

export const Img = styled.img`
  padding: 40px 100px 0px 100px;
`;
