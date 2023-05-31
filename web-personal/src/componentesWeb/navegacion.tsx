import { SiGooglehome } from "react-icons/si";
import { SiAboutdotme } from "react-icons/si";
import { SiBookstack } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiMessenger } from "react-icons/si";

export const Navegacion = () => {
  return (
    <nav>
      <ul className="horizontal-list fixed-top">
        <li>
          <a href="#home"><SiGooglehome/></a>
        </li>
        <li>
          <a href="#knowledge"><SiBookstack/></a>
        </li>
        <li>
          <a href="#about"><SiAboutdotme/></a>
        </li>
        <li>
          <a href="#projects"><SiGithub/></a>
        </li>
        <li>
          <a href="#contact"><SiMessenger/></a>
        </li>
      </ul>
    </nav>
  );
};
