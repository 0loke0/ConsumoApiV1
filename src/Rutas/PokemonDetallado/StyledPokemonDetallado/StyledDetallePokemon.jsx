import Container from "react-bootstrap/Container";

import Col from "react-bootstrap/Col";

import styled from "styled-components";

export const Sp = styled.p`
  font-size: 15px;
  text-shadow: 1px 1px 1px black;
  font-family: cursive;
  margin: 5px;
  height: 75%;
`;

export const SCol = styled(Col)`
  text-align: center;
  border: solid 2px #2a2ab6;
  border-radius: 10px;
  padding: 2px;
  margin: 5px;
`;

export const SContainer = styled(Container)`
  width: 65%;
  border: solid 2px blue;
  border-radius: 25px;
  background: linear-gradient(45deg, #fa8bff 0%, #2bd2ff 52%, #2bff88 90%);
  padding: 20px;
  margin-bottom: 20px;
`;

export const SDivCarcasa = styled.div`
  background: #ff0066;
  margin-top: 2%;
  margin-left: 27%;
  margin-right: 27%;
  margin-bottom: 5%;
  padding: 10px;
  border-radius: 10%;
  border: solid 1px black;
  box-shadow: 2px 2px 5px 5px #003e5b;
`;
