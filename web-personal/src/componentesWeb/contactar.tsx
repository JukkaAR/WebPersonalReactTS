export const Contactar = () => {
    return(
        <div>
            <section id="contact">
            <h2>Contáctame</h2>
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