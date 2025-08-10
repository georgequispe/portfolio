import { Header, Logo,  Nav } from "./Header.styles";
import { NavLink } from "react-router-dom";
const HeaderComponent = () => (
  <Header>
    <Logo>George.dev</Logo>
    <Nav>
      <NavLink to="/sobre-mi">Sobre mí</NavLink>
      <NavLink to="/proyectos">Proyectos</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
      <NavLink to="/CV_George.pdf" download>CV</NavLink>
    </Nav>
  </Header>
);

export default HeaderComponent;

