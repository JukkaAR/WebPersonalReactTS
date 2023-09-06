import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navegacion } from "./componentesWeb/navegacion";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"; // Example import

// Lazy-loaded components
const Inicio = lazy(() =>
  import("./componentesWeb/inicio").then((module) => ({
    default: module.Inicio,
  }))
);
const Conocer = lazy(() =>
  import("./componentesWeb/conocer").then((module) => ({
    default: module.Conocer,
  }))
);
const SobreMi = lazy(() =>
  import("./componentesWeb/sobreMi").then((module) => ({
    default: module.SobreMi,
  }))
);
const Proyectos = lazy(() =>
  import("./componentesWeb/proyectos").then((module) => ({
    default: module.Proyectos,
  }))
);
const Contactar = lazy(() =>
  import("./componentesWeb/contactar").then((module) => ({
    default: module.Contactar,
  }))
);
const Tutoriali18n = lazy(() =>
  import("./componentesWeb/tutoriali18n").then((module) => ({
    default: module.Tutoriali18n,
  }))
);

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
            <Suspense fallback={<div>Loading...</div>}>
              <div>
                <Inicio />
                <Conocer />
                <SobreMi />
                <Proyectos />
                <Contactar />
                <div className="spacer" />
              </div>
            </Suspense>
          }
        />

        <Route path="/tutorial" element={<Tutoriali18n />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
