import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export const Contactar = () => {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[]);
    return(
        <div className="square-container" data-aos="fade-left">
            <section id="contact">
            <h2>Contactar</h2>
            <form>
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="message">Mensaje:</label>
              <textarea id="message" name="message" required></textarea>
              <button type="submit">Enviar mensaje</button>
            </form>
          </section>
        </div>
    );
};