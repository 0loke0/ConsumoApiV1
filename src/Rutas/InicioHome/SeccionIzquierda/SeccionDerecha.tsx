import React, { useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import PaginaExterna from "../SeccionDerecha/PaginaExterna";
import TargetaDePresentacion from "../SeccionDerecha/PreguntaPokemon";
import BotonCompo from "../../../Componente/BotonCompo";
import Desplegable from "../../../MultiMedia/FlechaGruesaIzquida.png";

const SeccionDerecha = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <BotonCompo
        logo={Desplegable}
        tipo={"outline-primary"}
        funcionAEjecutar={handleShow}
      />

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"end"}
        className=''>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Bienvenido</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row>
              <TargetaDePresentacion />
            </Row>
            <Row>
              <PaginaExterna />
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default SeccionDerecha;
