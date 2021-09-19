import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 1550px;
  height: fit-content;
  background-color: #171836;
  padding-bottom: 100px;
`;

export const Left = styled.div`
  padding: 100px 0px 50px 120px;
  p {
    color: rgba(255, 255, 255, 0.4);
    margin: 0px;
    flex: 1;
  }
`;

export const Img = styled.img`
  width: 120px;
  height: 60px;
`;
export const Icons = styled.div`
  display: flex;
  img {
    padding: 40px 30px 30px 0px;
    cursor: pointer;
  }
`;

export const Right = styled.div`
  display: flex;
  padding: 100px 150px 50px 120px;
  justify-content: space-around;
  flex: 2;
`;

export const Pages = styled.div`
  h1 {
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  li {
    color: rgba(255, 255, 255, 0.4);
    list-style-type: none;
    padding-top: 10px;
    font-size: 20px;
    cursor: pointer;
  }
`;
