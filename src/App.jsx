

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Proyectos from './components/Proyecto';
import AboutMe from './components/AboutMe';
import ContactForm from './pages/Contacto';
import CV from './components/Cv';
import Layout from './components/Layout';

function App() {
  const base = import.meta.env.DEV ? '/' : '/portfolio/';

  return (
    <BrowserRouter basename={base}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Esta es la entrada principal */}
          <Route index element={<Home />} />

          {/* Rutas internas */}
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="contacto" element={<ContactForm />} />
          <Route path="cv" element={<CV />} />
          <Route path="sobre-mi" element={<AboutMe />} />

          {/* Ruta para errores */}
          <Route path="*" element={<div>Página no encontrada</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;