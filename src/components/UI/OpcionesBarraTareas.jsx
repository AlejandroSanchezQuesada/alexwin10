import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

/* Imagenes */
import perfil from "../../assets/img/profile.png";
import chrome from "../../assets/img/chrome.png";
import spotify from "../../assets/img/spotify.png";
import paint from "../../assets/img/paint.png";

const Contenedor = styled.div`
  font-family: "Segoe UI Regular";
  font-size: 13px;
  position: absolute;
  bottom: 50px;
  padding-bottom: 50px;
  left: 0;
  width: 450px;
  height: 550px;
  background-color: #0065a9;
  display: ${(props) => props.visible};
  color: white;
`;

const Columnas = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100%;
`;

const ImagenIcono = styled.img`
  display: flex;
  justify-content: center;
  display: flex;
  align-items: center;
  max-height: 30px;
  max-width: 30px;
  padding: 5px;
  border: solid 1px #00487f;
  background-color: #00487f;
`;

ImagenIcono.defaultProps = {
  src: "",
};

const TextoIcono = styled.span`
  margin-left: 10%;
  user-select: none;
`;

const OpcionesIcono = styled.div`
  width: 95%;
  margin: 2%;
  display: flex;
  justify-content: left;
  display: flex;
  align-items: center;
  border: solid 1px transparent;

  &:hover {
    border: solid 1px #306c99;
    background-color: #00487f;
  }

  &:hover ${ImagenIcono} {
    background-color: #00487f;
  }
`;

const ContenedorOpcionesIconos = styled.div`
  height: 95%;
  margin-top: 5%;
  border-right: solid 1px #196daa;
  display: grid;
  grid-template-columns: repeat(autofill, 100%);
`;

const ContenedorIconos = styled.div`
  display: grid;
  height: 30px;
  grid-template-columns: repeat(autofill, 100%);
`;

const ContenedorOpcionesAbajo = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const ContenedorInput = styled.div`
  margin: 10px;
`;

const InputBuscar = styled.input`
  font-family: "Segoe UI Italic";
  width: 90%;

  &:focus {
    font-family: "Segoe UI Regular";
  }
`;

const ImagenPerfil = styled.img`
  margin-top: 10px;
  text-align: center;
  max-height: 60px;
  max-width: 60px;
  border-radius: 50%;
  cursor: pointer;
`;

ImagenIcono.defaultProps = {
  src: "",
};

const ContenedorOpcionesCarpetas = styled.div`
  text-align: center;
`;

const OpcionesCarpeta = styled(OpcionesIcono)`
  padding: 6px;
  width: 90%;
`;

const ContenedorApagar = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: left;
  display: flex;
  align-items: center;
  margin: 7px;
  padding-left: 5px;
  width: 50px;
  border: solid 1px #306c99;
  background-color: #196daa;
  user-select: none;

  &:hover {
    background-color: #004c85;
  }
`;

function OpcionesBarraTareas(props) {
  const [contenidoIconos, setContenidoIconos] = useState([
    {
      id: 1,
      nombre: "Google Chrome",
      imagen: chrome,
      abrir: abroChrome,
    },
    { id: 2, nombre: "Spotify", imagen: spotify, abrir: abroSpotify },
    { id: 3, nombre: "Paint", imagen: paint, abrir: abroPaint },
  ]);

  const [contenidoCarpetas, setContenidoCarpetas] = useState([
    { id: 1, nombre: "Alex" },
    { id: 2, nombre: "Documentos" },
    { id: 3, nombre: "Imágenes" },
    { id: 4, nombre: "Música" },
    { id: 5, nombre: "Este Equipo" },
  ]);

  function abroSpotify() {
    alert("Sptify");
  }
  function abroChrome() {
    props.abrirChrome();
  }
  function abroPaint() {
    alert("Paint");
  }

  const cargarIconos = contenidoIconos.map((icono) => {
    return (
      <OpcionesIcono key={icono.id} onClick={icono.abrir}>
        <ImagenIcono src={icono.imagen}></ImagenIcono>
        <TextoIcono>{icono.nombre}</TextoIcono>
      </OpcionesIcono>
    );
  });

  const cargarContenidoCarpetas = contenidoCarpetas.map((carpeta) => {
    return (
      <OpcionesCarpeta key={carpeta.id}>
        <TextoIcono>{carpeta.nombre}</TextoIcono>
      </OpcionesCarpeta>
    );
  });

  return (
    <Contenedor visible={props.visible}>
      <Columnas>
        <ContenedorOpcionesIconos>
          <ContenedorIconos>{cargarIconos}</ContenedorIconos>
        </ContenedorOpcionesIconos>

        <ContenedorOpcionesCarpetas>
          <ImagenPerfil src={perfil} alt="imagenPerfil" />
          <ContenedorIconos>{cargarContenidoCarpetas}</ContenedorIconos>
        </ContenedorOpcionesCarpetas>
      </Columnas>
      <ContenedorOpcionesAbajo>
        <ContenedorInput>
          <InputBuscar placeholder="Buscar programas y archivos..."></InputBuscar>
        </ContenedorInput>
        <ContenedorApagar to={"/"}>Apagar</ContenedorApagar>
      </ContenedorOpcionesAbajo>
    </Contenedor>
  );
}

export default OpcionesBarraTareas;
