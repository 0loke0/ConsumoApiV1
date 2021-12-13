import React, { FC } from "react";

import { SBotonPersonalizado } from "./Styled/StyledBoton";
import { IPropsBotonCompo } from "../Interfaces/InterfacePokemon";

const BotonCompo: FC<IPropsBotonCompo> = ({
  nombre,
  tipo,
  funcionAEjecutar,
  logo,
}) => {
  return (
    <>
      <SBotonPersonalizado variant={tipo} onClick={() => funcionAEjecutar()}>
        {nombre}
        {logo && <img src={logo} alt='logo' width='15' height='15' />}
      </SBotonPersonalizado>
    </>
  );
};

export default BotonCompo;
