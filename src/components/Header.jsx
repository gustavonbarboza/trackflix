import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #121212;
  padding: 1rem;
  display: flex;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
`;

function Header() {
  return (
    <Nav>
      <StyledLink to="/">Início</StyledLink>
      <StyledLink to="/favoritos">Favoritos</StyledLink>
    </Nav>
  );
}

export default Header;