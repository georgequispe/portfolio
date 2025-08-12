import { Section, SectionTitle, Item } from './Cv.styles';

const CVSection = ({ title, items }) => (
  <Section>
    <SectionTitle>{title}</SectionTitle>
    {items.map((item, index) => (
      <Item key={index}>
        <strong>{item.role}</strong>
        {item.company && <span> – {item.company}</span>}
        {item.period && <span> ({item.period})</span>}
      </Item>
    ))}
  </Section>
);

export default CVSection;