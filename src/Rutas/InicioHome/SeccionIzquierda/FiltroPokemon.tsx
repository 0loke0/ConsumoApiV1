import React, { useState, FC, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  IFiltrosPokemon,
  IPropsFiltros,
  IBotonesFiltroVisuales,
} from "../../../Interfaces/InterfacePokemon";

import BotonCompo from "../../../Componente/BotonCompo";
import InputComp from "../../../Componente/InputComp";
import ModalHora from "./ModalHora";
import SeccionDerecha from "./SeccionDerecha";

import { Col } from "react-bootstrap";
import {
  SContenedor,
  SdivDerecha,
  SRow,
  SImagenLogo,
  SLink,
} from "./StyledSecciones/StyleFiltroPokemon";

import Logo from "../../../MultiMedia/Logo.png";

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

const DATOSPORDEFECTOBOTONMOSTRARTABLA = {
  estilo: "outline-dark",
  textoInterior: "Cerrar Tabla",
};

const FiltroPokemon: FC<IPropsFiltros> = ({
  filtrarPokemons,
  descargarJson,
  ocultarTablaPokemon,
  tablaPokemonVisible,
}) => {
  const [filtrosPokemon, setFiltrosPokemon] = useState<IFiltrosPokemon>(
    DATOSPORDEFECTOFILTRO
  );
  const [estilosBotonMostrar, setestilosBotonMostrar] =
    useState<IBotonesFiltroVisuales>(DATOSPORDEFECTOBOTONMOSTRARTABLA);

  useEffect(() => {
    setestilosBotonMostrar(
      tablaPokemonVisible
        ? DATOSPORDEFECTOBOTONMOSTRARTABLA
        : {
            estilo: "primary",
            textoInterior: "Mostrar Tabla",
          }
    );
  }, [tablaPokemonVisible]);

  const asignarDatosFiltroPokemon = (
    nombrePropiedad: string,
    valor: string
  ) => {
    setFiltrosPokemon({ ...filtrosPokemon, [nombrePropiedad]: valor });
  };

  const aplicarFiltros = () => {
    let filtrar =
      JSON.stringify(filtrosPokemon) !== JSON.stringify(DATOSPORDEFECTOFILTRO);
    filtrarPokemons(filtrosPokemon, filtrar);
  };

  const limpiarFiltros = () => {
    setFiltrosPokemon(DATOSPORDEFECTOFILTRO);
  };

  return (
    <SContenedor>
      <SImagenLogo src={Logo} alt='LogoPokemon' />
      <SdivDerecha>
        <SeccionDerecha />
      </SdivDerecha>
      <SRow>
        <Col>
          {" "}
          <InputComp
            encabezado='Nombre'
            nombrePropiedad='nombre'
            placeholder='Bulbasaur'
            guardarValoresIntroducidos={asignarDatosFiltroPokemon}
            valorActual={filtrosPokemon.nombre}
          />
        </Col>
        <Col>
          {" "}
          <InputComp
            encabezado='Habilidades'
            nombrePropiedad='habilidades'
            placeholder='Overgrow'
            guardarValoresIntroducidos={asignarDatosFiltroPokemon}
            valorActual={filtrosPokemon.habilidades}
          />
        </Col>
        <Col>
          {" "}
          <InputComp
            encabezado='Movimientos >'
            nombrePropiedad='movimientosMayor'
            placeholder='Número'
            guardarValoresIntroducidos={asignarDatosFiltroPokemon}
            valorActual={filtrosPokemon.movimientosMayor}
          />
        </Col>
        <Col>
          {" "}
          <InputComp
            encabezado='Vida >'
            nombrePropiedad='vidaMayor'
            placeholder='Número'
            guardarValoresIntroducidos={asignarDatosFiltroPokemon}
            valorActual={filtrosPokemon.vidaMayor}
          />
        </Col>
      </SRow>
      <SRow>
        <Col>
          <InputComp
            encabezado='Letra inicial'
            nombrePropiedad='inicial'
            placeholder='A-Z'
            guardarValoresIntroducidos={asignarDatosFiltroPokemon}
            valorActual={filtrosPokemon.inicial}
          />
        </Col>
        <Col>
          {" "}
          <InputComp
            encabezado='Tipo'
            nombrePropiedad='tipo'
            placeholder='Grass'
            guardarValoresIntroducidos={asignarDatosFiltroPokemon}
            valorActual={filtrosPokemon.tipo}
          />
        </Col>
        <Col>
          {" "}
          <InputComp
            encabezado='Movimientos <'
            nombrePropiedad='movimientosMenor'
            placeholder='Número'
            guardarValoresIntroducidos={asignarDatosFiltroPokemon}
            valorActual={filtrosPokemon.movimientosMenor}
          />
        </Col>
        <Col>
          {" "}
          <InputComp
            encabezado='Vida <'
            nombrePropiedad='vidaMenor'
            placeholder='Número'
            guardarValoresIntroducidos={asignarDatosFiltroPokemon}
            valorActual={filtrosPokemon.vidaMenor}
          />
        </Col>
      </SRow>
      <SRow>
        <Col>
          {" "}
          <InputComp
            encabezado='Pokemon ID'
            nombrePropiedad='pokemonId'
            placeholder='Número'
            guardarValoresIntroducidos={asignarDatosFiltroPokemon}
            valorActual={filtrosPokemon.pokemonId}
          />
        </Col>
        <Col> </Col>
        <Col>
          <InputComp
            encabezado='Movimientos'
            nombrePropiedad='movimientos'
            placeholder='Número'
            guardarValoresIntroducidos={asignarDatosFiltroPokemon}
            valorActual={filtrosPokemon.movimientos}
          />
        </Col>
        <Col>
          <InputComp
            encabezado='Vida'
            nombrePropiedad='vida'
            placeholder='Número'
            guardarValoresIntroducidos={asignarDatosFiltroPokemon}
            valorActual={filtrosPokemon.vida}
          />
        </Col>
      </SRow>
      <SRow>
        <Col md='auto'>
          <BotonCompo
            nombre='Buscar'
            tipo='outline-success'
            funcionAEjecutar={aplicarFiltros}
          />
          <BotonCompo
            nombre='Descargar JSON'
            tipo='outline-primary'
            funcionAEjecutar={descargarJson}
          />
          <BotonCompo
            nombre='Limpiar Filtros'
            tipo='outline-danger'
            funcionAEjecutar={limpiarFiltros}
          />
          <BotonCompo
            nombre={estilosBotonMostrar.textoInterior}
            tipo={estilosBotonMostrar.estilo}
            funcionAEjecutar={ocultarTablaPokemon}
          />
        </Col>
        <Col>
          <SdivDerecha>
            <ModalHora />

            <SLink to='/CssDraw'> Css</SLink>
            <SLink to='/ManejoDeContenedores'>Contenedor</SLink>
            <SLink to='/UsoDeApi'> Usar Api </SLink>
          </SdivDerecha>
        </Col>
      </SRow>
    </SContenedor>
  );
};

export default FiltroPokemon;
