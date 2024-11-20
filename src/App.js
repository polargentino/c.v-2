import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src="/20241119_134303.jpg"
          alt="Mi Foto"
          style={{ width: "200px", borderRadius: "100%" }}
        />
        <h1>Pablo Matías Monsalvo</h1>
        <p style={{ fontSize: "38px" }}>
          Técnico Mecánico Electricista | Instructor de Formación Profesional | Desarrollador Web
        </p>
        <p>
          <strong>Teléfono:</strong> 3424366231 |{" "}
          <strong>Email:</strong> Buscotrabajo87@outlook.com
        </p>
      </header>

      <section>
        <h2>Perfil Profesional</h2>
        <p>
          Tengo 42 años y soy docente de formación profesional. Enseñé electrónica y reparación de
          electrodomésticos, y actualmente diseño páginas web. Este CV está desarrollado con la
          biblioteca React, destacando mi capacidad de aprender nuevas tecnologías para enseñar y
          cuidar mi puesto laboral. Estoy buscando un empleo que me permita alcanzar una calidad de
          vida mínima indispensable. Mi resiliencia, compromiso, y experiencia laboral variada me
          hacen una excelente opción para su empresa.
        </p>
      </section>

      <section>
        <h2>Experiencia Laboral</h2>
        <ul>
          <li>
            <strong>Instructor de Formación Profesional</strong> (2011 - Presente): Enseñanza de
            electrónica y reparación de electrodomésticos.
          </li>
          <li>
            <strong>Electricista Residencial:</strong> Instalación y mantenimiento eléctrico.
          </li>
          <li>
            <strong>Operario de Línea de Producción:</strong> Trabajos en metalúrgicas locales como
            pulidor y operario multitarea.
          </li>
          <li>
            <strong>Servicio Militar y Prefectura:</strong> Formación y tareas relacionadas con la
            seguridad y disciplina.
          </li>
          <li>
            <strong>Técnico Electrónico:</strong>Reparación y mantenimiento de tv y videogames
          </li>
        </ul>
      </section>

      <section>
        <h2>Educación</h2>
        <ul>
          <li>Técnico Mecánico Electricista</li>
          <li>Electricista Residencial e Industrial</li>
          <li>Técnico Electrónico</li>
          <li>Bobinado de Motores</li>
          <li>Instrucción Militar</li>
          <li>Instructor de Formación Profesional</li>
        </ul>
      </section>

      <section>
        <h2>Habilidades Tecnológicas</h2>
        <ul>
          <li>Robótica básica</li>
          <li>HTML, CSS, JavaScript</li>
          <li>React y otras librerías de desarrollo de interfaces</li>
          <li>API y Backend</li>
          <li>Linux</li>
          <li>Control de versiones con Git y GitHub</li>
          <li>Calidad de Software (QA)</li>
          <li>Ciberseguridad</li>
        </ul>
      </section>

      <section>
        <h2>Por qué debería elegirme</h2>
        <p>
          Mi capacidad de adaptación, aprendizaje y reinvención me convierten en una opción sólida
          para cualquier empresa. Estoy comprometido a ofrecer la mejor versión de mí mismo,
          trabajando en equipo y resolviendo problemas con eficacia.
        </p>
      </section>

      <footer style={{ textAlign: "center", marginTop: "20px" }}>
        <p>Desarrollado con React</p>
      </footer>
    </div>
  );
}

export default App;

