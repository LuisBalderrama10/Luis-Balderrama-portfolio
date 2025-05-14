import '../About.css';
import PerfilMuralla from '../assets/Perfil.jpg';
import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const About = () => {    

  return (
    <>
    <section className="d-flex align-items-center justify-content-center text-center hero-section" id="about" style={{ minHeight: '100vh' }}>
      <div className="container text-center mt-5">
        <h1>Sobre mí</h1>

        <div className="row align-items-center mt-4">
          <div className="col-12 col-md-6 mb-4">
            <img src={PerfilMuralla} alt="Perfil" className="img-Luis img-fluid rounded-circle" />
          </div>

          <div className="col-12 col-md-6">
            <p>
              Joven desarrollador con ganas de aprender e innovar, en busca de adaptarme a nuevos ambientes,
              enfrentar retos y colaborar en equipo. Apasionado por las tecnologías, diseño web e interacción con el usuario.
              <br /><br />
              Estudié la carrera de Ingeniería en Sistemas Computacionales con especialidad en software en la Universidad ITESCA en Cajeme, Sonora.
              <br /><br />
              Residente en Ciudad Obregón, Sonora. Buscando trabajo en el área de desarrollo web y software de manera remota.
            </p>
          </div>
        </div>

        <h2 className="mt-5">Contáctame</h2>
        <div className="d-flex justify-content-center flex-wrap gap-2 mt-3">
          <button type="button" className="button" onClick={() => window.open("https://www.linkedin.com/in/luisbalderrama", "_blank")}><FaLinkedin style={{ margin: "7px 5px" }} /> LinkedIn</button>
          <button type="button" className="button" onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=ingluisbalderrama@gmail.com", "_blank")}><FaEnvelope style={{ margin: "7px 5px" }} /> Gmail</button>
          <button type="button" className="button" onClick={() => window.open("https://wa.me/5216442362708", "_blank")}><FaWhatsapp style={{ margin: "7px 5px" }} /> WhatsApp</button>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;