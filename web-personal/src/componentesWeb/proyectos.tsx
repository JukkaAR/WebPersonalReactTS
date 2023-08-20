import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { useTranslation} from 'react-i18next';


export const Proyectos = () => {
  const { t, i18n } = useTranslation();

  useEffect(()=>{
    AOS.init({duration: 500})
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  },[]);
    return(
        <div className="square-container" data-aos="fade-right">
            <section id="projects">
            <h2>{t('proyectos.titulo')}</h2>
            <p style={{ textAlign: 'center' }}>{t('proyectos.subtitulo')}</p>
            <ul>
              <li>
                <h3>
                  <a href="https://github.com/JukkaAR/GestionIncidenciasInformaticas" target="_blank">{t('proyectos.pfg')}</a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="https://github.com/JukkaAR/WebPersonalReactTS" target="_blank">{t('proyectos.pwp')}</a>
                </h3>
              </li>
            </ul>
          </section>
        </div>
    );
};