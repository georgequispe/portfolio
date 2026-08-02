import { StyledFooter, EmailLink } from './Footer.styles';
import { Link } from 'react-router-dom';

const FooterComponent = () => (
  <StyledFooter>
    {/* Autoría */}
    <p>
      © {new Date().getFullYear()} Diseñado con React y 💙 por George Roberto Quispe Román.
    </p>

    {/* Contacto y ubicación */}
    <p>
      📧{' '}
      <EmailLink href="georgequispe.dev@gmail.com" rel="noopener noreferrer">
        georgequispe.dev@gmail.com
      </EmailLink>{' '}
      · 📍 Buenos Aires, Argentina
    </p>

    {/* Redes y CV */}
    <p>
      <a href="https://github.com/georgequispe" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>{' '}
      ·{' '}
      <a href="https://linkedin.com/in/george-quispe-080154311/" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>{' '}
      ·{' '}
      <Link to="/cv" target="_blank" rel="noopener noreferrer">
        CV
      </Link>
    </p>

    {/* Navegación interna */}
    <p>
      <Link to="/sobre-mi">Sobre mí</Link> · <Link to="/proyectos">Proyectos</Link> ·{' '}
      <Link to="/contacto">Contacto</Link>
    </p>

    {/* Nota legal */}
    <small>Portfolio personal sin fines comerciales.</small>
  </StyledFooter>
);

export default FooterComponent;