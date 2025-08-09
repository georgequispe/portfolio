import { Header, Logo, NavLink, Nav } from "./Header.styles";
const HeaderComponent = () => (
  <Header>
    <Logo>George.dev</Logo>
    <Nav>
      <NavLink href="#about">Sobre mí</NavLink>
      <NavLink href="#projects">Proyectos</NavLink>
      <NavLink href="#contact">Contacto</NavLink>
      <NavLink href="/CV_George.pdf" download>CV</NavLink>
    </Nav>
  </Header>
);

export default HeaderComponent;

