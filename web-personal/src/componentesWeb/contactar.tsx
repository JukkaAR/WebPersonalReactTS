import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";

export const Contactar = () => {
  const { t, i18n } = useTranslation();
  const phoneNumber = "+34672210777"; // Replace with the desired phone number
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("")}`;
  const emailAddress = "jukka.rivas@gmail.com";

  useEffect(() => {
    AOS.init({ duration: 500 });
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setShowCopiedMessage(true);

    setTimeout(() => {
      setShowCopiedMessage(false);
    }, 2000); // Hide the message after 2 seconds
  };

  return (
    <div className="square-container" data-aos="fade-left">
      <section id="contact">
        <h2>{t("contactar.titulo")}</h2>

        <ul style={{ display: "flex", listStyle: "none", padding: 0, justifyContent: "center" }}>          <li style={{ marginRight: "1rem" }}>
            <a
              href="https://www.linkedin.com/in/jukka-aleksi-ahola-rivas-864281280"
              target="_blank"
            >
              <BsLinkedin size="2rem" />
            </a>
          </li>
          <li>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <BsWhatsapp size="2rem" />
            </a>
          </li>
          <li>
            <a>
            <BiMailSend size="2rem" onClick={handleEmailCopy}/>
            </a>
          </li>
        </ul>
        {showCopiedMessage && <p style ={{display: "flex", listStyle: "none", padding: 0, justifyContent: "center"}}>{t("contactar.alerta")}</p>}

      </section>
    </div>
  );
};
