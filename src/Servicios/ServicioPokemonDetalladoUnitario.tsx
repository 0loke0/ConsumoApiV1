import { IPokemonDetallado } from "../Interfaces/InterfacePokemon";
export const obtenerPokemonPorId = async (
  identificador: number
): Promise<IPokemonDetallado> => {
  const respuestaApi = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${identificador}`
  );
  const pokemon = await respuestaApi.json();
  const detallePokemonUnico: IPokemonDetallado = {
    id: pokemon.id,
    nombre: pokemon.name,
    habilidadPrincipal: pokemon.abilities[0]?.ability.name,
    habilidadSecundaria: pokemon.abilities[1]?.ability.name,
    tipoPrincipal: pokemon.types[0]?.type.name,
    tipoSecundario: pokemon.types[1]?.type.name,
    movimientos: pokemon.moves.length,
    img: pokemon.sprites?.front_default,
    vida: pokemon.stats[0]?.base_stat,
    ataque: pokemon.stats[1]?.base_stat,
    defensa: pokemon.stats[2]?.base_stat,
    ataqueEspecial: pokemon.stats[3]?.base_stat,
    defensaEspecial: pokemon.stats[4]?.base_stat,
    velocidad: pokemon.stats[4]?.base_stat,
    peso: pokemon.weight,
  };

  return detallePokemonUnico;
};
