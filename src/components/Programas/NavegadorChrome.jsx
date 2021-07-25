import { useState } from "react";

import styled from "styled-components";

const Contenedor = styled.div`
  z-index: 999;
  border: solid 2px red;
  background-color: yellow;
  margin: 0;
  height: 100%;
`;

function NavegadorChrome() {
  const [open, setOpen] = useState("block");

  return (
    <Contenedor>
      <h1>hola soy chrome</h1>
    </Contenedor>
  );
}

export default NavegadorChrome;
