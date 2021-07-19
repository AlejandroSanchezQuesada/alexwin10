/* Importar librerias */
import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

/* Importar Imagenes */
import imagenFondo from "../assets/img/windowsLock.jpg";
import imagenPerfil from "../assets/img/profile2.png";

const fadeIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
`;

const Contenedor = styled.div`
  font-family: "Segoe UI";
  background-image: url(${imagenFondo});
  background-size: 100vw 100vh;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: repeat(5, minmax(20vh, auto));
  width: 100vw;
  height: 100vh;
`;

const RowFechas = styled.div`
  grid-column-start: auto;
  grid-row-start: 5;
  grid-row-end: 6;
  display: ${({ showFecha }) => (showFecha ? "block" : "none")};
`;

const RowLogin = styled.div`
  grid-column-start: auto;
  grid-row-start: 2;
  grid-row-end: 2;
  grid-column: 2;
  text-align: center;
  display: ${({ showLogin }) => (showLogin ? "block" : "none")};
  animation: ${fadeIn} 1.2s;
`;

const ImagenPerfilDiv = styled.div``;
const EstiloLaHora = styled.span`
  font-size: 10vh;
  color: white;
`;

const EstiloLaFecha = styled.span`
  font-size: 5vh;
  color: white;
`;

const EstiloTextoLogin = styled.span`
  font-size: 5vh;
  color: white;
`;

const ButtonLogin = styled.button`
  color: white;
  font-size: 15px;
  margin-top: 2%;
  padding: 2%;
  border: solid 2px white;
  background-color: transparent;
  &:hover {
    box-shadow: 0px 0px 0px 2px #e4e6e8 inset;
  }
`;

function Login() {
  const [fecha, setFecha] = useState(new Date());

  const [showLogin, setShowLogin] = useState(false);
  const [showFecha, setShowFecha] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setFecha(new Date());
    }, 1000);
  }, []);

  const fechaFormateada = () => {
    let dia = "";
    let mes = "";

    switch (fecha.getDay()) {
      case 0:
        dia = "Domingo";
        break;
      case 1:
        dia = "Lunes";
        break;
      case 2:
        dia = "Martes";
        break;
      case 3:
        dia = "Miércoles";
        break;
      case 4:
        dia = "Jueves";
        break;
      case 5:
        dia = "Viernes";
        break;
      case 6:
        dia = "Sábado";
        break;
      default:
        break;
    }

    switch (fecha.getMonth() + 1) {
      case 1:
        mes = "Enero";
        break;
      case 2:
        mes = "Febrero";
        break;
      case 3:
        mes = "Marzo";
        break;
      case 4:
        mes = "Abril";
        break;
      case 5:
        mes = "Mayo";
        break;
      case 6:
        mes = "Junio";
        break;
      case 7:
        mes = "Julio";
        break;
      case 8:
        mes = "Agosto";
        break;
      case 9:
        mes = "Septiembre";
        break;
      case 10:
        mes = "Octubre";
        break;
      case 11:
        mes = "Noviembre";
        break;
      case 12:
        mes = "Diciembre";
        break;

      default:
        break;
    }

    return (
      <span>
        {dia},{fecha.getUTCDate()} {mes}{" "}
      </span>
    );
  };

  const minutos = () => {
    if (10 > fecha.getMinutes()) {
      return 0 + "" + fecha.getMinutes();
    } else {
      return fecha.getMinutes();
    }
  };

  function mostrarElLoginEsconderLaFecha() {
    setShowLogin(true);
    setShowFecha(false);
  }

  return (
    <Contenedor onClick={mostrarElLoginEsconderLaFecha}>
      <RowLogin showLogin={showLogin}>
        <ImagenPerfilDiv>
          <img
            src={imagenPerfil}
            alt="foto perfil"
            style={{ borderRadius: "50%" }}
          />
        </ImagenPerfilDiv>
        <div>
          <EstiloTextoLogin>Alex</EstiloTextoLogin>
        </div>
        <div>
          <ButtonLogin>Iniciar sesión</ButtonLogin>
        </div>
      </RowLogin>

      <RowFechas showFecha={showFecha}>
        <EstiloLaHora>
          {fecha.getHours()} : {minutos()}
        </EstiloLaHora>
        <br />
        <EstiloLaFecha>{fechaFormateada()}</EstiloLaFecha>
      </RowFechas>
    </Contenedor>
  );
}

export default Login;
