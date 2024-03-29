import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { useTranslation} from 'react-i18next';

export const SobreMi = () => {
  const { t, i18n } = useTranslation();

    useEffect(()=>{
        AOS.init({duration: 500})
        const lng = navigator.language;
        i18n.changeLanguage(lng);
      },[]);
    return(
        <div className="square-container" data-aos="fade-left">
            <section id="about">
            <h2>{t('sobre_mi.titulo')}</h2>
            
            <p>{t('sobre_mi.descripcion1')}<br/>
            {t('sobre_mi.descripcion2')}<br/> 
            {t('sobre_mi.descripcion3')}<br/>
            {t('sobre_mi.descripcion4')}</p>
          </section>
          
        </div>
    );
};