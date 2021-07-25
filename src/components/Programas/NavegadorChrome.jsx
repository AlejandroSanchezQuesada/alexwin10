import { useState, useRef } from "react";

import styled from "styled-components";

const Contenedor = styled.div`
  z-index: 999;
  border: solid 0.5px #e4e6e8;
  background-color: #353535;
  margin: 0;
  height: 100%;
  cursor: default;
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

const WebBrowser = styled.div`
  background-color: red;
`;

function NavegadorChrome() {
  const url = useRef("www.google.es");

  function buscar() {
    alert("buscando...");
  }

  return (
    <Contenedor>
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
          <form onSubmit={buscar} action="#">
            <RutaURL placeholder={"www.google.es"} ref={url}></RutaURL>
          </form>
        </InputDiv>
        <BotonesVentana>
          <DivIcono>
            <Iconos className="far fa-window-minimize"></Iconos>
          </DivIcono>
          <DivIcono>
            <Iconos className="far fa-square"></Iconos>
          </DivIcono>
          <DivIconoCerrar>
            <Iconos className="fas fa-times"></Iconos>
          </DivIconoCerrar>
        </BotonesVentana>
      </BarraNavegacion>
      <ContenidoNavegacion>
        <WebBrowser>
          <iframe
            src={"www.google.es"}
            title="W3Schools Free Online Web Tutorials"
          ></iframe>
        </WebBrowser>
      </ContenidoNavegacion>
    </Contenedor>
  );
}

export default NavegadorChrome;
