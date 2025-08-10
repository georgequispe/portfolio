import { StyledFooter } from "./Footer.styles";
const FooterComponent = () => (
  <StyledFooter>
    © {new Date().getFullYear()} Diseñado con React y 💙 por George.
    <br />
    <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
      GitHub
    </a> ·{' '}
    <a href="https://linkedin.com/in/tu-linkedin" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
  </StyledFooter>
);

export default FooterComponent;

