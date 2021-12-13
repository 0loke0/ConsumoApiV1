import React from "react";
import { Link } from "react-router-dom";
import {
  SArribaDerecha,
  SAbajoIzquierda,
  SContenedorGeneral,
  SCentro,
  SAbajoDerecha,
  SArribaIzquierda,
  SCentroArriba,
  SCentroAbajo,
  SCentroArribaIzquierda,
  SCentroArribaDerecha,
  SCentroArribaCentro,
  SCentroCentro,
  SCentroAbajoDerecha,
  SCentroAbajoIzquierda,
} from "../ManejoDeContenedores/StyledManejoDeContenedores/StyledManejoDeContenedores";
const ManejoDeContenedores = () => {
  return (
    <SContenedorGeneral>
      <Link to='/'>
        <SArribaIzquierda>Arriba Izquierda</SArribaIzquierda>
        <SCentro>
          <SCentroArribaIzquierda>
            Centro Arriba Izquierda
          </SCentroArribaIzquierda>
          <SCentroArribaCentro>Centro Arriba Centro</SCentroArribaCentro>
          <SCentroArribaDerecha>Centro Arriba Derecha</SCentroArribaDerecha>
          <SCentroCentro>Centro Centro</SCentroCentro>
          <SCentroAbajoDerecha>Centro Abajo Derecha</SCentroAbajoDerecha>
          <SCentroAbajoIzquierda>Centro Abajo Izquierda</SCentroAbajoIzquierda>
        </SCentro>
        <SArribaDerecha>Arriba Derecha</SArribaDerecha>
        <SAbajoIzquierda>Abajo Izquierda</SAbajoIzquierda>
        <SAbajoDerecha>Abajo Derecha</SAbajoDerecha>
        <SCentroArriba>Centro Arriba</SCentroArriba>
        <SCentroAbajo>Centro Abajo</SCentroAbajo>
      </Link>
    </SContenedorGeneral>
  );
};

export default ManejoDeContenedores;
