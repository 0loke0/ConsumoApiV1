import styled from "styled-components";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SContenedor = styled.div`
  padding: 10px;
  border-radius: 15px;
  background-color: #eef2f7;
  box-shadow: 0px 0px 10px black;
  margin-top: 5%;
`;

export const SdivDerecha = styled.div`
  text-align: right;
`;

export const SRow = styled(Row)`
  margin-bottom: 15px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const SImagenLogo = styled.img`
  max-width: 20%;
  margin: 0px auto;
  margin-top: -5%;
  display: block;
`;

export const SLink = styled(Link)`
  top: 3px;
  text-align: center;
  text-decoration: none;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
  padding: 8px 16px 7px 12px;

  background-color: transparent;
  color: black;
  border: 1px solid #008cba;
  &:hover {
    background-color: #008cba;
    color: #ffffff;
    transition-duration: 0.4s;
  }
`;
