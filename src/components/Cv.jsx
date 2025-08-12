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
          { role: 'Desarrollador Full Stack', company: 'TechCorp', period: '2023 - 2025' },
          { role: 'Frontend Developer', company: 'VisualStudio', period: '2021 - 2023' },
        ]}
      />

      <CVSection
        title="Educación"
        items={[
          { role: 'Lic. en Informática', company: 'Universidad de Buenos Aires', period: '2017 - 2021' },
        ]}
      />

      <CVSection
        title="Tecnologías"
        items={[
          { role: 'React, Vite, Styled-Components, GitHub, Bootstrap' },
        ]}
      />

      <DownloadButton
        url="https://drive.google.com/tu-cv.pdf"
        label="Descargar CV en PDF"
      />

      <PreviewImage src="/assets/cv-preview.png" alt="Vista previa del CV" />
    </Container>
  );
};

export default CV;