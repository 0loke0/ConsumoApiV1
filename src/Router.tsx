import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import InicioHome from "./Rutas/InicioHome/InicioHome";
import DetalleDePokemon from "../src/Rutas/PokemonDetallado/DetalleDePokemon";
import CssDraw from "../src/Rutas/CssDraw/CssDraw";
import ManejoDeContenedores from "../src/Rutas/ManejoDeContenedores/ManejoDeContenedores";
import UsoDeApi from "./Rutas/UsoDeApi/UsoDeApi";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <InicioHome />
        </Route>
        <Route path='/InformacionDetalladaPokemon/:identificadorPokemon'>
          <DetalleDePokemon />
        </Route>
        <Route path='/CssDraw'>
          <CssDraw />
        </Route>
        <Route path='/ManejoDeContenedores'>
          <ManejoDeContenedores />
        </Route>
        <Route path='/UsoDeApi'>
          <UsoDeApi />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
