

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Proyectos from './components/Proyecto';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;