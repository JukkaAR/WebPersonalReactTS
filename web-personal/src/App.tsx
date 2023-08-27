import { useEffect } from "react";
import "./App.css";
import { Conocer } from "./componentesWeb/conocer";
import { Inicio } from "./componentesWeb/inicio";
import { Navegacion } from "./componentesWeb/navegacion";
import { Proyectos } from "./componentesWeb/proyectos";
import { SobreMi } from "./componentesWeb/sobreMi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Contactar } from "./componentesWeb/contactar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  useEffect(()=>{
    AOS.init({duration: 500})
  },[]);

  return (
    <>
        <header>
          <Navegacion/>
        </header>
        <Inicio/>
        <div className="spacer"/>
        <Conocer/>
        <SobreMi/>
        <Proyectos/>
        <Contactar/>
        <ToastContainer />

    </>
  );
}

export default App;
