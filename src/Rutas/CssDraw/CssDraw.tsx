import React from "react";
import { Link } from "react-router-dom";
import { AgrupacionGeneral } from "../CssDraw/StyledCssDraw/StyledCssDraw";
import {
  SPanelMario,
  SPanelMarioL1,
  SPanelMarioL2,
  SPanelMarioL3h1,
  SPanelMarioL3h2,
  SPanelMarioL3h3,
  SPanelMarioL3h4,
  SPanelMarioL4h1,
  SPanelMarioL4h2,
  SPanelMarioL4h3,
  SPanelMarioL4h4,
  SPanelMarioL4h5,
  SPanelMarioL4h6,
  SPanelMarioL5h1,
  SPanelMarioL5h2,
  SPanelMarioL5h3,
  SPanelMarioL5h4,
  SPanelMarioL5h5,
  SPanelMarioL5h6,
  SPanelMarioL6h1,
  SPanelMarioL6h2,
  SPanelMarioL6h3,
  SPanelMarioL7h1,
  SPanelMarioL8h1,
  SPanelMarioL8h2,
  SPanelMarioL8h3,
  SPanelMarioL9h1,
  SPanelMarioL9h2,
  SPanelMarioL9h3,
  SPanelMarioL9h4,
  SPanelMarioL9h5,
  SPanelMarioL10h1,
  SPanelMarioL10h2,
  SPanelMarioL10h3,
  SPanelMarioL10h4,
  SPanelMarioL10h5,
  SPanelMarioL10h6,
  SPanelMarioL10h7,
  SPanelMarioL11h1,
  SPanelMarioL11h2,
  SPanelMarioL11h3,
  SPanelMarioL12h1,
  SPanelMarioL12h2,
  SPanelMarioL13h1,
  SPanelMarioL13h2,
  SPanelMarioL14h1,
  SPanelMarioL14h2,
  SPanelMarioL14h3,
  SPanelMarioL14h4,
  SPanelMarioL15h1,
  SPanelMarioL16h1,
  SPanelMarioLineaGeneral,
} from "../CssDraw/StyledCssDraw/StyledCssMario";
import {
  SContenedorPokebola,
  SPokebolaBoton,
  SluzDeReflejo,
  SLieanGrizCetral,
  SSombra,
} from "../CssDraw/StyledCssDraw/styledCssDrawPokebal";
import {
  SContenedorOjos,
  SContenedorOjoDerecho,
  SContenedorOjoIzquierdo,
  SContornoPupila,
  SPupila,
  SluzPupila,
  SLineaCruceOjo,
  SEsclerotica,
  SLente,
  SAnimacionCerrarOjo,
} from "../CssDraw/StyledCssDraw/StyledEye";

import {
  SContenedorGota,
  SGotaCaida,
  SGotaTecho,
  STecho,
} from "../CssDraw/StyledCssDraw/StyledCssDrawGota";

import {
  SContenedorGeneralEfecto,
  SParticula,
} from "./StyledCssDraw/StyledCssEfectoLoading";

import {
  SContenedorGeneralMario,
  SGorra,
  SCabello,
  SOjo,
  SBarba,
  SCara,
  SOverol,
  SCamisa,
  SManos,
  SZapatos,
  SBoton,
} from "./StyledCssDraw/StyledMarioV2";

import {
  SContenedorGeneralCruz,
  SPaloY,
  SPaloX,
  SDosCuadross,
} from "../CssDraw/StyledCssDraw/cruzz";

const CssDraw = () => {
  return (
    <AgrupacionGeneral>
      {/* <SPanelMario>
        <SPanelMarioLineaGeneral>
          <SPanelMarioL1 />
        </SPanelMarioLineaGeneral>
        <SPanelMarioLineaGeneral>
          <SPanelMarioL2 />
        </SPanelMarioLineaGeneral>
        <SPanelMarioLineaGeneral>
          <SPanelMarioL3h1 />
          <SPanelMarioL3h2 />
          <SPanelMarioL3h3 />
          <SPanelMarioL3h4 />
        </SPanelMarioLineaGeneral>
        <SPanelMarioLineaGeneral>
          <SPanelMarioL4h1 />
          <SPanelMarioL4h2 />
          <SPanelMarioL4h3 />
          <SPanelMarioL4h4 />
          <SPanelMarioL4h5 />
          <SPanelMarioL4h6 />
        </SPanelMarioLineaGeneral>
        <SPanelMarioLineaGeneral>
          <SPanelMarioL5h1 />
          <SPanelMarioL5h2 />
          <SPanelMarioL5h3 />
          <SPanelMarioL5h4 />
          <SPanelMarioL5h5 />
          <SPanelMarioL5h6 />
        </SPanelMarioLineaGeneral>
        <SPanelMarioLineaGeneral>
          <SPanelMarioL6h1 />
          <SPanelMarioL6h2 />
          <SPanelMarioL6h3 />
        </SPanelMarioLineaGeneral>
        <SPanelMarioLineaGeneral>
          <SPanelMarioL7h1 />
        </SPanelMarioLineaGeneral>
        <SPanelMarioLineaGeneral>
          <SPanelMarioL8h1 />
          <SPanelMarioL8h2 />
          <SPanelMarioL8h3 />
        </SPanelMarioLineaGeneral>
        <SPanelMarioLineaGeneral>
          <SPanelMarioL9h1 />
          <SPanelMarioL9h2 />
          <SPanelMarioL9h3 />
          <SPanelMarioL9h4 />
          <SPanelMarioL9h5 />
        </SPanelMarioLineaGeneral>
        <SPanelMarioLineaGeneral>
          <SPanelMarioL10h1 />
          <SPanelMarioL10h2 />
          <SPanelMarioL10h3 />
          <SPanelMarioL10h4 />
          <SPanelMarioL10h5 />
          <SPanelMarioL10h6 />
          <SPanelMarioL10h7 />
        </SPanelMarioLineaGeneral>
        <SPanelMarioLineaGeneral>
          <SPanelMarioL11h1 />
          <SPanelMarioL11h2 />
          <SPanelMarioL11h3 />
        </SPanelMarioLineaGeneral>
        <SPanelMarioLineaGeneral>
          <SPanelMarioL12h1 />
          <SPanelMarioL12h2 />
        </SPanelMarioLineaGeneral>
        <SPanelMarioLineaGeneral>
          <SPanelMarioL13h1 />
          <SPanelMarioL13h2 />
        </SPanelMarioLineaGeneral>
        <SPanelMarioLineaGeneral>
          <SPanelMarioL14h1 />
          <SPanelMarioL14h2 />
          <SPanelMarioL14h3 />
          <SPanelMarioL14h4 />
        </SPanelMarioLineaGeneral>
        <SPanelMarioLineaGeneral>
          <SPanelMarioL15h1 />
        </SPanelMarioLineaGeneral>
        <SPanelMarioLineaGeneral>
          <SPanelMarioL16h1 />
        </SPanelMarioLineaGeneral>
      </SPanelMario>
      <SContenedorPokebola>
        <SLieanGrizCetral />
        <SluzDeReflejo />
        <SPokebolaBoton />
        <SSombra />
      </SContenedorPokebola>
      <SContenedorGota>
        <SGotaCaida />
        <SGotaTecho />
        <STecho />
      </SContenedorGota> */}
      <SContenedorOjos>
        <SContenedorOjoDerecho>
          <SEsclerotica />
          <SContornoPupila />
          <SLineaCruceOjo />
          <SPupila />
          <SluzPupila />
          <SAnimacionCerrarOjo />
          <SLente />
        </SContenedorOjoDerecho>
        <SContenedorOjoIzquierdo>
          <SEsclerotica />
          <SContornoPupila />
          <SLineaCruceOjo />
          <SPupila />
          <SluzPupila />
          <SAnimacionCerrarOjo />
        </SContenedorOjoIzquierdo>
      </SContenedorOjos>
      {/* <SContenedorGeneralEfecto>
        <SParticula />
      </SContenedorGeneralEfecto> */}
      {/* <SContenedorGeneralMario>
        <Link to='/'>
          <SGorra />
          <SCara />
          <SCabello />
          <SOjo />
          <SBarba />
          <SOverol />
          <SCamisa />
          <SManos />
          <SZapatos />
          <SBoton />
        </Link>
      </SContenedorGeneralMario> */}
      {/* <SContenedorGeneralCruz>
        <SDosCuadross />
      </SContenedorGeneralCruz> */}
    </AgrupacionGeneral>
  );
};

export default CssDraw;
