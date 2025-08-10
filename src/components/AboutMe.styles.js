import styled from "styled-components";
export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

export const ProfileImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Name = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  line-height: 1.6;
  color: #555;
`;

