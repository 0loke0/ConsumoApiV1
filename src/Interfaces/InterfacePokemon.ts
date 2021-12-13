export interface IpokemonGeneral {
  nombre: string;
  urlUnico: string;
}

export interface IPokemonResumido {
  id: number;
  nombre: string;
  habilidadPrincipal: string;
  habilidadSecundaria: string;
  tipoPrincipal: string;
  tipoSecundario: string;
  movimientos: number;
  vida: number;
  img: string;
}

export interface IPokemonDetallado {
  id: string;
  nombre: string;
  habilidadPrincipal: string;
  habilidadSecundaria: string;
  tipoPrincipal: string;
  tipoSecundario: string;
  movimientos: string;
  img: string;
  vida: string;
  ataque: string;
  defensa: string;
  ataqueEspecial: string;
  defensaEspecial: string;
  velocidad: string;
  peso: string;
}

export interface ITablaPokemon {
  pokemones: IPokemonResumido[];
  tablaPokemonVisible: boolean;
}

export interface IFiltrosPokemon {
  nombre: string;
  habilidades: string;
  movimientosMayor: string;
  vidaMayor: string;
  inicial: string;
  tipo: string;
  movimientosMenor: string;
  vidaMenor: string;
  pokemonId: string;
  movimientos: string;
  vida: string;
}

export interface IBotonesFiltroVisuales {
  estilo: string;
  textoInterior: string;
}

export interface IPropsBotonCompo {
  nombre?: string;
  logo?: string;
  tipo:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light"
    | "link"
    | "outline-primary"
    | "outline-secondary"
    | "outline-success"
    | "outline-danger"
    | "outline-warning"
    | "outline-info"
    | "outline-dark"
    | "outline-light"
    | any;
  funcionAEjecutar: () => any;
}

export interface IPropsFiltros {
  filtrarPokemons: (filtro: IFiltrosPokemon, filtrar: boolean) => void;
  descargarJson: () => void;
  ocultarTablaPokemon: () => void;
  tablaPokemonVisible: boolean;
}

export interface IPropInputComp {
  encabezado: string;
  nombrePropiedad: string;
  placeholder: string;
  guardarValoresIntroducidos: any;
  valorActual: string;
}
