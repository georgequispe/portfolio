// ProyectoCard.styles.js
import styled from 'styled-components';

export const Card = styled.div`
  width: 320px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
  background-color: #fff;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 20px;
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #333;
`;

export const Description = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 12px;
`;

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
  padding: 0;
  list-style: none;
`;

export const TechItem = styled.li`
  background-color: #f0f0f0;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.85rem;
  color: #444;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #0077cc;
  font-weight: 500;
  transition: color 0.2s ease;
  &:hover {
    color: #005fa3;
  }
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  padding: 40px 0;
  justify-items: center;
`;

