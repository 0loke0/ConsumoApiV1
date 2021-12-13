import { useEffect, useState } from "react";
interface ItiempoActual {
  dia: string | null;
  hora: number;
}
const useTiempoActual = () => {
  const [tiempoActual, setTiempoActual] = useState<ItiempoActual>({
    dia: null,
    hora: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      actualizarTiempo();
    }, 1000);
  });

  const actualizarTiempo = () => {
    const tiempo = new Date();
    const fecha =
      tiempo.getDate() +
      "/" +
      (tiempo.getMonth() + 1) +
      "/" +
      tiempo.getFullYear();

    const hora =
      tiempo.getHours() + ":" + tiempo.getMinutes() + ":" + tiempo.getSeconds();

    const fechaMasHora = fecha + " " + hora;

    const horaActual = tiempo.getHours();

    const retornoFechas: ItiempoActual = {
      dia: fechaMasHora,
      hora: horaActual,
    };
    setTiempoActual(retornoFechas);
  };

  return tiempoActual;
};

export default useTiempoActual;
