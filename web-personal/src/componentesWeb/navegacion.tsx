import { SiGooglehome } from "react-icons/si";
import { SiBookstack } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const Navegacion = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);
  return (
    <nav>
      <ul className="horizontal-list fixed-top">
        <li>
          <a href="/" aria-label={t("nav.home")}><SiGooglehome/></a>
        </li>
        <li>
          <a href="/tutorial" aria-label={t("nav.tutorial")}><SiBookstack/></a>
        </li>
        <li>
          <a href="https://github.com/JukkaAR?tab=repositories" target="_blank" aria-label={t("nav.github")}><SiGithub/></a>
        </li>
      </ul>
    </nav>
  );
};
