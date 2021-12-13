import React from "react";
import Container from "react-bootstrap/Container";
import { Slink } from "../SeccionArriba/StyledSeccionArriba/StyledGrupoDeRutas";

const GrupoDeRutas = () => {
  return (
    <Container>
      <Slink to='/'>Menú</Slink>
    </Container>
  );
};

export default GrupoDeRutas;
