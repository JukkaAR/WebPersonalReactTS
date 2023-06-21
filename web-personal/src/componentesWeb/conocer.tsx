import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export const Conocer = () => {
    useEffect(()=>{
        AOS.init({duration: 300})
      },[]);
    return(
        <div className="square-container" data-aos="fade-right">
            <section id="knowledge">
            <h2>Conocimientos</h2>
            <p>He cursado Desarrollo de aplicaciones multiplataforma &#40;DAM&#41;, pero especificando más, conozco los siguientes lenguajes de programación:</p>
            <ul>
              <li>- C# + XAML</li>
              <li>- Java</li>
              <li>- MySQL</li>
              <li>- MongoDB</li>
              <li>- Python</li>
              <li>- Desarrollo de aplicaciones Android</li>
              <li>- .NET, .NET Core, .NET Framework</li>
              <li>- HTML, CSS, JavaScript</li>
              <li>- React + Vite, TypeScript &#40;esta web&#41;</li>
            </ul>
            </section>
        </div>
    );
};