import styled from 'styled-components';

const CSS = {
  Center: styled.div`
  margin: auto;
  width: 90%;
  padding: 10px;
  `,
  Title: styled.h1`
  background-color: #fff;
  border: 2px solid #FFD4CD;
  border-radius: 3px;
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
  border: 2px solid #FFD4CD;
  border-radius: 3px;
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover {
  box-shadow: 0 0 5px 5px rgba(17, 16, 62, 0.15);
  background: #FFD4CD;
  color: white;
  &:active {
    color: #FFD4CD;
  };
  `,
  GameBar: styled.div`
  margin: auto;
  background-color: #fff;
  border: 2px solid #FFD4CD;
  border-radius: 3px;
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
  background-color: #fff;
  border: 2px solid #FFD4CD;
  border-radius: 3px;
  margin-top: 20px;
  width: 100%;
  `,
  Scores: styled.div`
  margin: auto;
  background-color: #fff;
  border: 2px solid #FFD4CD;
  border-radius: 3px;
  margin-top: 20px;
  width: 30%;
  `,
  List: styled.div`
  margin: auto;
  display: flex;
  flexDirection: column;
  justify-content: flex-start;
  width: 80%;
  `,
  Modal: styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,0.25);
  z-index: 90;
  `,
  ModalContent: styled.div`
  position: fixed;
  background: white;
  width: 50vw;
  height: 80vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1%;
  z-index: 100;
  overflow-y: scroll
  `,
  Close: styled.div`
  display: flex;
  justify-content: flex-end;
  width: 48vw;
  `,
  CenterInfo: styled.div`
  display: flex;
  justify-content: center;
  width: 50vw;
  `,
  Layout: styled.div`
  display: flex;
  flexDirection: column;
  justify-content: center;
  `,
};

export default CSS;