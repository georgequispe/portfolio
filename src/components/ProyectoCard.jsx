import { Card, Image, Content, Title, Description, TechList, TechItem, Links, Link } from './ProyectoCard.styles';

const ProyectoCard = ({ titulo, descripcion, tecnologias, imagen, repo, demo }) => (
  <Card>
    <Image src={imagen} alt={titulo} />
    <Content>
      <Title>{titulo}</Title>
      <Description>{descripcion}</Description>
      <TechList>
        {tecnologias.map((tech, i) => <TechItem key={i}>{tech}</TechItem>)}
      </TechList>
      <Links>
        <Link href={repo} target="_blank">GitHub</Link>
        <Link href={demo} target="_blank">Demo</Link>
      </Links>
    </Content>
  </Card>
);
export default ProyectoCard;