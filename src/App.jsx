

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Proyectos from './components/Proyecto';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<div>Contacto</div>} />
        <Route path="*" element={<div>Página no encontrada</div>} />
        <Route path="/cv" element={<div>CV</div>} />
        <Route path="/sobre-mi" element={<div>Sobre mí</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;