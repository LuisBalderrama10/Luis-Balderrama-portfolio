import '../About.css';
import PerfilMuralla from '../assets/Fotoperfil.jpg';
import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const About = () => {    

  return (
    <>
    <section className="d-flex align-items-center justify-content-center text-center hero-section" id="about" style={{ minHeight: '100vh' }}>
      <div className="container text-center mt-5">
        <h1>Sobre mí</h1>

        <div className="row align-items-center mt-4">
          <div className="col-12 col-md-6 mb-4">
            <img src={PerfilMuralla} alt="Perfil" className="img-Luis img-fluid " />
          </div>

          <div className="col-12 col-md-6">
            <p>
              Soy un desarrollador web apasionado por crear experiencias digitales claras, modernas y útiles. Me motiva aprender cosas nuevas, asumir retos y trabajar en equipo para transformar ideas en soluciones reales.
              <br /><br />
              Estudié Ingeniería en Sistemas Computacionales con especialidad en software en ITESCA (Cajeme, Sonora), y actualmente busco oportunidades remotas para seguir creciendo como profesional.
              <br /><br />
              Además del desarrollo, soy deportista y fotógrafo por hobbie, lo que me ha enseñado disciplina, paciencia, enfoque y creatividad: valores que llevo también a mis proyectos.
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