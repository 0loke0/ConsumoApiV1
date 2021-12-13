import styled from "styled-components";

const alto = " 300px";
const ancho = " 300px";

const gorra = " #202fff";
const cabello = " #1bff06";
const ojo = " #ff9b06";
const barba = "#910078";
const piel = "#ef9a9a";
const camisa = "#20ddd4";
const zapatos = "#070707";
const overol = "#d32f2f";
const boton = "#ef9a9a";

const CalcularPorcentaje = (pixeles: number) => {
  return `${6.25 * pixeles}%`;
};

const CalcularCordenada = (ejeX: number, ejeY: number) => {
  return `${CalcularPorcentaje(ejeX)} ${CalcularPorcentaje(ejeY)}`;
};

export const SContenedorGeneralMario = styled.div`
  width: ${ancho};
  height: ${alto};
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const SGorra = styled.div`
  position: absolute;
  width: ${ancho};
  height: ${alto};
  background: ${gorra};
  clip-path: polygon(
    31.21% 0%,
    68.75% 0%,
    68.75% 6.25%,
    87.5% 6.25%,
    87.5% 12.5%,
    25% 12.5%,
    25% 6.25%,
    31.21% 6.25%
  );
`;

export const SCabello = styled.div`
  position: absolute;
  width: ${ancho};
  height: ${alto};
  background: ${cabello};
  clip-path: polygon(
    ${CalcularPorcentaje(4)} ${CalcularPorcentaje(3)},
    ${CalcularPorcentaje(4)} ${CalcularPorcentaje(2)},
    ${CalcularPorcentaje(7)} ${CalcularPorcentaje(2)},
    ${CalcularPorcentaje(7)} ${CalcularPorcentaje(3)},
    ${CalcularPorcentaje(6)} ${CalcularPorcentaje(3)},
    ${CalcularPorcentaje(6)} ${CalcularPorcentaje(4)},
    ${CalcularPorcentaje(7)} ${CalcularPorcentaje(4)},
    ${CalcularPorcentaje(7)} ${CalcularPorcentaje(5)},
    ${CalcularPorcentaje(5)} ${CalcularPorcentaje(5)},
    ${CalcularPorcentaje(5)} ${CalcularPorcentaje(3)},
    ${CalcularPorcentaje(3)} ${CalcularPorcentaje(3)},
    ${CalcularPorcentaje(3)} ${CalcularPorcentaje(6)},
    ${CalcularPorcentaje(5)} ${CalcularPorcentaje(6)},
    ${CalcularPorcentaje(5)} ${CalcularPorcentaje(5)},
    ${CalcularPorcentaje(4)} ${CalcularPorcentaje(5)}
  );
`;

export const SOjo = styled.div`
  position: absolute;
  width: ${ancho};
  height: ${alto};
  background: ${ojo};
  clip-path: polygon(
    ${CalcularPorcentaje(9)} ${CalcularPorcentaje(2)},
    ${CalcularPorcentaje(10)} ${CalcularPorcentaje(2)},
    ${CalcularPorcentaje(10)} ${CalcularPorcentaje(4)},
    ${CalcularPorcentaje(9)} ${CalcularPorcentaje(4)}
  );
`;

export const SBarba = styled.div`
  position: absolute;
  width: ${ancho};
  height: ${alto};
  background: ${barba};
  clip-path: polygon(
    ${CalcularCordenada(10, 4)},
    ${CalcularCordenada(11, 4)},
    ${CalcularCordenada(11, 5)},
    ${CalcularCordenada(13, 5)},
    ${CalcularCordenada(13, 6)},
    ${CalcularCordenada(9, 6)},
    ${CalcularCordenada(9, 5)},
    ${CalcularCordenada(10, 5)}
  );
`;

export const SCara = styled.div`
  position: absolute;
  width: ${ancho};
  height: ${alto};
  background: ${piel};
  clip-path: polygon(
    ${CalcularCordenada(4, 2)},
    ${CalcularCordenada(11, 2)},
    ${CalcularCordenada(11, 3)},
    ${CalcularCordenada(13, 3)},
    ${CalcularCordenada(13, 4)},
    ${CalcularCordenada(14, 4)},
    ${CalcularCordenada(14, 5)},
    ${CalcularCordenada(12, 5)},
    ${CalcularCordenada(12, 7)},
    ${CalcularCordenada(5, 7)},
    ${CalcularCordenada(5, 5)},
    ${CalcularCordenada(4, 5)}
  );
`;

export const SOverol = styled.div`
  position: absolute;
  width: ${ancho};
  height: ${alto};
  background: ${overol};

  clip-path: polygon(
    ${CalcularCordenada(6, 7)},
    ${CalcularCordenada(8, 7)},
    ${CalcularCordenada(8, 8)},
    ${CalcularCordenada(9, 8)},
    ${CalcularCordenada(9, 9)},
    ${CalcularCordenada(11, 9)},
    ${CalcularCordenada(11, 11)},
    ${CalcularCordenada(12, 11)},
    ${CalcularCordenada(12, 14)},
    ${CalcularCordenada(9, 14)},
    ${CalcularCordenada(9, 13)},
    ${CalcularCordenada(6, 13)},
    ${CalcularCordenada(6, 14)},
    ${CalcularCordenada(3, 14)},
    ${CalcularCordenada(3, 13)},
    ${CalcularCordenada(2, 13)},
    ${CalcularCordenada(2, 12)},
    ${CalcularCordenada(3, 12)},
    ${CalcularCordenada(3, 11)},
    ${CalcularCordenada(4, 11)},
    ${CalcularCordenada(4, 10)},
    ${CalcularCordenada(6, 10)}
  );
`;

export const SCamisa = styled.div`
  position: absolute;
  width: ${ancho};
  height: ${alto};
  background: ${camisa};
  clip-path: polygon(
    ${CalcularCordenada(6, 7)},
    ${CalcularCordenada(6, 10)},
    ${CalcularCordenada(4, 10)},
    ${CalcularCordenada(4, 9)},
    ${CalcularCordenada(2, 9)},
    ${CalcularCordenada(2, 7)},
    ${CalcularCordenada(10, 7)},
    ${CalcularCordenada(10, 8)},
    ${CalcularCordenada(12, 8)},
    ${CalcularCordenada(12, 9)},
    ${CalcularCordenada(13, 9)},
    ${CalcularCordenada(13, 10)},
    ${CalcularCordenada(11, 10)},
    ${CalcularCordenada(11, 9)},
    ${CalcularCordenada(9, 9)},
    ${CalcularCordenada(9, 8)},
    ${CalcularCordenada(8, 8)},
    ${CalcularCordenada(8, 7)}
  );
`;

export const SManos = styled.div`
  position: absolute;
  width: ${ancho};
  height: ${alto};
  background: ${piel};
  clip-path: polygon(
    ${CalcularCordenada(2, 8)},
    ${CalcularCordenada(2, 9)},
    ${CalcularCordenada(3, 9)},
    ${CalcularCordenada(3, 10)},
    ${CalcularCordenada(2, 10)},
    ${CalcularCordenada(2, 11)},
    ${CalcularCordenada(0, 11)},
    ${CalcularCordenada(0, 8)},
    ${CalcularCordenada(15, 8)},
    ${CalcularCordenada(15, 10)},
    ${CalcularCordenada(13, 10)},
    ${CalcularCordenada(13, 9)},
    ${CalcularCordenada(12, 9)},
    ${CalcularCordenada(12, 8)}
  );
`;

export const SZapatos = styled.div`
  position: absolute;
  width: ${ancho};
  height: ${alto};
  background: ${zapatos};
  clip-path: polygon(
    ${CalcularCordenada(3, 13)},
    ${CalcularCordenada(3, 14)},
    ${CalcularCordenada(4, 14)},
    ${CalcularCordenada(4, 15)},
    ${CalcularCordenada(5, 15)},
    ${CalcularCordenada(5, 16)},
    ${CalcularCordenada(2, 16)},
    ${CalcularCordenada(2, 15)},
    ${CalcularCordenada(1, 15)},
    ${CalcularCordenada(1, 13)},
    ${CalcularCordenada(12, 13)},
    ${CalcularCordenada(12, 14)},
    ${CalcularCordenada(14, 14)},
    ${CalcularCordenada(14, 10)},
    ${CalcularCordenada(13, 10)},
    ${CalcularCordenada(13, 11)},
    ${CalcularCordenada(12, 11)},
    ${CalcularCordenada(12, 13)}
  );
`;

export const SBoton = styled.div`
  position: absolute;
  width: ${ancho};
  height: ${alto};
  background: ${boton};
  clip-path: polygon(
    ${CalcularCordenada(7, 9)},
    ${CalcularCordenada(8, 9)},
    ${CalcularCordenada(8, 10)},
    ${CalcularCordenada(7, 10)}
  );
`;
