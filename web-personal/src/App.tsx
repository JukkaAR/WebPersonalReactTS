import "./App.css";

function App() {
  return (
    <>
      <div>
        <header>
          <nav>
            <ul className="horizontal-list fixed-top">
              <li>
                <a href="#home">Inicio</a>
              </li>
              <li>
                <a href="#knowledge">Conocimientos</a>
              </li>
              <li>
                <a href="#about">Sobre mí</a>
              </li>
              <li>
                <a href="#projects">Proyectos</a>
              </li>
              <li>
                <a href="#contact">Contactar</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section id="home">
            <h1>Bienvenido a mi Web</h1>
            <p>Mi nombre es Jukka Ahola, he estudiado DAM y busco ser programador</p>
            <div className="image-container">
            <img src="/hombre_programando.gif" alt="Description of the image" />
          </div>
          </section>

          <section id="knowledge">
            <h2>Conocimientos</h2>
            <p>He cursado DAM, pero especificando más, conozco &#40;y espero aprender más&#41;, los siguientes lenguajes de programación:</p>
            <ul>
              <li>- C#</li>
              <li>- Java</li>
              <li>- MySQL</li>
              <li>- Python</li>
              <li>- HTML,CSS,JavaScript</li>
            </ul>
            <p>Tengo el curso de DAM, pero especificando más, conozco los siguientes lenguajes de programación:</p>
          </section>

          <section id="about">
            <h2>Sobre mí</h2>
            <p>Tengo 23 años, soy finlandés y chileno.<br/>
            Me encanta trabajar tanto en equipo como individualmente.<br/> 
            Valoro mucho la sinceridad y el respeto, ya que no hay solución a un problema que no queremos reconocer y cuando cooperamos siempre funcionamos mejor</p>
          </section>

          <section id="projects">
            <h2>Proyectos</h2>
            <p>En los siguientes enlaces podrás ver mis proyectos en GitHub</p>
            <ul>
              <li>
                <h3>
                  <a href="">Proyecto de final de grado</a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="https://github.com/JukkaAR/WebPersonalReactTS">Proyecto de Web Personal</a>
                </h3>
              </li>
            </ul>
          </section>

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
        </main>

        <footer>
          <p>&copy; 2023 Jukka Ahola</p>
        </footer>
      </div>
    </>
  );
}

export default App;
