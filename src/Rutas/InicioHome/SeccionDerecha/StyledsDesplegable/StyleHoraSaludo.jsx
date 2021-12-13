import styled, { css } from "styled-components";

const StextoGeneral = css`
  font-style: italic;
  text-align: center;
  font-weight: 800;
`;

export const SHora = styled.p`
  ${StextoGeneral}
  font-size: 3em;
  color: #2e30c2d3;
  text-shadow: 2px -3px 2px #1f2072bd; ;
`;

export const SSaludoCondicional = styled.p`
  ${StextoGeneral}
  font-size: 1.5em;
  color: #10128693;
  text-shadow: 2px -2px 3px #7072f3d5;
`;

export const SContenedorRelog = styled.div`
  border: 1px solid rgba(160, 155, 155, 0.39);
  border-radius: 10px;
  box-shadow: 0px 0px 7px rgb(70, 69, 69);
  padding: 10px;
`;
