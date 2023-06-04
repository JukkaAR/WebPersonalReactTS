import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export const Conocer = () => {
    useEffect(()=>{
        AOS.init({duration: 2000})
      },[]);
    return(
        <div className="square-container" data-aos="fade-right">
            <section id="knowledge">
            <h2>.getConocimientos()</h2>
            <p>He cursado DAM, pero especificando más, conozco &#40;y espero aprender más&#41;, los siguientes lenguajes de programación:</p>
            <ul>
              <li>- C#</li>
              <li>- Java</li>
              <li>- MySQL</li>
              <li>- Python</li>
              <li>- HTML,CSS,JavaScript</li>
            </ul>
            </section>
        </div>
    );
};