import { useEffect } from "react";
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
};
