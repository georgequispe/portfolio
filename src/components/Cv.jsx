import { Container, Title, PreviewImage } from './Cv.styles';
import CVSection from './CvSection';
import DownloadButton from './DownLoadBoton';

const CV = () => {
  return (
    <Container>
      <Title>Currículum Vitae</Title>

      <CVSection
        title="Experiencia"
        items={[
          { role: 'Desarrollador Full Stack', company: 'TechCorp', period: '2024 - 2025' },
          { role: 'Frontend Developer', company: 'VisualStudio', period: '2023 - 2024' },
        ]}
      />

      <CVSection
        title="Educación"
        items={[
          { role: 'Curso de armado, reparación y mantenimiento de PC', company: 'Instituto Argentino de Computación', period: '2016 - 2017' },
          { role: 'Curso de programación en Java', company: 'Talento Tech', period: '2024 - 2025' },
          { role: 'Curso de desarrollo web Frontend', company: 'Codo a Codo', period: '2023 - 2024' },
          { role: 'Curso de desarrollo web Full Stack', company: 'Talento Tech', period: '2024 - 2025' },
        ]}
      />

      <CVSection
        title="Tecnologías"
        items={[
          { role: 'React, Vite, Styled-Components, GitHub, Bootstrap' },
          { role: 'JavaScript, HTML5, CSS3, Node.js, Java' },
          { role: 'MySQL, SQL_Server, Git, Python' },
        ]}
      />

      <DownloadButton
        url={`${import.meta.env.BASE_URL}assets/cv-george-quispe.pdf`}
        label="Descargar CV en PDF"
      />

      <PreviewImage
        src={`${import.meta.env.BASE_URL}assets/cv-preview.png`}
        alt="Vista previa del CV"
      />
    </Container>
  );
};

export default CV;