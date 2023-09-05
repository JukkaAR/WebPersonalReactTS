import { SiGooglehome } from "react-icons/si";
import { SiBookstack } from "react-icons/si";
import { SiGithub } from "react-icons/si";

export const Navegacion = () => {
  return (
    <nav>
      <ul className="horizontal-list fixed-top">
        <li>
          <a href="/"><SiGooglehome/></a>
        </li>
        <li>
          <a href="/tutorial"><SiBookstack/></a>
        </li>
        <li>
          <a href="https://github.com/JukkaAR?tab=repositories" target="_blank"><SiGithub/></a>
        </li>
      </ul>
    </nav>
  );
};
