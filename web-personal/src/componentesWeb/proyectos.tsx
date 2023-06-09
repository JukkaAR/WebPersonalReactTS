import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


export const Proyectos = () => {
  useEffect(()=>{
    AOS.init({duration: 500})
  },[]);
    return(
        <div className="square-container" data-aos="fade-right">
            <section id="projects">
            <h2>Proyectos</h2>
            <p>En los siguientes enlaces podrás ver mis proyectos en GitHub:</p>
            <ul>
              <li>
                <h3>
                  <a href="https://github.com/JukkaAR/GestionIncidenciasInformaticas" target="_blank">Proyecto de final de grado</a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="https://github.com/JukkaAR/WebPersonalReactTS" target="_blank">Proyecto de Web Personal</a>
                </h3>
              </li>
            </ul>
          </section>
        </div>
    );
};