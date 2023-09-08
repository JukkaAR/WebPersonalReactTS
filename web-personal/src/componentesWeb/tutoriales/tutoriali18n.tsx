import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { useTranslation} from 'react-i18next';
import CodeWindow from './codeWindow';

export const Tutoriali18n = () => {
  const { t, i18n } = useTranslation();

  const codeInstalli18n = `npm install i18next react-i18next i18next-browser-languagedetector`;
  const i18nFile = `
  import i18n from 'i18next';
  import { initReactI18next } from 'react-i18next';
  
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en: {
          translation: {
            conocer:{
              titulo:"Knowledge",
            }
          },
        },
        es: {
          translation: {
            conocer:{
              titulo:"Conocimientos",
            }
          },
        },
        // Add more languages and translations here
      },
      lng: 'en', // Set the default language
      fallbackLng: 'en', // Fallback language
      interpolation: {
        escapeValue: false // React already escapes by default
      }
    });
  
  export default i18n;
  `;

  const claseEjemplo = `import { useEffect } from "react";
  /*Import from i18n */
  import { useTranslation } from "react-i18next";
  
  export const Example = () => {
      /*First, set variables*/
    const { t, i18n } = useTranslation();
  /*Detect the browser language to adapt to the user's language */
    useEffect(() => {
      const lng = navigator.language;
      i18n.changeLanguage(lng);
    }, []);
    return (
      <div>
          /*Use the t variable and choose the i18n text location*/
        <h1>{t("conocer.titulo")}</h1>
      </div>
    );
  };`;
  const importEnMain = 'import "./i18n";'
    useEffect(()=>{
        AOS.init({duration: 300})
        const lng = navigator.language;
        i18n.changeLanguage(lng);
      },[]);
    return(
        <>
        <div className='spacer'/>
        <div className="square-container" data-aos="fade-right">
            <h2>{t('first_tutorial.title')}</h2>
            <p>{t('first_tutorial.p1')}</p>
            <CodeWindow code={codeInstalli18n} />
            <p>{t('first_tutorial.crearArchivo')}</p>
            <CodeWindow code={i18nFile} />
            <p>{t('first_tutorial.importarEnMain')}</p>
            <CodeWindow code={importEnMain}/>
            <p>{t('first_tutorial.usarEnClase')}</p>
            <CodeWindow code={claseEjemplo}/>
            <p>{t('first_tutorial.finalTutorial')}</p>
        </div>
        </>
    );
};
