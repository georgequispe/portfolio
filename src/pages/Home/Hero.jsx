import { HeroSection, Title, Subtitle, CTAButton } from './Hero.styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
   const navigate = useNavigate(); 
  return (
    <HeroSection>
      <Title>Bienvenido a mi portfolio</Title>
      <Subtitle>Desarrollo web moderno, modular y profesional</Subtitle>
      <CTAButton onClick={() => navigate('/proyectos')}>
        Ver proyectos
      </CTAButton>
    </HeroSection>
  );
}

