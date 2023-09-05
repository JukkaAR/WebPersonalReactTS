import { useEffect } from "react";
import "./App.css";
import { Navegacion } from "./componentesWeb/navegacion";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Conocer } from "./componentesWeb/conocer";
import { Inicio } from "./componentesWeb/inicio";
import { Proyectos } from "./componentesWeb/proyectos";
import { SobreMi } from "./componentesWeb/sobreMi";
import { Contactar } from "./componentesWeb/contactar";
import { Tutoriali18n } from "./componentesWeb/tutoriali18n";

function App() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <Router>
      <header>
        <Navegacion />
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Inicio />
              <Conocer />
              <SobreMi />
              <Proyectos />
              <Contactar />
              <div className="spacer" />
            </div>
          }
        />

        <Route path="/tutorial" element={<Tutoriali18n />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
