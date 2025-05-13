import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #121212;
  padding: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 60px;
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

function Footer() {
  return (
    <FooterContainer>
      <FooterLink to="/">Início</FooterLink>
      <FooterLink to="/movie">Filmes</FooterLink>
      <FooterLink to="/tv">Séries</FooterLink>
      <FooterLink to="/sobre">Sobre</FooterLink>
    </FooterContainer>
  );
}

export default Footer;