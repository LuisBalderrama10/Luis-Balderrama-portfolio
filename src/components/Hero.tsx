import '../Hero.css';

const Hero = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        aboutSection?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <section className="d-flex align-items-center justify-content-center text-center hero-section" style={ { height: "100vh"}}>
            <div>
                <h1 className="display-6 fw-bold"> Hola, soy el ingeniero </h1>
                <h1 className="display-2 fw-bold"> Luis Balderrama</h1>
                <p className="lead">Desarrollador Junior</p>
                <button className="btn btn-primary mt-3" style={{backgroundColor: "#1ea608", border: "#1ea608"}} onClick={scrollToAbout}> Conoceme!</button>
            </div>
        </section>
    );
};

export default Hero;