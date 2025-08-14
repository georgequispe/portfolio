import { Header, Logo, Nav, StyledNavLink } from "./Header.styles";
import { NavLink } from "react-router-dom";
import miLogo from "../assets/miLogo.png";
const HeaderComponent = () => (
  <Header>
    <Logo>
      <img src={miLogo} alt="Logo George" loading="lazy" />
    </Logo>

    <Nav>
      <StyledNavLink to="/">Inicio</StyledNavLink>
      <StyledNavLink to="/sobre-mi">Sobre mí</StyledNavLink>
      <StyledNavLink to="/proyectos">Proyectos</StyledNavLink>
      <StyledNavLink to="/contacto">Contacto</StyledNavLink>
      <StyledNavLink to="/cv" download>
        CV
      </StyledNavLink>
    </Nav>
  </Header>
);

export default HeaderComponent;

