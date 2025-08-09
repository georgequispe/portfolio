import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: 0;
  background: #0a0a0a;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

export const Logo = styled.h1`
  color: #00d8ff;
  font-size: 1.6rem;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #00d8ff;
  }
`;


