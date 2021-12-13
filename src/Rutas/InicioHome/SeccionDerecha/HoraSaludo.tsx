import React from "react";
import useTiempoActual from "../../../CustomHooks/useTiempoActual";
import {
  SContenedorRelog,
  SHora,
  SSaludoCondicional,
} from "./StyledsDesplegable/StyleHoraSaludo";

const HoraSaludo = () => {
  const { dia, hora } = useTiempoActual();

  return (
    <SContenedorRelog>
      {dia ? (
        <>
          <SHora>{dia}</SHora>
          <SSaludoCondicional>
            {hora >= 12 ? "Buenas Tardes" : "Buenos Días"}
          </SSaludoCondicional>
        </>
      ) : (
        <SSaludoCondicional>Cargando Hora...</SSaludoCondicional>
      )}
    </SContenedorRelog>
  );
};

export default HoraSaludo;
