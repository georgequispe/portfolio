import laSaludabaleImg from '../assets/laSaludable.png';
import verduleriaImg from '../assets/verduleria.png';


// src/data/proyectos.js
export const proyectos = [
  {
    id: 1,
    titulo: "Portfolio React",
    descripcion: "Portfolio moderno con React y styled-components.",
    tecnologias: ["React", "Vite", "Styled-Components"],
    imagen: laSaludabaleImg,
    repo: "https://github.com/georgequispe/shopping-cart-react",
    demo: "https://lasaludable.netlify.app"
  },
  {
    id: 2,
    titulo: "App de tareas en JS",
    descripcion: "Gestión de tareas con localStorage.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    imagen: verduleriaImg,
    repo: "https://github.com/georgequispe/Online-verdura",
    demo: "https://online-verdura.netlify.app"
  },
  // y así...
];