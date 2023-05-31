import "./App.css";
import { Conocer } from "./componentesWeb/conocer";
import { Contactar } from "./componentesWeb/contactar";
import { Inicio } from "./componentesWeb/inicio";
import { Navegacion } from "./componentesWeb/navegacion";
import { Proyectos } from "./componentesWeb/proyectos";
import { SobreMi } from "./componentesWeb/sobreMi";

function App() {
  return (
    <>
        <header>
          <Navegacion></Navegacion>
        </header>
        <Inicio></Inicio>
        <Conocer></Conocer>
        <SobreMi></SobreMi>
        <Proyectos></Proyectos>
        <Contactar></Contactar>
        <footer>
          <p>&copy; 2023 Jukka Ahola</p>
        </footer>
    </>
  );
}

export default App;
