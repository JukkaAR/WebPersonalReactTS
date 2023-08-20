import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          inicio:{
            soy:"I am",
            programador:"a developer",
            chileno:"from Chile",
            joven:"young",
            finlandes:"from Finland"
          },
          conocer:{
            titulo:"Knowledge",
            subtitulo:"I have studied Multiplatform Application Development (DAM), but specifying more, I know about the following programming languages:",
            aad:"Android app development (Android Studio)",
            web:"React + Vite, TypeScript (this website)"
          },
          proyectos:{
            titulo:"Projects",
            subtitulo:"Make sure to take a look at my projects in GitHub:",
            pfg:"Final degree project",
            pwp:"Personal Webpage project"
          },
          sobre_mi:{
            titulo:"About me",
            descripcion1:"I'm 23 years old, I am both finnish and chilean although I currently live in Valencia.",
            descripcion2:"I love working in team enviroments and also individually.",
            descripcion3:"I'm searching for a job on the software development field and also if possible I want to keep learning other stuff, such as data analysis, IoT, cibersecurity, etc.",
            descripcion4:"I highly value sincerity and respect, both are fundamental to have an efficient and proactive team."
          },
          contactar:{
            titulo:"Contact"
          }
        },
      },
      es: {
        translation: {
          inicio:{
            soy:"Soy",
            programador:"programador",
            chileno:"chileno",
            joven:"joven",
            finlandes:"finlandés"
          },
          conocer:{
            titulo:"Conocimientos",
            subtitulo:"He cursado Desarrollo de aplicaciones multiplataforma (DAM), pero especificando más, conozco los siguientes lenguajes de programación:",
            aad:"Desarrollo de aplicaciones Android (Android Studio)",
            web:"React + Vite, TypeScript (esta web)"
          },
          proyectos:{
            titulo:"Proyectos",
            subtitulo:"Te invito a echarle un vistazo a mis proyectos en GitHub:",
            pfg:"Proyecto de final de grado",
            pwp:"Proyecto de Web personal"
          },
          sobre_mi:{
            titulo:"Sobre mí",
            descripcion1:"Tengo 23 años, soy finlandés y chileno aunque resido actualmente en Valencia.",
            descripcion2:"Me encanta trabajar tanto en equipo como individualmente.",
            descripcion3:"Busco trabajar en el campo de la programación y si es posible seguir formándome también, ya sea en análisis de datos, IoT, ciberseguridad,etc.",
            descripcion4:"Valoro mucho la sinceridad y el respeto, son los fundamentos para tener un equipo proactivo y eficiente."
          },
          contactar:{
            titulo:"Contactar"
          }
        },
      },
    },
  });

export default i18n;
