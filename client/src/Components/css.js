import styled from 'styled-components';

const CSS = {
  Center: styled.div`
  margin: auto;
  width: 90%;
  padding: 10px;
  `,
  Header: styled.div`
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  `,
  MainButtons: styled.button`
  width: 40%;
  margin-top: 20px;
  margin-right: 30px;
  border-radius: 4px;
  justify-content: center;
  padding: 18px;
  box-shadow: 0 5px 5px rgba(17, 16, 62, 0.1);
  font-size: 20px;
  font-weight: 300;
  color: black;
  background-color: #fff;
  border: 2px solid #4b15a3;
  border-radius: 3px;
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover {
  box-shadow: 0 0 5px 5px rgba(17, 16, 62, 0.15);
  background: #4b15a3;
  color: white;
  &:active {
    color: #4b15a3;
  };
  `,
  GameBar: styled.div`
  margin: auto;
  border: 3px solid green;
  display: flex;
  margin-top: 20px;
  justify-content: space-evenly;
  width: 80%;
  `,
  Game: styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  border: 3px solid green;
  margin-top: 20px;
  width: 100%;
  `,
  Scores: styled.div`
  margin: auto;
  border: 3px solid green;
  margin-top: 20px;
  width: 50%;
  `,
  List: styled.div`
  margin: auto;
  display: flex;
  flexDirection: column;
  justify-content: space-evenly;
  width: 80%;
  `,
};

export default CSS;