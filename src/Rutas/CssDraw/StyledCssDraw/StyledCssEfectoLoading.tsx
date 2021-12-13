import styled, { keyframes } from "styled-components";

const negro = " #000000";
const azul = " #000fff";
const verde = "#008000";
const rojo = "#ff0000";

const trasparecia1 = "d0";
const trasparecia2 = "b0";
const trasparecia3 = "90";

const SAnimacionParticula = keyframes`
0%{
    box-shadow: 
    40px 0px 0px 0px ${negro}, 
    60px 0px 0px 0px ${azul},
    80px 0px 0px 0px ${verde}, 
    100px 0px 0px 0px ${rojo};

}
12.5%{
    box-shadow: 
    40px 0px 0px 0px ${negro}, 
    60px 20px 0px 0px ${negro + trasparecia1},
    80px 40px 0px 0px ${negro + trasparecia2}, 
    100px 60px 0px 0px ${negro + trasparecia3};
}
25%{    
    box-shadow: 
    100px 0px 0px 0px ${azul}, 
    100px 20px 0px 0px ${azul + trasparecia1},
    100px 40px 0px 0px ${azul + trasparecia2}, 
    100px 60px 0px 0px ${azul + trasparecia3};

}
37.5%{    
    box-shadow: 
    100px 0px 0px 0px ${verde}, 
    80px 20px 0px 0px ${verde + trasparecia1},
    60px 40px 0px 0px ${verde + trasparecia2}, 
    40px 60px 0px 0px ${verde + trasparecia3};

}
50%{    
    box-shadow: 
    100px 60px 0px 0px ${rojo}, 
    80px 60px 0px 0px ${rojo + trasparecia1},
    60px 60px 0px 0px ${rojo + trasparecia2}, 
    40px 60px 0px 0px ${rojo + trasparecia3};  

}
  
`;
export const SContenedorGeneralEfecto = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 10%;
  left: 5%;
  transform: scale(3);
`;

export const SParticula = styled.div`
  position: absolute;
  height: 20%;
  width: 20%;
  top: 20%;
  border-radius: 50%;
  box-shadow: 40px 0px 0px 0px ${negro}, 60px 0px 0px 0px ${azul},
    80px 0px 0px 0px ${verde}, 100px 0px 0px 0px ${rojo};
  animation-name: ${SAnimacionParticula};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;
