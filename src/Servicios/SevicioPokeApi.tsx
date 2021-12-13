import {
  IPokemonResumido,
  IpokemonGeneral,
} from "../Interfaces/InterfacePokemon";

export const obtenerPokemones = async (): Promise<IPokemonResumido[]> => {
  let listaInformacionGeneralPokemon: IpokemonGeneral[] = [];
  await fetch("https://pokeapi.co/api/v2/pokemon?limit=200")
    .then((data) => data.json())
    .then((data) =>
      data.results.forEach((info: { name: string; url: string }) => {
        let infoPokemonGeneral = {
          nombre: info.name,
          urlUnico: info.url,
        };
        listaInformacionGeneralPokemon.push(infoPokemonGeneral);
      })
    );

  return obtenerTodaLaListaDetalladaPokemon(listaInformacionGeneralPokemon);
};

//recorre el array traido desde la appi principal para extraer el link de la sub api
const obtenerTodaLaListaDetalladaPokemon = async (
  listaPokemonBase: IpokemonGeneral[]
) => {
  let listaDetalladaPokemones: IPokemonResumido[] = [];
  for (let i = 0; i < listaPokemonBase.length; i++) {
    const result = await obtenerDetallePokemonUnico(
      listaPokemonBase[i].urlUnico
    );
    listaDetalladaPokemones.push(result);
  }
  return listaDetalladaPokemones;
};

//Funcion para recorrer unitarimanente el subApi utilizando el link y retorna la informaion de de cada pokemon
const obtenerDetallePokemonUnico = async (urlPokemon: string) => {
  const respuestaApi = await fetch(urlPokemon);
  const pokemon = await respuestaApi.json();

  const detallePokemonUnico: IPokemonResumido = {
    id: pokemon.id,
    nombre: pokemon.name,
    habilidadPrincipal: pokemon.abilities[0]?.ability.name,
    habilidadSecundaria: pokemon.abilities[1]?.ability.name,
    tipoPrincipal: pokemon.types[0]?.type.name,
    tipoSecundario: pokemon.types[1]?.type.name,
    movimientos: pokemon.moves.length,
    vida: pokemon.stats[0].base_stat,
    img: pokemon.sprites?.front_default,
  };

  return detallePokemonUnico;
};
