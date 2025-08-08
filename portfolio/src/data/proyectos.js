import laSaludabaleImg from '../assets/laSaludable.png';
import verduleriaImg from '../assets/verduleria.png';
import fotoGym from '../assets/foto_gym.jpg';

// src/data/proyectos.js
export const proyectos = [
  {
    id: 1,
    titulo: "Verduleria y Fruteria Online",
    descripcion: "E-commerce de productos de verdulería.",
    tecnologias: ["React", "Vite", "Styled-Components"],
    imagen: laSaludabaleImg,
    repo: "https://github.com/georgequispe/shopping-cart-react",
    demo: "https://lasaludable.netlify.app"
  },
  {
    id: 2,
    titulo: "App de verduleria",
    descripcion: "E-commerce de productos de verdulería.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    imagen: verduleriaImg,
    repo: "https://github.com/georgequispe/Online-verdura",
    demo: "https://online-verdura.netlify.app"
  },
  {
    id: 3,
    titulo: "App de Ejercicios",
    descripcion: "Aplicación web para la gestión de ejercicios.",
    tecnologias: ["React", "Styled-Components"],
    imagen: fotoGym,
    repo: "https://github.com/georgequispe/ejercicios",
    demo: "https://ejercicios.netlify.app"
  },
  // y así...
];