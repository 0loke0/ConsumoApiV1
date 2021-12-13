import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import BotonCompo from "../../../Componente/BotonCompo";
import HoraSaludo from "../SeccionDerecha/HoraSaludo";

const ModalHora = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <BotonCompo
        nombre='Hora'
        tipo='outline-info'
        funcionAEjecutar={handleShow}></BotonCompo>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hora</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HoraSaludo />
        </Modal.Body>
        <Modal.Footer>
          <BotonCompo
            nombre='Cerrar'
            tipo='outline-success'
            funcionAEjecutar={handleClose}></BotonCompo>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalHora;
