import styled from "styled-components";

const rojo = " #1900f8"; //rojoluz
const blanco = " #ffffff"; //blanco
const blacoSombra = "#58585a7d"; //blacosombra
const negroPokebola = "#231f20"; //negropokebola
const grisInterno = "#58585a"; //grisInterno

export const SContenedorPokebola = styled.div`
  border-radius: 50%;
  height: 300px;
  width: 300px;
  background: ${rojo};
  margin-top: auto;
  box-shadow: 0 0 0 5px black, 0px 30px 30px gray;
  grid-column: end-line;
  grid-row: end-line;
  overflow: hidden;
  top: 100%;
  left: 100%;
  position: absolute;
  transform: translate(-100%, -100%);
`;

export const SPokebolaBoton = styled.div`
  position: absolute;
  border-radius: 50%;
  height: 19%;
  width: 19%;
  top: 30%;
  left: 51%;
  background: ${blanco};
  border: 3px solid black;
  box-shadow: 0 0 0 6px ${blanco}, 0 0 0 8px ${negroPokebola},
    0 0 0 15px ${grisInterno}, 0 0 0 19px ${negroPokebola};
  clip-path: circle(100% at 50% 50%);
`;

export const SluzDeReflejo = styled.div`
  position: absolute;
  border-radius: 100% 22% 100% 14% / 93% 26% 100% 29%;
  height: 12%;
  width: 12%;
  top: 10%;
  left: 60%;
  background: ${blanco};
`;

export const SLieanGrizCetral = styled.div`
  position: absolute;
  border-radius: 50%;
  height: 200%;
  width: 200%;
  top: 42%;
  left: -30%;
  background: ${blanco};
  box-shadow: 0 0 0 4px ${negroPokebola}, 0 0 0 15px ${grisInterno},
    0 0 0 19px ${negroPokebola};
  clip-path: circle(25% at 40% 4%);
  border-color: 1px solid black;
`;

export const SSombra = styled.div`
  position: absolute;
  border-radius: 50%;
  height: 90%;
  width: 90%;
  top: 0%;
  left: 15%;
  box-shadow: 0 0 0 50px ${blacoSombra};
  clip-path: circle(56% at 39% 56%);
  border-color: 1px solid black;
`;

export const SSombra2 = styled.div`
  position: absolute;
  border-radius: 50%;
  height: 90%;
  width: 90%;
  top: 0%;
  left: 15%;
  box-shadow: 0 0 0 50px ${blacoSombra};
  clip-path: circle(56% at 39% 56%);
  clip-path: circle(56% at 100% 100%);
  border-color: 1px solid black;
`;
