import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { Rnd } from "react-rnd";

import styled from "styled-components";

/* Iconos */
import chrome from "../../assets/img/chrome.png";
import spotify from "../../assets/img/spotify.png";

/* Componentes */
import NavegadorChrome from "../Programas/NavegadorChrome";

const Contenedor = styled.div`
  width: 100vw;
  height: 50px;
  z-index: 9999;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  background-color: #242422;

  display: grid;
  grid-template-rows: 100vw;
  grid-template-columns: 2.5vw repeat(auto-fill, 2.5vw);
`;
const IconoWindows = styled.i`
  color: white;
  height: 50%;
  font-size: 20px;
  margin-top: 15px;
`;

const ContenedorIconoWindows = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;

  &:hover ${IconoWindows} {
    color: rgba(66, 156, 227);
    transition: 0.3s;
  }
  &:hover {
    background-color: #393938;
  }
`;

const ContenedorIconos = styled.div`
  text-align: center;
  width: 100%;
  height: 45px;
  border: solid 2px transparent;
  user-select: none;
  &:hover {
    background-color: #393938;
  }
  &:active {
    border-bottom: solid 2px #83c0ef;
  }
`;

const ImagenIcono = styled.img`
  margin-top: 12px;
  max-height: 20px;
  max-width: 20px;
`;

ImagenIcono.defaultProps = {
  src: "",
};

const DivDragger = styled.div`
  position: absolute;
  top: 0;
  width: "800px";
  height: "400px";
`;

function BarraTareas() {
  const [contenidoIconos, setContenidoIconos] = useState([
    { id: 1, nombre: "Google Chrome", imagen: chrome, abrir: abroChrome },
    { id: 2, nombre: "Spotify", imagen: spotify, abrir: abroSpotify },
  ]);

  const [chromeAbierto, setChromeAbierto] = useState(false);
  const [spotifyAbierto, setSpotifyAbierto] = useState(false);
  const [mostrarChrome, setMostrarChrome] = useState("");

  function abroChrome() {
    setMostrarChrome(
      ReactDOM.createPortal(
        <DivDragger>
          <Rnd
            default={{
              x: 150,
              y: 205,
              width: 500,
              height: 190,
            }}
            minWidth={500}
            minHeight={190}
            bounds="window"
          >
            <NavegadorChrome></NavegadorChrome>
          </Rnd>
        </DivDragger>,
        document.getElementById("navegadorChromePortal")
      )
    );
  }

  function abroSpotify() {
    alert("Spotify");
  }

  const iconos = contenidoIconos.map((icono) => {
    return (
      <ContenedorIconos key={icono.id} onClick={icono.abrir}>
        <ImagenIcono src={icono.imagen} alt={icono.nombre}></ImagenIcono>
      </ContenedorIconos>
    );
  });

  return (
    <Contenedor>
      <ContenedorIconoWindows>
        <IconoWindows className="fab fa-windows"></IconoWindows>
      </ContenedorIconoWindows>

      {iconos}

      {mostrarChrome}
    </Contenedor>
  );
}
export default BarraTareas;
