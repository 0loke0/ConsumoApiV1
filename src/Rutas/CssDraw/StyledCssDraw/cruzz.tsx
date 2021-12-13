import styled from "styled-components";

const alto = " 160px";
const ancho = " 160px";

const gorra = " #202fff";
const cabello = " #1bff06";
const ojo = " #ff9b06";
const barba = "#910078";
const piel = "#ff0000";
const camisa = "#20ddd4";
const zapatos = "#070707";
const overol = "#d32f2f";
const boton = "#000000";

const CalcularPorcentaje = (pixeles: number) => {
  return `${6.25 * pixeles}%`;
};

const CalcularCordenada = (ejeX: number, ejeY: number) => {
  return `${CalcularPorcentaje(ejeX)} ${CalcularPorcentaje(ejeY)}`;
};

export const SContenedorGeneralCruz = styled.div`
  width: ${ancho};
  height: ${alto};
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -100);
`;

export const SPaloY = styled.div`
  position: absolute;
  width: ${ancho};
  height: ${alto};
  background: ${piel};
  clip-path: polygon(
    ${CalcularCordenada(7, 0)},
    ${CalcularCordenada(9, 0)},
    ${CalcularCordenada(9, 16)},
    ${CalcularCordenada(7, 16)}
  );
`;

export const SPaloX = styled.div`
  position: absolute;
  width: ${ancho};
  height: ${alto};
  background: ${boton};
  clip-path: polygon(
    ${CalcularCordenada(0, 3)},
    ${CalcularCordenada(16, 3)},
    ${CalcularCordenada(16, 5)},
    ${CalcularCordenada(0, 5)}
  );
`;

export const SDosCuadross = styled.div`
  position: absolute;
  width: ${ancho};
  height: ${alto};
  background: ${boton};
  clip-path: polygon(
    ${CalcularCordenada(2, 2)},
    ${CalcularCordenada(1, 2)},
    ${CalcularCordenada(1, 1)},
    ${CalcularCordenada(2, 1)},
    ${CalcularCordenada(2, 15)},
    ${CalcularCordenada(15, 15)},
    ${CalcularCordenada(15, 13)},
    ${CalcularCordenada(13, 13)},
    ${CalcularCordenada(13, 15)}
  );
`;
