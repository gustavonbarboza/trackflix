import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #121212;
  padding: 1rem;
  display: flex;
  gap: 2rem;
`;

const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  position: relative;

  &.active {
    color: #e50914;
  }

  &.active::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    background: #e50914;
    left: 0;
    bottom: -4px;
  }
`;

function Header() {
  return (
    <Nav>
      <StyledLink to="/" end>Início</StyledLink>
      <StyledLink to="/movie">Filmes</StyledLink>
      <StyledLink to="/tv">Séries</StyledLink>
    </Nav>
  );
}

export default Header;