import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { useTranslation} from 'react-i18next';

export const Conocer = () => {
  const { t, i18n } = useTranslation();

    useEffect(()=>{
        AOS.init({duration: 300})
        const lng = navigator.language;
        i18n.changeLanguage(lng);
      },[]);
    return(
        <div className="square-container" data-aos="fade-right">
            <section id="knowledge">
            <h2>{t('conocer.titulo')}</h2>
            <p>{t('conocer.subtitulo')}</p>
            <ul>
              <li>- C# + XAML</li>
              <li>- Java</li>
              <li>- MySQL</li>
              <li>- MongoDB</li>
              <li>- Python</li>
              <li>- {t('conocer.aad')}</li>
              <li>- .NET, .NET Core, .NET Framework</li>
              <li>- HTML, CSS, JavaScript</li>
              <li>- {t('conocer.web')}</li>
            </ul>
            </section>
        </div>
    );
};