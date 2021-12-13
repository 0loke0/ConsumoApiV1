import React, { useEffect, useState, useRef } from "react";

import {
  IPokemonResumido,
  IFiltrosPokemon,
} from "../../Interfaces/InterfacePokemon";

import { obtenerPokemones } from "../../Servicios/SevicioPokeApi";
import TablaPokemon from "./SeccionIzquierda/TablaPokemon";
import FiltroPokemon from "./SeccionIzquierda/FiltroPokemon";

function App() {
  const [tablaPokemonVisible, setTablaPokemonVisible] = useState(true);
  const listaPokemon = useRef<IPokemonResumido[]>([]);
  const [informePokemon, setInformePokemon] = useState<IPokemonResumido[]>([]);

  useEffect(() => {
    obtenerPokemones().then((data) => (listaPokemon.current = data));
  }, []);

  const filtrarPokemons = (filtro: IFiltrosPokemon, filtrar: boolean) => {
    let listaPokemonCopy = [...listaPokemon.current];
    if (filtrar) {
      if (filtro.nombre !== "") {
        listaPokemonCopy = listaPokemonCopy.filter(
          (pokemon) =>
            pokemon.nombre.toLowerCase() === filtro.nombre.toLowerCase()
        );
      }

      if (filtro.habilidades !== "") {
        listaPokemonCopy = listaPokemonCopy.filter(
          (pokemon) =>
            pokemon.habilidadPrincipal.toLowerCase() ===
              filtro.habilidades.toLowerCase() ||
            pokemon.habilidadSecundaria.toLowerCase() ===
              filtro.habilidades.toLowerCase()
        );
      }

      if (filtro.movimientosMayor !== "") {
        listaPokemonCopy = listaPokemonCopy.filter(
          (pokemon) => pokemon.movimientos > parseInt(filtro.movimientosMayor)
        );
      }

      if (filtro.movimientosMenor !== "") {
        listaPokemonCopy = listaPokemonCopy.filter(
          (pokemon) => pokemon.movimientos < parseInt(filtro.movimientosMenor)
        );
      }

      if (filtro.movimientos !== "") {
        listaPokemonCopy = listaPokemonCopy.filter(
          (pokemon) => pokemon.movimientos === parseInt(filtro.movimientos)
        );
      }

      if (filtro.vidaMayor !== "") {
        listaPokemonCopy = listaPokemonCopy.filter(
          (pokemon) => pokemon.vida > parseInt(filtro.vidaMayor)
        );
      }

      if (filtro.vidaMenor !== "") {
        listaPokemonCopy = listaPokemonCopy.filter(
          (pokemon) => pokemon.vida < parseInt(filtro.vidaMenor)
        );
      }

      if (filtro.vida !== "") {
        listaPokemonCopy = listaPokemonCopy.filter(
          (pokemon) => pokemon.vida === parseInt(filtro.vida)
        );
      }

      if (filtro.inicial !== "") {
        listaPokemonCopy = listaPokemonCopy.filter((pokemon) =>
          pokemon.nombre.startsWith(filtro.inicial)
        );
      }

      if (filtro.tipo !== "") {
        listaPokemonCopy = listaPokemonCopy.filter(
          (pokemon) =>
            pokemon.tipoPrincipal.toLowerCase() === filtro.tipo.toLowerCase() ||
            pokemon.tipoSecundario.toLowerCase() === filtro.tipo.toLowerCase()
        );
      }

      if (filtro.pokemonId !== "") {
        listaPokemonCopy = listaPokemonCopy.filter(
          (pokemon) => pokemon.id === parseInt(filtro.pokemonId)
        );
      }
    }

    setInformePokemon(listaPokemonCopy);
  };

  const descargarJson = () => {
    if (informePokemon.length > 0) {
      var dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(informePokemon));
      var downloadAnchorNode = document.createElement("a");

      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "JSON.json");
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    } else {
      alert("Pokédex: Sin Información Para Descargar");
    }
  };

  const ocultarTablaPokemon = () => {
    setTablaPokemonVisible(!tablaPokemonVisible);
  };

  return (
    <div className='container'>
      <FiltroPokemon
        filtrarPokemons={filtrarPokemons}
        descargarJson={descargarJson}
        ocultarTablaPokemon={ocultarTablaPokemon}
        tablaPokemonVisible={tablaPokemonVisible}
      />

      <TablaPokemon
        pokemones={informePokemon}
        tablaPokemonVisible={tablaPokemonVisible}
      />
    </div>
  );
}

export default App;
