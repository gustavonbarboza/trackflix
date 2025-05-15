import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/images/logos/Logo trackflix.svg";

const Nav = styled.nav`
  background-color: #121212;
  padding: 10px 150px;
  display: flex;
  align-items: center;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  position: relative;

  &.active {
    color: #e50914;
  }

  &.active::after {
    position: absolute;
    height: 2px;
    width: 100%;
    background: #e50914;
    left: 0;
    bottom: -4px;
  }
`;

const ImgLogo = styled.img`
 height: 50px;
`

function Header() {
  return (
    <Nav>
      <NavContainer>
        <Link to="/">
          <ImgLogo src={Logo} alt="Logo" />
        </Link> 
        <LinksWrapper>
          <StyledLink to="/movie">Filmes</StyledLink>
          <StyledLink to="/tv">Séries</StyledLink>
          <StyledLink to="/person">Pessoas</StyledLink>
        </LinksWrapper>
      </NavContainer>
    </Nav>
  );
}

export default Header;