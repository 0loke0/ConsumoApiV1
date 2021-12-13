import styled, { keyframes } from "styled-components";

const claro = "#ffffb9"; //grisInterno
const azulTrasparente = "#2657ca3d"; //grisInterno
const negro = "#000000";

const SCerrarHojo = keyframes`
0% { border-top: 0px solid black; }
 5% { border-top: 290px solid black; }
 10% { border-top: 0px solid black; }
`;

const SMoverOjo = keyframes`
0% {  margin-left: 35%; }
 25% {  margin-left: 56%; }
 50% {  margin-left: 35%; }
 75% {  margin-left: 13%; }
 100% {  margin-left: 35%; }
`;

const SLuzOjo = keyframes`
  0% {  border-radius: 100%  40% 100% 45% / 80% 30% 70% 65%;left: 25%;  }
 25% {  border-radius: 90% 32% 90% 32% / 45% 15% 90% 44%;left: 24%;}
 50% {  border-radius: 60% 20% 60% 10% / 40% 20% 100% 55%;left: 25%; }
 75% {  border-radius: 90% 32% 90% 32% / 45% 15% 90% 44%; left: 26%;}
 100%{  border-radius: 100% 40% 100% 45% / 80% 30% 70% 65%; left: 25%;}
`;

export const SContenedorOjos = styled.div`
  position: relative;

  height: 300px;
  width: 900px;
  top: 50%;
  left: 50%;

  position: absolute;
  transform: scale(0.5) translate(-100%, -100%);
  display: grid;
`;
export const SContenedorOjoDerecho = styled.div`
  position: relative;
  grid-column: 1;
  height: 300px;
  width: 300px;
`;
export const SContenedorOjoIzquierdo = styled.div`
  position: relative;
  grid-column: 2;
  height: 300px;
  width: 300px;
`;

export const SContornoPupila = styled.div`
  position: absolute;
  border-radius: 50% 75% 25% 100% / 50% 100% 25% 75%;
  height: 300px;
  width: 300px;
  background: linear-gradient(135deg, #407279 0%, #0093a1 37%, #ffffff 76%);
  border: 8px solid ${negro};
  transform: rotate(45deg);
  clip-path: circle(55.2% at 40% 40%);
`;

export const SPupila = styled.div`
  position: absolute;
  border-radius: 50%;
  height: 45%;
  width: 30%;
  margin-top: 35%;
  margin-left: 35%;
  background: radial-gradient(circle, #5e78fc 34%, #374677 60%);
  box-shadow: 0 0 0 8px ${negro};
  animation-name: ${SMoverOjo};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`;

export const SluzPupila = styled.div`
  position: absolute;
  border-radius: 100% 32% 100% 45% / 80% 20% 100% 55%;
  height: 20%;
  width: 20%;
  top: 25%;
  left: 25%;
  background-color: ${claro};
  margin: 10px;
  box-shadow: 80px 110px 0 -10px #ffffffca, 10px 13px 0 -7px #ffffffb9;
  animation-name: ${SLuzOjo};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`;

export const SLineaCruceOjo = styled.div`
  position: absolute;
  border-radius: 50%;
  height: 100%;
  width: 200%;
  top: -40%;
  left: -50%;
  background-color: ${azulTrasparente};
  box-shadow: 0 0 0 8px ${negro};
  clip-path: ellipse(20% 50% at 50% 87%);
`;

export const SEsclerotica = styled.div`
  position: absolute;
  border-radius: 50%;
  height: 95%;
  width: 150%;
  top: -10%;
  left: -25%;
  background: linear-gradient(
    180deg,
    #9296b66a 0%,
    #62e2ff6f 38%,
    #ffffff76 100%
  );

  clip-path: ellipse(40% 100% at 48% 22%);
`;

export const SLente = styled.div`
  position: absolute;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  top: 5%;
  left: 20%;
  background: radial-gradient(circle, #5e78fca9 50%, #374677 83%);

  box-shadow: 0 0 0 10px ${negro}, 0 0 0 20px #8b8585, 0 0 0 22px ${negro};
`;

export const SAnimacionCerrarOjo = styled.div`
  position: absolute;
  border-radius: 50%;
  height: 95%;
  width: 150%;
  top: -10%;
  left: -25%;
  box-shadow: 0 0 5px 15px ${negro};
  border-top: 0px solid red;
  animation-name: ${SCerrarHojo};
  animation-duration: 5s;
  animation-iteration-count: infinite;

  clip-path: ellipse(40% 100% at 48% 22%);
`;
