import React, { FC } from "react";
import { IPropInputComp } from "../Interfaces/InterfacePokemon";
import { SInputLabelEncabezado } from "./Styled/StyledInput";
import Form from "react-bootstrap/Form";

const InputComp: FC<IPropInputComp> = ({
  encabezado,
  nombrePropiedad,
  placeholder,
  guardarValoresIntroducidos,
  valorActual,
}) => {
  return (
    <>
      <SInputLabelEncabezado>{encabezado}</SInputLabelEncabezado>
      <Form.Control
        id={nombrePropiedad}
        placeholder={placeholder}
        value={valorActual}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          guardarValoresIntroducidos(nombrePropiedad, event.target.value)
        }
      />
    </>
  );
};

export default InputComp;
