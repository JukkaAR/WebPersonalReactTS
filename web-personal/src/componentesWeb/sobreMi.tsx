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
            Valoro mucho la sinceridad y el respeto, ya que no hay solución a un problema que no queremos reconocer y cuando cooperamos somos mucho más eficientes</p>
          </section>
          
        </div>
    );
};