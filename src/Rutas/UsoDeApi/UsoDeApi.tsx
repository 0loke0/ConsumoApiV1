import React from "react";
import { useState, useEffect } from "react";
import BotonCompo from "../../Componente/BotonCompo";
import InputComp from "../../Componente/InputComp";
interface IInformacionAlmacen {
  IDAlmacen: string;
  Direccion: string;
  CapacidadActual: string;
  CapacidadGuardadoMaximo: string;
}
const DatosPorDefectoAlmacen = {
  IDAlmacen: "",
  Direccion: "",
  CapacidadActual: "",
  CapacidadGuardadoMaximo: "",
};

interface IFiltrosPokemon {
  Valor: string;
}

const UsoDeApi = () => {
  const [informacionAlmacen, setInformacionAlmacen] = useState<
    IInformacionAlmacen[]
  >([DatosPorDefectoAlmacen]);
  const DATOSPORDEFECTOFILTRO = {
    Valor: "0",
  };
  const [valorModificable, setValorModificable] = useState<IFiltrosPokemon>(
    DATOSPORDEFECTOFILTRO
  );

  useEffect(() => {
    fetch("http://localhost:52480/api/Almacenes")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setInformacionAlmacen(result);
      });
  }, [valorModificable]);

  const asignarValor = (nombrePropiedad: string, valor: string) => {
    console.log("informacion", nombrePropiedad, valor);

    setValorModificable({ ...valorModificable, [nombrePropiedad]: valor });
  };

  const PostAlmacen = () => {
    var url = "http://localhost:52480/api/Almacenes";
    var data = {
      Direccion: "dir123",
      CapacidadActual: "333",
      CapacidadGuardadoMaximo: "666",
    };

    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  };

  const PutAlmacen = () => {
    var url = "http://localhost:52480/api/Almacenes/";
    let id = valorModificable.Valor;
    var data = {
      IDAlmacen: id,
      Direccion: "dir123Modificada",
      CapacidadActual: "333111",
      CapacidadGuardadoMaximo: "666111",
    };

    fetch(url + id, {
      method: "PUT", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  };

  const DeleteAlmacen = () => {
    var url = "http://localhost:52480/api/Almacenes/";
    let id = valorModificable.Valor;
    fetch(url + id, {
      method: "DELETE",
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => console.log(res));
  };

  return (
    <>
      <div>
        {informacionAlmacen.map((producto: IInformacionAlmacen, index) => (
          <div>
            <li key={producto.IDAlmacen + index}>{producto.IDAlmacen}</li>
            <li key={producto.IDAlmacen + index}>{producto.Direccion}</li>
            <li key={producto.IDAlmacen + index}>{producto.CapacidadActual}</li>
            <li key={producto.IDAlmacen + index}>
              {producto.CapacidadGuardadoMaximo}
            </li>
          </div>
        ))}
      </div>
      <BotonCompo
        nombre='Añadir'
        tipo='outline-primary'
        funcionAEjecutar={PostAlmacen}
      />
      <BotonCompo
        nombre='Borrar Dato'
        tipo='outline-primary'
        funcionAEjecutar={DeleteAlmacen}
      />
      <BotonCompo
        nombre='Modificar Dato'
        tipo='outline-primary'
        funcionAEjecutar={PutAlmacen}
      />

      <InputComp
        encabezado='Numero'
        nombrePropiedad='Valor'
        placeholder='Número'
        guardarValoresIntroducidos={asignarValor}
        valorActual={valorModificable.Valor}
      />
    </>
  );
};

export default UsoDeApi;
