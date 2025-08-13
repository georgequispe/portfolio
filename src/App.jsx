

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Proyectos from './components/Proyecto';
import  AboutMe  from './components/AboutMe';
import ContactForm from './pages/Contacto';
import CV from './components/Cv';
function App() {
  return (
    <BrowserRouter basename="/PORTFOLIO">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<ContactForm />} />
        <Route path="*" element={<div>Página no encontrada</div>} />
        <Route path="/cv" element={<CV />} />
        <Route path="/sobre-mi" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;