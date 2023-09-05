import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { toast } from "react-toastify";

export const Contactar = () => {
  const { t, i18n } = useTranslation();
  const phoneNumber = "+34672210777";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    ""
  )}`;
  const emailAddress = "jukka.rivas@gmail.com";

  useEffect(() => {
    AOS.init({ duration: 500 });
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    toast.info(t("contactar.alerta"), { autoClose: 2000 });
  };

  return (
    <div className="square-container" data-aos="fade-left">
      <section id="contact">
        <h2>{t("contactar.titulo")}</h2>

        <ul
          style={{
            display: "flex",
            listStyle: "none",
            padding: 0,
            justifyContent: "center",
          }}
        >
          <li style={{ marginRight: "1rem" }}>
            <a
              href="https://www.linkedin.com/in/jukka-aleksi-ahola-rivas-864281280"
              target="_blank" aria-label={t("contactar.linkedin")}
            >
              <BsLinkedin size="2rem" />
            </a>
          </li>
          <li>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
            aria-label={t("contactar.whatsapp")}>
              <BsWhatsapp size="2rem" />
            </a>
          </li>
          <li>
            <a>
              <span className="email-icon" onClick={handleEmailCopy}>
                <BiMailSend size="2rem" />
              </span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
