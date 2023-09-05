import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { useTranslation} from 'react-i18next';
import CodeWindow from './codeWindow';

export const Tutoriali18n = () => {
  const { t, i18n } = useTranslation();

  const code = `npm install i18next react-i18next i18next-browser-languagedetector`;
  
    useEffect(()=>{
        AOS.init({duration: 300})
        const lng = navigator.language;
        i18n.changeLanguage(lng);
      },[]);
    return(
        <>
        <div className='spacer'/>
        <div className="square-container" data-aos="fade-right">
            <section id="knowledge">
            <h2>{t('first_tutorial.title')}</h2>
            <p>{t('first_tutorial.p1')}</p>
            <CodeWindow code={code} />
            </section>
        </div>
        </>
    );
};