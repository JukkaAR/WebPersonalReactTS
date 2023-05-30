import React, { useEffect, useState } from 'react';

export const Inicio: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  const texts: string[] = ["programador", "chileno", "joven"];

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentText = texts[index];
      typeText(currentText, 0);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000 + texts.length * 1000); // Adjust the delay based on text length

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
      <h2>
        Soy {text}
        <span className="cursor" /> {/* Vertical rectangle cursor */}
      </h2>
      <img src="/hombre_programando.gif" alt="Description of the image" />
    </section>
  );
};
