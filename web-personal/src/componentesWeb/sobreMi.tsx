import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export const SobreMi = () => {
    useEffect(()=>{
        AOS.init({duration: 500})
      },[]);
    return(
        <div className="square-container" data-aos="fade-left">
            <section id="about">
            <h2>Sobre mí</h2>
            
            <p>Tengo 23 años, soy finlandés y chileno aunque resido actualmente en Valencia<br/>
            Me encanta trabajar tanto en equipo como individualmente.<br/> 
            Valoro mucho la sinceridad y el respeto, son los fundamentos para tener un equipo proactivo y eficiente</p>
          </section>
          
        </div>
    );
};