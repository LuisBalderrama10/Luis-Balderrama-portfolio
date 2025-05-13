import '../About.css';
import PerfilMuralla from "../assets/Perfil.jpg";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";


const NavBar = () => {
    return (
        <section className="d-flex align-items-center justify-content-center text-center hero-section" id="about" style={{ height: "100vh"}}>
            <div>
                <div className="container text-center mt-5">
                    <h1>Sobre mi</h1>
                    <div className="row align-items-center ">
                        <div className="col">
                            <img src={PerfilMuralla} alt="Perfil" className="img-Luis" />
                        </div>  
                        <div className="col">
                            <p>
                            Joven desarrollador con ganas de aprender e innovar, en busca de adaptarme a nuevos ambientes,
                            enfrentar retos y colaborar en equipo. Apasionado por las tecnologías, diseño web e interacción con el usuario.
                            <br />
                            <br />
                            Estudie la carrera de Ingenieria en Sistemas Computacionales con especialidad en software en la Universidad ITESCA en Cajeme, Sonora.
                            <br />
                            <br />
                            Residente en ciudad Obregon, Sonora. Buscando trabajo en el área de desarrollo web y software de manera remota.
                            </p>
                        </div>
                    </div>  
                </div>
                <h2>Contactame</h2>
                <div>
                    <button type="button" className="button" onClick={() => window.open("https://www.linkedin.com/in/luisbalderrama", "_blank")}><FaLinkedin style={{margin: "7px 3px"}}/>Linkedln</button>
                    <button type="button" className="button" onClick={() => window.open("https://github.com/luisbalderrama10", "_blank")}><FaGithub style={{margin: "7px 3px"}}/>GitHub</button>
                    <button type="button" className="button" onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=ingluisbalderrama@gmail.com","_blank")}><FaEnvelope style={{margin: "7px 3px"}}/>Gmail</button>
                    <button type="button" className="button" onClick={() => window.open("https://wa.me/5216442362708", "_blank")}><FaWhatsapp style={{margin: "7px 3px"}}/>Whatsapp</button>
                </div>
            </div>
        </section>
    );
};

export default NavBar;