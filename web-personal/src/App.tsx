import { useEffect } from "react";
import "./App.css";
import { Conocer } from "./componentesWeb/conocer";
import { Contactar } from "./componentesWeb/contactar";
import { Inicio } from "./componentesWeb/inicio";
import { Navegacion } from "./componentesWeb/navegacion";
import { Proyectos } from "./componentesWeb/proyectos";
import { SobreMi } from "./componentesWeb/sobreMi";
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[]);
  return (
    <>
        <header>
          <Navegacion/>
        </header>
        <Inicio/>
        <Conocer/>
        <SobreMi/>
        <Proyectos/>
        <Contactar/>
        <footer>
          <p>&copy; 2023 Jukka Ahola</p>
        </footer>
    </>
  );
}

export default App;
