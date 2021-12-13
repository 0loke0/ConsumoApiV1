import React, { useEffect, useState } from "react";

import { IPokemonDetallado } from "../../../Interfaces/InterfacePokemon";

import BotonCompo from "../../../Componente/BotonCompo";

import { obtenerPokemonPorId } from "../../../Servicios/ServicioPokemonDetalladoUnitario";
import { cambiarPrimeraMayuscula } from "../../../Utilidades/Utilidades";

import {
  SCuerpoVisual,
  Sh3,
  Simg,
  STargetaDePresentacion,
} from "./StyledsDesplegable/StylePreguntaPokemon";

const TargetaDePresentacion = () => {
  const [tema, setTema] = useState(true);
  const [detallePokemon, setDetallePokemon] = useState<IPokemonDetallado>();
  const [identificadorAleatorio, setIdentificadorAleatorio] = useState(1);
  const [pokemonOculto, setPokemonOculto] = useState(true);

  useEffect(() => {
    consultarPokemones(identificadorAleatorio);
    setPokemonOculto(true);
  }, [identificadorAleatorio]);

  const consultarPokemones = (identificador: number) => {
    obtenerPokemonPorId(identificador).then((data) => setDetallePokemon(data));
  };

  //se encuentra en el consumo del api un hueco desde el id 898 al 10001, hueco de 9102 ids 1118
  const generarIdentificadorPokemonAleatorio = () => {
    let generadorRandom = () => Math.floor(Math.random() * (1119 - 1)) + 1;
    const random = generadorRandom();
    random > 898
      ? setIdentificadorAleatorio(random + 9102) //9102 completa la diferencia en el hueco para el uso de la api
      : setIdentificadorAleatorio(random);
  };

  const mostrarPokemon = () => {
    setPokemonOculto(!pokemonOculto);
  };

  const cambiarTema = () => {
    setTema(!tema);
  };

  return (
    <STargetaDePresentacion>
      <div>
        <BotonCompo
          nombre='Pokémon Aleatorio'
          tipo='outline-success'
          funcionAEjecutar={generarIdentificadorPokemonAleatorio}
        />
        <BotonCompo
          nombre='Revelar'
          tipo='outline-primary'
          funcionAEjecutar={mostrarPokemon}
        />
        <BotonCompo
          nombre='Tema'
          tipo='outline-dark'
          funcionAEjecutar={cambiarTema}
        />
      </div>

      <SCuerpoVisual temaDefault={tema}>
        <Sh3>
          {pokemonOculto
            ? "¿Quien Es Este Pokémon?"
            : detallePokemon?.nombre &&
              cambiarPrimeraMayuscula(detallePokemon?.nombre)}
        </Sh3>

        <Simg
          pokemonOculto={pokemonOculto}
          src={detallePokemon?.img}
          alt={detallePokemon?.nombre}
        />
      </SCuerpoVisual>
    </STargetaDePresentacion>
  );
};

export default TargetaDePresentacion;
