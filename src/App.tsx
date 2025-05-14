import './App.css'
import Hero from "./components/Hero";
import About from "./components/About"
import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function App() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowButton(true);  // Cuando se hace scroll hacia abajo, mostramos el botón
    } else {
      setShowButton(false); // Si estamos en la parte superior de la página, lo ocultamos
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);  // Escuchamos el scroll
    return () => window.removeEventListener('scroll', handleScroll);  // Limpiamos el listener al desmontar el componente
  }, []);


  return (
    <div>
      <Hero />
      <aside className="scroll-top-button">
        {showButton && (
        <button className="btn btn-primary mt-3" style={{backgroundColor: "#1ea608", border: "#1ea608"}} onClick={() => window.scrollTo(0, 0)}><FaArrowUp /></button>
        )}
      </aside>
      <About />
    </div>
  );
}

export default App;
