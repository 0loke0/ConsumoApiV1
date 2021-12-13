import React, { useEffect, useState } from "react";
import { obtenerPokemonPorId } from "../../Servicios/ServicioPokemonDetalladoUnitario";
import { IPokemonDetallado } from "../../Interfaces/InterfacePokemon";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";

import GrupoDeRutas from "../PokemonDetallado/SeccionArriba/GrupoDeRutas";

import { cambiarPrimeraMayuscula } from "../../Utilidades/Utilidades";
import {
  Sp,
  SCol,
  SContainer,
  SDivCarcasa,
} from "./StyledPokemonDetallado/StyledDetallePokemon";

interface parametro {
  identificadorPokemon: string;
}
const DATOSPORDEFECTOFILTRO = {
  nombre: "",
  habilidades: "",
  movimientosMayor: "",
  vidaMayor: "",
  inicial: "",
  tipo: "",
  movimientosMenor: "",
  vidaMenor: "",
  pokemonId: "",
  movimientos: "",
  vida: "",
};
const DetalleDePokemon = () => {
  const { identificadorPokemon } = useParams<parametro>();
  const [detallePokemon, setDetallePokemon] = useState<IPokemonDetallado>();

  useEffect(() => {
    consultarPokemones(parseInt(identificadorPokemon));
  }, [identificadorPokemon]);

  const consultarPokemones = (identificador: number) => {
    obtenerPokemonPorId(identificador).then((data) => setDetallePokemon(data));
  };

  return (
    <SDivCarcasa>
      <GrupoDeRutas />

      <SContainer>
        <SCol>
          {detallePokemon?.img ? (
            <img
              src={detallePokemon?.img}
              alt={detallePokemon?.nombre}
              width='50%'
              height='50%'
            />
          ) : (
            <Sp>Cargando...</Sp>
          )}
        </SCol>
        <SCol>
          <Sp>No: {detallePokemon?.id}</Sp>{" "}
        </SCol>
        <Row>
          <SCol>
            <Sp>
              Nombre:
              {detallePokemon?.nombre &&
                cambiarPrimeraMayuscula(detallePokemon?.nombre)}
            </Sp>
          </SCol>
          <SCol>
            <Sp>Movimientos: {detallePokemon?.movimientos}</Sp>
          </SCol>
        </Row>
        <Row>
          <SCol>
            <Sp>Vida: {detallePokemon?.vida}</Sp>
          </SCol>
          <SCol>
            <Sp>Peso: {detallePokemon?.peso}</Sp>
          </SCol>
        </Row>
        <Row>
          <SCol>
            <Sp>Ataque: {detallePokemon?.ataque}</Sp>
          </SCol>
          <SCol>
            <Sp>Ataque Especial: {detallePokemon?.ataqueEspecial}</Sp>
          </SCol>
          <SCol>
            <Sp>
              Habilidad Principal:{" "}
              {detallePokemon?.habilidadPrincipal &&
                cambiarPrimeraMayuscula(detallePokemon?.habilidadPrincipal)}
            </Sp>
          </SCol>
        </Row>
        <Row>
          <SCol>
            <Sp>Defensa: {detallePokemon?.defensa}</Sp>
          </SCol>
          <SCol>
            <Sp>Defensa Especial: {detallePokemon?.defensaEspecial}</Sp>
          </SCol>
          <SCol>
            <Sp>
              Habilidad Secundaria:{" "}
              {detallePokemon?.habilidadSecundaria &&
                cambiarPrimeraMayuscula(detallePokemon?.habilidadSecundaria)}
            </Sp>
          </SCol>
        </Row>
        <Row>
          <SCol>
            <Sp>Velocidad: {detallePokemon?.velocidad}</Sp>
          </SCol>
          <SCol>
            <Sp>
              Tipo Principal:{" "}
              {detallePokemon?.tipoPrincipal &&
                cambiarPrimeraMayuscula(detallePokemon?.tipoPrincipal)}
            </Sp>
          </SCol>
          <SCol>
            <Sp>
              Tipo Secundario:{" "}
              {detallePokemon?.tipoSecundario &&
                cambiarPrimeraMayuscula(detallePokemon?.tipoSecundario)}
            </Sp>
          </SCol>
        </Row>
      </SContainer>
    </SDivCarcasa>
  );
};

export default DetalleDePokemon;
