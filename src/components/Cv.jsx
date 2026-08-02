import { Container, Title } from './Cv.styles';
import CVSection from './CvSection';
import DownloadButton from './DownLoadBoton';

const CV = () => {
  return (
    <Container>
      <Title>Currículum Vitae</Title>
      <CVSection
        title="Perfil Profesional"
        items={[
          { role: 'Desarrollador Full Stack en formación, con una base sólida en tecnologías web modernas y un fuerte enfoque en el ecosistema de React. Apasionado por el aprendizaje continuo y la aplicación de buenas prácticas para construir soluciones escalables y bien estructuradas.' },
        ]}
      />

      <CVSection
        title="Educación"
        items={[
          { role: 'Tecnicatura Superior en Desarrollo de Software', company: 'Instituto de Formación Técnica Superior Nº11', period: 'En curso' },
          { role: 'Curso de desarrollo web Frontend', company: 'Codo a Codo', period: '2023 - 2024' },
          { role: 'Curso de desarrollo web Full Stack', company: 'Talento Tech', period: '2024 - 2025' },
        ]}
      />

      <CVSection
        title="Certificaciones"
        items={[
          { role: 'Desarrollador Web Full Stack', company: 'Gobierno de la Ciudad de Buenos Aires (Codo a Codo 4.0)', period: '2024' },
        ]}
      />

      <CVSection
        title="Tecnologías y Herramientas"
        items={[
          { role: 'Foco actual: React, Vite, Styled-Components' },
          { role: 'Fundamentos sólidos: HTML5, CSS3, JavaScript (en constante práctica)' },
          { role: 'Conocimientos y en práctica: Node.js, Java (con Spring Boot para modelo MVC)' },
          { role: 'Herramientas: GitHub, Git, MySQL, SQL Server, Bootstrap' },
          { role: 'Otros: Python (conocimientos básicos)' },
        ]}
      />

      <DownloadButton
        url="/cv-george-quispe.pdf"
        label="Descargar CV en PDF"
      />
    </Container>
  );
};

export default CV;