import { Container, StyledLink } from "./style";

function NotFound() {
  return (
    <Container>
      <h1>404</h1>
      <p>Página não encontrada</p>
      <StyledLink to="/">Voltar para a Home</StyledLink>
    </Container>
  );
}

export default NotFound;

