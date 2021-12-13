import styled, { css, keyframes } from "styled-components";

const SmoverCuadro = keyframes`
0% {  margin-left: 10%; }
 100% {  margin-left: 80%; }
`;

export const STablaSinInformacion = styled.div`
  text-align: center;
  font-size: 2em;
`;

export const SImagenTablaSinInfromacion = styled.img`
  text-align: center;
  max-width: 20%;
  height: auto;
  margin: 30px;
`;

const STextoEnTablaGeneral = css`
  text-align: center;
  font-family: Verdana;
`;

export const STituloDeTabla = styled.th`
  ${STextoEnTablaGeneral}
  text-shadow: 0px 0px 3px rgba(0,0,0,0.69);
`;

export const SContenidoTabla = styled.td`
  ${STextoEnTablaGeneral}
  top: 10%;
  left: 50%;
  margin: auto;
`;

export const SCuerpoVisual = styled.div<{ tablaPokemonVisible: boolean }>`
  width: 100%;
  height: ${({ tablaPokemonVisible }) => (tablaPokemonVisible ? "50em" : "0")};
  text-align: center;
  transition: 2s;
  overflow: hidden;
`;

export const SBotonDePrueba = styled.button`
  position: absolute;
  height: 10%;
  width: 10%;
  margin-top: 10%;
  margin-left: 80%;
`;
