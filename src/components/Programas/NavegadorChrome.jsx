import { useState, useRef } from "react";
import Iframe from "react-iframe";

import styled from "styled-components";

const Contenedor = styled.div`
  z-index: 999;
  border: solid 0.5px #e4e6e8;
  background-color: #353535;
  margin: 0;
  height: 100%;
  cursor: default;
  display: ${(props) => props.visible};
`;

const BarraNavegacion = styled.div`
  background-color: #f3f3f3;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 10vw auto 10vw;
`;

const Botones = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  text-align: center;
`;

const InputDiv = styled.div`
  text-align: center;
  margin-right: 15px;
`;

const BotonesRefresco = styled(Botones)`
  text-align: center;
`;

const BotonesVentana = styled(Botones)`
  grid-template-columns: 33% 33% 33%;
  text-align: right;
`;

const Iconos = styled.i`
  margin: 5px;
  /*  &:hover {
    background-color: red;
     background-color: #c7cacc; 
  } */
`;

const DivIcono = styled.div`
  display: flex;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: #c7cacc;
  }
`;

const DivIconoCerrar = styled(DivIcono)`
  &:hover {
    background-color: red;
    color: white;
  }
`;

const RutaURL = styled.input`
  width: 100%;
  margin: 5px;
`;

const ContenidoNavegacion = styled.div`
  width: 100%;
  height: 95%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
`;

const WebBrowser = styled.div``;

function NavegadorChrome(props) {
  const [url, setUrl] = useState("www.google.es");
  const [showNavegador, setShowNavegador] = useState(props.visible);

  function buscar(event) {
    if (event.key === "Enter") {
      console.log(event.target.value);
      setUrl(event.target.value);
    }
  }

  function minimizar() {
    document.getElementById("navegadorChromePortal").style.display = "none";
  }

  function maximizar() {}

  function cerrar() {
    document.getElementById("navegadorChromePortal").style.display = "none";

    setUrl("https://www.google.es");

    document.getElementById("rutaInput").value = url;
  }

  return (
    <Contenedor visible={showNavegador}>
      <BarraNavegacion>
        <BotonesRefresco>
          <DivIcono>
            <Iconos className="fas fa-arrow-left"></Iconos>
          </DivIcono>
          <DivIcono>
            <Iconos className="fas fa-arrow-right"></Iconos>
          </DivIcono>
          <DivIcono>
            <Iconos className="fas fa-redo"></Iconos>
          </DivIcono>
        </BotonesRefresco>
        <InputDiv>
          <RutaURL
            onKeyPress={buscar}
            placeholder={url}
            id="rutaInput"
          ></RutaURL>
        </InputDiv>
        <BotonesVentana>
          <DivIcono onClick={minimizar}>
            <Iconos className="far fa-window-minimize"></Iconos>
          </DivIcono>
          <DivIcono onClick={maximizar}>
            <Iconos className="far fa-square"></Iconos>
          </DivIcono>
          <DivIconoCerrar onClick={cerrar}>
            <Iconos className="fas fa-times"></Iconos>
          </DivIconoCerrar>
        </BotonesVentana>
      </BarraNavegacion>
      <ContenidoNavegacion>
        <WebBrowser>
          <Iframe
            url={url}
            width="100%"
            height="100%"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation"
          />
        </WebBrowser>
      </ContenidoNavegacion>
    </Contenedor>
  );
}

export default NavegadorChrome;
