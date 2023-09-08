import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Tutoriali18n } from "./tutoriales/tutoriali18n";

export const Tutoriales = () => {
  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);
  return (
    <>
      <link rel="preconnect" href="https://jukka-ahola.netlify.app/" />

      <div className="spacer" />
      <div>
        <Tutoriali18n />
      </div>
    </>
  );
};
