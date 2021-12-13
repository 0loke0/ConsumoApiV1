import styled, { keyframes } from "styled-components";

const azul = " #075efc"; //color gota
const madera = " #804000"; //color techo
const blanco = "#ffffff"; //reflejos

const SAnimacionCaida = keyframes`
0% { border-top: 0px solid ${azul};top: 0%; }
 65% { border-top: 200px solid ${azul};top: 50%; }
 100% { border-top: 0px solid ${azul};top: 100%; }
`;

const SAnimacionCasiCaida = keyframes`
0% {  height: 50%;
  width: 50%;}
 50% {  height: 70%;
  width: 80%;
  clip-path: polygon(0% 40%, 100% 40%, 100% 100%, 0% 100%);
  left: 33%;
}
 75% {  height: 50%;
  width: 40%; 
  left: 55%;
  top:20%
  }

  100% {  height: 50%;
  width: 50%;
  }
`;

export const SContenedorGota = styled.div`
  height: 200px;
  width: 200px;
  top: 100%;
  position: absolute;
  transform: translate(0, -150%);
  clip-path: polygon(0% 45%, 120% 45%, 120% 300%, 0% 100%);
`;

export const STecho = styled.div`
  position: absolute;
  height: 5%;
  width: 80%;
  top: 44%;
  left: 33%;
  background: ${madera};
`;

export const SGotaTecho = styled.div`
  position: absolute;
  border-radius: 50%;
  height: 50%;
  width: 50%;
  top: 15%;
  left: 50%;
  background-color: ${azul};
  animation-name: ${SAnimacionCasiCaida};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  clip-path: polygon(0% 60%, 100% 60%, 100% 100%, 0% 100%);
`;

export const SGotaCaida = styled.div`
  position: absolute;
  border-radius: 50%;
  height: 50%;
  width: 50%;
  top: 5%;
  left: 48.5%;
  background-color: ${azul};
  animation-name: ${SAnimacionCaida};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`;

//sin uso
export const SGotaluz = styled.div`
  position: absolute;
  border-radius: 50%;
  height: 10%;
  width: 5%;
  top: 80%;
  left: 60%;
  background-color: ${blanco};
`;
