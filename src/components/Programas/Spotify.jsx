import styled from "styled-components";

const Contenedor = styled.div`
  z-index: 999;
  border: solid 0.5px transparent;
  background-color: black;
  margin: 0;
  height: 100%;
  cursor: default;
  font-family: "Circular";
  /* display: ${(props) => props.visible}; */
`;

const GridPrincipal = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 230px auto 230px;
`;

const ColumnaIzquierda = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: #282828;
  display: grid;
  grid-template-rows: repeat(auto-fill, 40px);
  grid-template-columns: repeat(auto-fill, 100%);
`;

const ColumnaDerecha = styled(ColumnaIzquierda)`
  width: 100%;
  background-color: black;
`;

const Icono = styled.i`
  color: white;
  font-size: 22px;
  margin-left: 5px;
`;

const IconoLabel = styled.i`
  color: #b3b3b3;
  font-size: 22px;
  margin-left: 5px;
  padding-right: 10px;
`;

const Label = styled.div`
  display: grid;
  grid-template-columns: 30px auto;
  font-size: 15px;
  color: #b3b3b3;
`;

const LabelActiva = styled(Label)`
  color: white;
`;

const IconoActivo = styled(Icono)`
  color: white;
`;

const CentraMedio = styled.div`
  display: flex;
  justify-content: left;
  display: flex;
  align-items: center;
  margin-left: 10px;
  transition: 0.5s;
  cursor: pointer;

  &:hover ${IconoLabel} {
    color: white;
    transition: 0.3s;
  }

  &:hover {
    color: white;
  }
`;

const CentraMedioTexto = styled(CentraMedio)`
  color: white;
`;

const CentraMedioTextoSecundario = styled(CentraMedio)`
  color: #b3b3b3;
`;

const CentraMedioActivo = styled(CentraMedio)`
  background-color: #282828;
  border-radius: 5px;
  margin-right: 10px;
`;

const Espacio = styled.div`
  height: 30px;
`;

const BarraHorizontal = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  border-bottom: solid 1px #282828;
`;

const ContenedorIconosVentana = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  text-align: center;
`;

const ContenedorAmigos = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  text-align: center;
`;

const ContenedorContenidoMedio = styled.div`
  width: 100%;
  background: rgb(18, 18, 18);
  background: linear-gradient(
    0deg,
    rgba(18, 18, 18, 1) 0%,
    rgba(0, 101, 169, 1) 100%
  );
`;

/* const Contenedor */

function Spotify() {
  return (
    <Contenedor>
      <GridPrincipal>
        <ColumnaIzquierda>
          <Icono className="fas fa-ellipsis-h"></Icono>
          <CentraMedioActivo>
            <Label>
              <IconoActivo className="fas fa-home"></IconoActivo>
              <CentraMedioTexto>Inicio</CentraMedioTexto>
            </Label>
          </CentraMedioActivo>
          <CentraMedio>
            <Label>
              <IconoLabel className="fas fa-search"></IconoLabel>
              <CentraMedioTextoSecundario>Buscar</CentraMedioTextoSecundario>
            </Label>
          </CentraMedio>
          <CentraMedio>
            <Label>
              <IconoLabel className="fas fa-book"></IconoLabel>
              <CentraMedioTextoSecundario>
                Tu biblioteca
              </CentraMedioTextoSecundario>
            </Label>
          </CentraMedio>
          <Espacio />
          <CentraMedio>
            <Label>
              <IconoLabel className="fas fa-plus-square"></IconoLabel>
              <CentraMedioTextoSecundario>
                Crear lista
              </CentraMedioTextoSecundario>
            </Label>
          </CentraMedio>
          <CentraMedio>
            <Label>
              <IconoLabel className="fas fa-heart"></IconoLabel>
              <CentraMedioTextoSecundario>
                Canciones favoritas
              </CentraMedioTextoSecundario>
            </Label>
          </CentraMedio>
          <BarraHorizontal />
        </ColumnaIzquierda>

        <ContenedorContenidoMedio>
          <h1>hola</h1>
        </ContenedorContenidoMedio>

        <ColumnaDerecha>
          <ContenedorIconosVentana>
            <div></div>
            <div>
              <Icono className="far fa-window-minimize"></Icono>
              <Icono className="far fa-window-maximize"></Icono>
              <Icono className="fas fa-times"></Icono>
            </div>
          </ContenedorIconosVentana>

          <ContenedorAmigos>
            <CentraMedioTexto>Actividad de los amigos</CentraMedioTexto>
          </ContenedorAmigos>
        </ColumnaDerecha>
      </GridPrincipal>
    </Contenedor>
  );
}

export default Spotify;
