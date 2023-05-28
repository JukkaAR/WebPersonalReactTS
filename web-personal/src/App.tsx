import "./App.css";
import { Conocer } from "./componentesWeb/conocer";
import { Contactar } from "./componentesWeb/contactar";
import { Inicio } from "./componentesWeb/inicio";
import { Proyectos } from "./componentesWeb/proyectos";
import { SobreMi } from "./componentesWeb/sobreMi";

function App() {
  return (
    <>
      <div>
        <header>
          <nav>
            <ul className="horizontal-list fixed-top">
              <li>
                <a href="#home">Inicio</a>
              </li>
              <li>
                <a href="#knowledge">Conocimientos</a>
              </li>
              <li>
                <a href="#about">Sobre mí</a>
              </li>
              <li>
                <a href="#projects">Proyectos</a>
              </li>
              <li>
                <a href="#contact">Contactar</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Inicio></Inicio>
          <SobreMi></SobreMi>
          <Proyectos></Proyectos>
          <Conocer></Conocer>
          <Contactar></Contactar>
        </main>

        <footer>
          <p>&copy; 2023 Jukka Ahola</p>
        </footer>
      </div>
    </>
  );
}

export default App;
