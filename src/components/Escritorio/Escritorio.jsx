import styled from "styled-components";

import BarraTareas from "../UI/BarraTareas";

/* Imagenes */
import wallpaper from "../../assets/img/mainwallpaper.jpg";

const Contenedor = styled.div`
  background-image: url(${wallpaper});
  background-size: 100vw 100vh;
  width: 100vw;
  height: 100vh;
`;

function Escritorio() {
  return (
    <Contenedor>
      Soy el escritorio
      <BarraTareas></BarraTareas>
    </Contenedor>
  );
}

export default Escritorio;
