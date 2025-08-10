

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Proyectos from './components/Proyecto';
import  AboutMe  from './components/AboutMe';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<div>Contacto</div>} />
        <Route path="*" element={<div>Página no encontrada</div>} />
        <Route path="/cv" element={<div>CV</div>} />
        <Route path="/sobre-mi" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;