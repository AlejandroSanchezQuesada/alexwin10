import { useState } from "react";
import ReactDOM from "react-dom";
import { Rnd } from "react-rnd";
import styled from "styled-components";

import BarraTareas from "../UI/BarraTareas";
import NavegadorChrome from "../Programas/NavegadorChrome";

/* Imagenes */
import wallpaper from "../../assets/img/mainwallpaper.jpg";
import chrome from "../../assets/img/chrome.png";
import spotify from "../../assets/img/spotify.png";
import papelera from "../../assets/img/papelera.png";

const Contenedor = styled.div`
  background-image: url(${wallpaper});
  background-size: 100vw 100vh;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(auto-fill, 10vh);
  grid-template-columns: repeat(auto-fill, 5vw);
  font-family: "Segoe UI Regular";
`;

const ContenedorIconos = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const ImagenIcono = styled.img`
  max-width: 50%;
`;

ImagenIcono.defaultProps = {
  src: "",
};

const TituloIcono = styled.span`
  color: white;
  font-size: 12px;
  text-shadow: 1px 1px 1px #000, 3px 3px 5px black;
`;

const GranContenedorIconos = styled.div`
  text-align: center;
  border: solid 1px transparent;
  user-select: none;

  &:hover {
    background-color: #1db4f8;
    border-color: #57c6fa;
  }
`;

const DivDragger = styled.div`
  position: absolute;
  top: 0;
  width: "800px";
  height: "400px";
`;

function Escritorio() {
  const [contenidoIconos, setContenidoIconos] = useState([
    {
      id: 0,
      nombre: "Papelera de reciclaje",
      imagen: papelera,
      abrir: abroPapelera,
    },
    {
      id: 1,
      nombre: "Google Chrome",
      imagen: chrome,
      abrir: abroChromeEscritorio,
    },
    { id: 2, nombre: "Spotify", imagen: spotify, abrir: abroSpotify },
  ]);

  const [mostrarChrome, setMostrarChrome] = useState("");

  function abroChromeEscritorio() {
    console.log("me ejecuto");
    setMostrarChrome(
      ReactDOM.createPortal(
        <DivDragger>
          <Rnd
            default={{
              x: 150,
              y: 50,
              width: "80vw",
              height: "80vh",
            }}
            minWidth={400}
            minHeight={50}
            bounds="window"
          >
            <NavegadorChrome></NavegadorChrome>
          </Rnd>
        </DivDragger>,
        document.getElementById("navegadorChromePortal")
      )
    );
    document.getElementById("navegadorChromePortal").style.display = "block";
  }

  function abroSpotify() {
    alert("Spotify");
  }

  function abroPapelera() {
    alert("Papelera");
  }

  const iconos = contenidoIconos.map((icono) => {
    return (
      <GranContenedorIconos key={icono.id} onClick={icono.abrir}>
        <ContenedorIconos>
          <ImagenIcono src={icono.imagen} alt={icono.nombre}></ImagenIcono>
        </ContenedorIconos>
        <TituloIcono>{icono.nombre}</TituloIcono>
      </GranContenedorIconos>
    );
  });

  return (
    <div>
      <Contenedor>{iconos}</Contenedor>
      <BarraTareas abrirChrome={abroChromeEscritorio}></BarraTareas>
      {mostrarChrome}
    </div>
  );
}

export default Escritorio;
