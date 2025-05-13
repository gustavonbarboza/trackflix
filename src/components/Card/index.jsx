import { Card, Poster, Title } from "./styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

function CardSections({ filme, tipo = "movie" }) {
  return (
    <Link to={`/${tipo}/${filme.id}`} style={{ textDecoration: "none" }}>
      <Card>
        <Poster
          src={`https://image.tmdb.org/t/p/w300${
            tipo === "person" ? filme.profile_path : filme.poster_path
           }`}
          alt={filme.title || filme.name}
        />
        <Title>{filme.title || filme.name}</Title>
      </Card>
    </Link>
  );
}

export default CardSections;