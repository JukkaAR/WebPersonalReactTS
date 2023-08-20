import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { useTranslation} from 'react-i18next';

export const Contactar = () => {
  const { t, i18n } = useTranslation();

    useEffect(()=>{
        AOS.init({duration: 500})
        const lng = navigator.language;
        i18n.changeLanguage(lng);
      },[]);
    return(
        <div className="square-container" data-aos="fade-left">
            <section id="contactar">
            <h2>{t('contactar.titulo')}</h2>
            
            <ul>
              <li>
                <h3>
                  <a href="https://www.linkedin.com/in/jukka-aleksi-ahola-rivas-864281280" target="_blank">LinkedIn</a>
                </h3>
              </li>
            </ul>
          </section>
          
        </div>
    );
};