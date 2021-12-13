import styled from "styled-components";
import { Link } from "react-router-dom";

export const Slink = styled(Link)`
  margin: 10px 0px 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #4ff0ff;
  transition: 2s;
  color: #4ff0ff;
  text-decoration: none;
  border: solid 4px #888080;
  &:hover {
    background-color: #0087b4;
    color: black;
    transition: 1s;
    text-decoration: none;
    border: solid 4px #000000;
  }
`;
