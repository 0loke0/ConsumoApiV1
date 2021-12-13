import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { ITablaPokemon } from "../../../Interfaces/InterfacePokemon";
import { cambiarPrimeraMayuscula } from "../../../Utilidades/Utilidades";

import BotonCompo from "../../../Componente/BotonCompo";
import iconocasa from "../../../MultiMedia/casa.png";
import flechaAtras from "../../../MultiMedia/FlechaIzquierda.png";
import flechaSiguiente from "../../../MultiMedia/FlechaDerecha.png";
import SinInformacion from "../../../MultiMedia/SinInformacion.png";

import {
  STituloDeTabla,
  SContenidoTabla,
  SImagenTablaSinInfromacion,
  STablaSinInformacion,
  SCuerpoVisual,
  SBotonDePrueba,
} from "./StyledSecciones/StyleTablaPokemon";

const LIMITEPORPAGINA = 5;
const PAGINACIONDEFAULT = {
  inicioPagina: 0,
  finPagina: LIMITEPORPAGINA,
  ubicacionEnPagina: "",
};

const TablaPokemon: FC<ITablaPokemon> = ({
  pokemones,
  tablaPokemonVisible,
}) => {
  const [paginacion, setPaginacion] = useState(PAGINACIONDEFAULT);

  useEffect(() => {
    regresarInicio();
  }, [pokemones]);

  const retroceder = () => {
    if (paginacion.inicioPagina > 0) {
      setPaginacion({
        ...paginacion,
        inicioPagina: paginacion.inicioPagina - LIMITEPORPAGINA,
        finPagina: paginacion.finPagina - LIMITEPORPAGINA,
        ubicacionEnPagina: "entremedio",
      });
    } else {
      setPaginacion({
        ...paginacion,
        ubicacionEnPagina: "inicio",
      });
    }
  };

  const avanzar = () => {
    if (paginacion.finPagina < pokemones.length) {
      setPaginacion({
        ...paginacion,
        inicioPagina: paginacion.inicioPagina + LIMITEPORPAGINA,
        finPagina: paginacion.finPagina + LIMITEPORPAGINA,
        ubicacionEnPagina: "entremedio",
      });
    } else {
      setPaginacion({
        ...paginacion,
        ubicacionEnPagina: "final",
      });
    }
  };

  const regresarInicio = () => {
    setPaginacion(PAGINACIONDEFAULT);
  };
  return (
    <SCuerpoVisual tablaPokemonVisible={tablaPokemonVisible}>
      <SBotonDePrueba />
      {pokemones.length > 0 ? (
        <div className='mb-5'>
          <Table striped bordered hover variant='light' className='mt-5'>
            <thead>
              <tr>
                <STituloDeTabla>#</STituloDeTabla>
                <STituloDeTabla>Numero Pokemon</STituloDeTabla>
                <STituloDeTabla>Nombre</STituloDeTabla>
                <STituloDeTabla>Habilidades</STituloDeTabla>
                <STituloDeTabla>Tipo</STituloDeTabla>
                <STituloDeTabla>Movimientos</STituloDeTabla>
                <STituloDeTabla>Vida base</STituloDeTabla>
              </tr>
            </thead>

            <tbody>
              {pokemones.map((info, index) => {
                if (
                  index >= paginacion.inicioPagina &&
                  index < paginacion.finPagina
                )
                  return (
                    <tr key={info.nombre}>
                      <SContenidoTabla className='text-justify'>
                        <p>{index + 1} </p>
                      </SContenidoTabla>
                      <SContenidoTabla>
                        <Link to={`/InformacionDetalladaPokemon/${info.id}`}>
                          No:0{info.id}
                        </Link>{" "}
                        <img src={info.img} alt={info.nombre} />
                      </SContenidoTabla>
                      <SContenidoTabla>
                        {cambiarPrimeraMayuscula(info.nombre)}
                      </SContenidoTabla>
                      <SContenidoTabla>
                        <li>
                          {cambiarPrimeraMayuscula(info.habilidadPrincipal)}
                        </li>
                        {info.habilidadSecundaria && (
                          <li>
                            {cambiarPrimeraMayuscula(info.habilidadSecundaria)}
                          </li>
                        )}
                      </SContenidoTabla>
                      <SContenidoTabla>
                        <li>{cambiarPrimeraMayuscula(info.tipoPrincipal)}</li>
                        {info.tipoSecundario && (
                          <li>
                            {cambiarPrimeraMayuscula(info.tipoSecundario)}
                          </li>
                        )}
                      </SContenidoTabla>
                      <SContenidoTabla>
                        Total {info.movimientos}
                      </SContenidoTabla>
                      <SContenidoTabla>Hp {info.vida}</SContenidoTabla>
                    </tr>
                  );
              })}
            </tbody>
          </Table>

          <Container>
            <Row className='justify-content-md-center'>
              <Col xs lg='1'>
                <BotonCompo
                  tipo={
                    paginacion.ubicacionEnPagina === "inicio"
                      ? "secondary"
                      : "outline-info"
                  }
                  logo={flechaAtras}
                  funcionAEjecutar={retroceder}></BotonCompo>
              </Col>
              <Col xs lg='1'>
                <BotonCompo
                  tipo={"outline-info"}
                  logo={iconocasa}
                  funcionAEjecutar={regresarInicio}></BotonCompo>{" "}
              </Col>
              <Col xs lg='1'>
                <BotonCompo
                  tipo={
                    paginacion.ubicacionEnPagina === "final"
                      ? "secondary"
                      : "outline-info"
                  }
                  logo={flechaSiguiente}
                  funcionAEjecutar={avanzar}></BotonCompo>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <STablaSinInformacion>
          <SImagenTablaSinInfromacion
            src={SinInformacion}
            alt='No existe información'
          />
          <p>Sin información</p>
        </STablaSinInformacion>
      )}
    </SCuerpoVisual>
  );
};

export default TablaPokemon;
