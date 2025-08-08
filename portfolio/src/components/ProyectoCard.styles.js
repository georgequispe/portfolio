// ProyectoCard.jsx
import styled from "styled-components";
export const Content = styled.div`
  padding: 16px;
`;
export const Card = styled.div`
  background-color: #1e1e2f;
  color: #f0f0f0;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: #eee;
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  margin: 0;
  color: #00bcd4;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  margin: 0.5rem 0 1rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
`;

export const TechItem = styled.li`
  background-color: #00bcd4;
  color: #fff;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.85rem;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #00bcd4;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

