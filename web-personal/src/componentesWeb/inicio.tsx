import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

// Inicio.tsx

export const Inicio = () => {
  // Component content here
  const [text, setText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const textKeys: string[] = [
    "inicio.jukka",
    "inicio.programador",
    "inicio.chileno",
    "inicio.joven",
    "inicio.finlandes",
  ];

  const { t, i18n } = useTranslation();
  /*Translation init*/
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const [texts, setTexts] = useState<string[]>([]);

  useEffect(() => {
    const translatedTexts = textKeys.map((key) => t(key));
    setTexts(translatedTexts);
  }, [t]);

  useEffect(() => {
    /*Typing animation*/
    const typingInterval = setInterval(() => {
      const currentText = texts[index];
      typeText(currentText, 0);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000 + texts.length * 400); // Adjust the delay based on text length

    return () => {
      clearInterval(typingInterval);
    };
  }, [index, texts]);

  const typeText = (currentText: string, currentIndex: number) => {
    if (currentIndex < currentText.length) {
      setText(currentText.substring(0, currentIndex + 1));
      setTimeout(() => {
        typeText(currentText, currentIndex + 1);
      }, 100);
    } else {
      setTimeout(() => {
        setText(currentText); // Display the full text
      }, 1000); // Pause interval between texts
    }
  };

  return (
    <section id="home" style={{ marginTop: "2rem" }}>
      <h1>Jukka Aleksi Ahola Rivas</h1>
      <div className="flex-container">
        <div className="box">
          <h2 className="align-left" style={{ width: "400px" }}>
            {t("inicio.soy")} {text}
            <span className="cursor" /> {/* Vertical rectangle cursor */}
          </h2>
        </div>
        <div className="box">
          <img
            className="responsive-image"
            src="/fotoCVFinal.webp"
            alt="Foto personal"
          />
        </div>
      </div>
    </section>
  );
};

export default Inicio;
