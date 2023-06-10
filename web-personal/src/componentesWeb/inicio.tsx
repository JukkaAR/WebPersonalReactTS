import React, { useEffect, useState } from "react";

export const Inicio: React.FC = () => {
  //Animación de escritura
  const [text, setText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const texts: string[] = [
    "Jukka Ahola",
    "programador",
    "chileno",
    "joven",
    "finlandés",
  ];
  useEffect(() => {
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
    <section id="home">
      <h1>Bienvenido a mi Web</h1>
      <div className="flex-container">
      <div>
        <h2 className="align-left" style={{ width: "400px" }}>
          Soy {text}
          <span className="cursor" /> {/* Vertical rectangle cursor */}
        </h2>
      </div>
      <img
        src="/hombre_programando.gif"
        alt="Gif Hombre programando"
        className="responsive-image"
      />
      </div>
    </section>
  );
};
