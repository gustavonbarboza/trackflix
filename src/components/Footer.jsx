import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #121212;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  color: #888;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
  color: #888;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;

  &:hover {
    color: #fff;
  }
`;

const Credit = styled.p`
  font-size: 13px;
  color: #666;
  text-align: center;

  span {
    color: #fff;
    font-weight: bold;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <NavLinks>
        <FooterLink to="/">Início</FooterLink>
        <FooterLink to="/movie">Filmes</FooterLink>
        <FooterLink to="/tv">Séries</FooterLink>
        <FooterLink to="/person">Pessoas</FooterLink>
      </NavLinks>
      <Credit>
        Feito com 🤍 por Gustavo para praticar e estudar React + TMDB API.
      </Credit>
    </FooterContainer>
  );
}

export default Footer;