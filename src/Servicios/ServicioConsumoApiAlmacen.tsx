interface IInformacionAlmacen {
  IDAlmacen: string;
  Direccion: string;
  CapacidadActual: string;
  CapacidadGuardadoMaximo: string;
}

export const obtenerAlmacenes = async (): Promise<IInformacionAlmacen> => {
  const respuestaApi = await fetch(`http://localhost:52480/api/Almacenes`);
  const almacen = await respuestaApi.json();
  let infoAlmacenes: IInformacionAlmacen = {
    IDAlmacen: almacen.IDAlmacen,
    Direccion: almacen.Direccion,
    CapacidadActual: almacen.CapacidadActual,
    CapacidadGuardadoMaximo: almacen.CapacidadGuardadoMaximo,
  };

  return infoAlmacenes;
};
