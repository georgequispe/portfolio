import { StyledFooter, EmailLink } from "./Footer.styles";

const FooterComponent = () => (
  <StyledFooter>
    <p>
      © {new Date().getFullYear()} Diseñado con React y 💙 por George Roberto Quispe Román.
    </p>

    <p>
      <p>
          📧 <EmailLink href="mailto:fuerzayfegeorge@hotmail.com.ar" rel="noopener noreferrer">
               fuerzayfegeorge@hotmail.com.ar
             </EmailLink>
</p> · 📍 Buenos Aires, Argentina
    </p>

    <p>
      <a href="https://github.com/georgequispe" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>{' '}·{' '}
      <a href="https://linkedin.com/in/george-quispe-080154311/" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>{' '}·{' '}
      <a href="/cv" target="_blank" rel="noopener noreferrer">
        CV
      </a>
    </p>

    <p>
      <a href="#about">Sobre mí</a> · <a href="#projects">Proyectos</a> · <a href="#contact">Contacto</a>
    </p>

    <small>Portfolio personal sin fines comerciales.</small>
  </StyledFooter>
);

export default FooterComponent;

