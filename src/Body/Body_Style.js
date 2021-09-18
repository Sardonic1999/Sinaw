import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1550px;
  height: fit-content;
  display: flex;
  background-color: #171836;
`;

export const Left = styled.div`
  flex: 1;
  /* position: relative; */
  background-color: #171836;
`;

export const Main = styled.img`
  width: 700px;
  height: 652px;
  padding-left: 40px;
  position: relative;
  /* position: absolute; */
  /* background-color: #171836; */
`;
export const Fon = styled.img`
  position: absolute;
  top: 230px;
  width: 600px;
  height: 500px;
`;

export const Lamp = styled.div`
  background: linear-gradient(#4c5e9d, #171836);
  border-radius: 20px;
  width: 90px;
  height: 90px;
  position: absolute;
  top: 300px;
  left: 70px;
`;

export const Book = styled.div`
  width: 90px;
  height: 90px;
  position: absolute;
  background: linear-gradient(#4c5e9d, #171836);
  border-radius: 20px;
  top: 130px;
  left: 525px;
`;

export const Contact = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 335px;
  height: 75px;
  padding-left: 20px;
  background: linear-gradient(#4c5e9d, #171836);
  border-radius: 20px;
  border: 2px solid #171836;
  opacity: 0.8;
  position: absolute;
  top: 620px;
  left: 350px;
  p {
    color: white;
    margin-left: 20px;
  }
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid white;
  border-radius: 50%;
  margin-right: -15px;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  background: #8087b8;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid white;
  p {
    font-size: 20px;
    color: #171836;
    margin: 0px;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: column;
`;

export const Title = styled.div`
  width: 484px;
  height: 219px;
  padding-left: 120px;
  position: relative;
  h1 {
    color: white;
    font-size: 50px;
  }
  p {
    color: rgba(255, 255, 255, 0.4);
    font-size: 18px;
  }
`;
export const WrapInput = styled.div`
  position: relative;
  padding-top: 40px;
`;
export const Input = styled.input`
  width: 450px;
  height: 50px;
  background: #1f2143;
  border: 1px solid #171836;
  outline: none;
  color: white;
  font-size: 17px;
  padding-left: 20px;
  box-sizing: border-box;
  border-radius: 12px;
  margin-bottom: 40px;

  ::placeholder {
    color: rgba(255, 255, 255, 0.4);
    font-size: 16px;
  }
`;

export const Search = styled.img`
  position: absolute;
  padding: 10px 10px;
  right: 50px;
`;

export const WrapSuggest = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 20px;
  justify-content: space-between;
`;
export const WrapSuggest2 = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Items = styled.div`
  border: 1px solid rgba(154, 156, 203, 0.6);
  color: rgba(154, 156, 203, 0.6);
  width: fit-content;
  height: fit-content;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
`;
