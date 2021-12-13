import styled from "styled-components";

export const SCuerpoVisual = styled.div<{ temaDefault: boolean }>`
  width: 100%;
  height: 250px;
  padding: 20px;
  font-size: italic;
  background-color: ${({ temaDefault }) =>
    temaDefault ? "#3b4bff" : "#1522b3"};
  color: ${({ temaDefault }) => (temaDefault ? "#000000" : "#c2c3d1")};
  margin-top: 10px;
  margin-bottom: 15px;
  transition: 1s;
  border-radius: 10px;

  &:hover {
    background-color: ${({ temaDefault }) =>
      temaDefault ? "#50a2ff" : "#494b58"};
    color: ${({ temaDefault }) => (temaDefault ? "#252525" : "#ffffff")};
    transition: 1.5s;
    border-radius: 15px;
    margin-top: 10px;
    margin-bottom: 15px;
  }
`;

export const Sh3 = styled.h3`
  text-align: center;
  font-family: cursive;
`;

export const STargetaDePresentacion = styled.div`
  padding: 5%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Simg = styled.img<{ pokemonOculto: boolean }>`
  filter: ${({ pokemonOculto }) =>
    pokemonOculto ? "brightness(0%)" : "brightness(100%)"};
  transition: 1s;
  width: 100%;
  height: 80%;
`;
