import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  background-color: #0a0a0a;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

export const Logo = styled.div`
  img {
    height: 50px;
    width: auto;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const StyledNavLink = styled(RouterNavLink)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #00aaff;
  }

  &.active {
    border-bottom: 2px solid #00aaff;
  }
`;