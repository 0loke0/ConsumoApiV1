import styled from "styled-components";

export const SContenedorGeneral = styled.div`
  text-align: center;
  border: 3px solid red;
`;

export const SArribaDerecha = styled.div`
  left: 100%;
  border: 3px solid black;
  width: 200px;
  height: 100px;
  position: absolute;
  transform: translate(-100%, 0);
`;

export const SArribaIzquierda = styled.div`
  left: auto;
  border: 3px solid black;
  width: 200px;
  height: 100px;
  position: absolute;
`;

export const SAbajoIzquierda = styled.div`
  top: 100%;
  border: 3px solid black;
  width: 200px;
  height: 100px;
  position: absolute;
  transform: translate(0, -100%);
`;

export const SAbajoDerecha = styled.div`
  top: 100%;
  left: 100%;
  border: 3px solid black;
  width: 200px;
  height: 100px;
  position: absolute;
  transform: translate(-100%, -100%);
`;

export const SCentroArriba = styled.div`
  left: 50%;
  border: 3px solid black;
  width: 500px;
  height: 100px;
  position: absolute;
  transform: translate(-50%, 0);
`;

export const SCentroAbajo = styled.div`
  left: 50%;
  top: 100%;
  border: 3px solid black;
  width: 500px;
  height: 100px;
  position: absolute;
  transform: translate(-50%, -100%);
`;

export const SCentro = styled.div`
  top: 50%;
  left: 50%;
  border: 3px solid black;
  width: 500px;
  height: 300px;
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const SCentroArribaIzquierda = styled.div`
  left: 10px;
  border: 3px solid red;
  width: 30%;
  height: 70px;
  position: absolute;
  top: 10px;
`;

export const SCentroArribaDerecha = styled.div`
  right: 10px;
  top: 10px;
  border: 3px solid green;
  width: 30%;
  height: 70px;
  position: absolute;
`;

export const SCentroArribaCentro = styled.div`
  left: 50%;
  top: 10px;
  border: 3px solid blue;
  width: 30%;
  height: 70px;
  position: absolute;
  transform: translate(-50%, 0);
`;

export const SCentroCentro = styled.div`
  top: 50%;
  left: 50%;
  border: 3px solid green;
  width: 90%;
  height: 70px;
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const SCentroAbajoDerecha = styled.div`
  top: 100%;
  left: 50%;
  border: 3px solid green;
  width: 50%;
  height: 90px;
  position: absolute;
  transform: translate(0, -100%);
`;

export const SCentroAbajoIzquierda = styled.div`
  top: 100%;
  border: 3px solid orange;
  width: 50%;
  height: 90px;
  position: absolute;
  transform: translate(0, -100%);
`;
