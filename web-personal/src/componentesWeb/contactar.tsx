import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Contactar = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="square-container" data-aos="fade-left">
      <section id="contact">
        <h2>Contactar</h2>
        <form name="contacto" method="POST" data-netlify="true">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </section>
    </div>
  );
};
