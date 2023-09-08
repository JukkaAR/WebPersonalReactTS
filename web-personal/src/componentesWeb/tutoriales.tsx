import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Tutoriali18n } from "./tutoriales/tutoriali18n";
import { Helmet } from 'react-helmet';


export const Tutoriales = () => {
  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);
  return (
    <>
      <div className="spacer" />
      <div>
        <Helmet>
          <link rel="preconnect" href="https://jukka-ahola.netlify.app/" />
        </Helmet>
        <Tutoriali18n />
      </div>
    </>
  );
};
