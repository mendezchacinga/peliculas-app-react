import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./paginas/Home";
import Detalles from "./paginas/Detalles";
import style from './App.module.css';

function App() {
  const [tema, setTema] = useState('claro');
  
  useEffect(() => {
    // Verificar la preferencia del usuario al cargar la aplicación
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTema(prefersDarkMode ? 'oscuro' : 'claro');

  }, []);

  const toggleTema = () => {
    setTema(prevTema => prevTema === 'claro' ? 'oscuro' : 'claro');
  };
  
  return (
    <Router>
      <div className={`${style.mainStyle} ${style[tema]}`}>
        <button 
          onClick={toggleTema} 
          className={`${style.temaToggle} ${style[tema]}`}
          aria-label={`Cambiar a modo ${tema === 'claro' ? 'oscuro' : 'claro'}`}
        >
          {tema === 'claro' ? '🌙' : '☀️'}
        </button>
        <Routes>
          <Route path="/" element={<Home tema={tema} />} />  
          <Route path="/detalles" element={<Detalles tema={tema} />} />          
        </Routes>
      </div>
    </Router>
  );
}

export default App;