import styled from 'styled-components';

export const Container = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  color: #333;
  max-width: 900px;
  margin: auto;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #222;
`;

export const Section = styled.div`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #444;
`;

export const Item = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
  line-height: 1.6;
`;

export const Button = styled.button`
  background-color: #0077cc;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 2rem;
  transition: background 0.3s ease;

  &:hover {
    background-color: #005fa3;
  }
`;

export const PreviewImage = styled.img`
  margin-top: 3rem;
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;