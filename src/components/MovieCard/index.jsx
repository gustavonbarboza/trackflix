import { Card, Poster, Title } from "./styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

function MovieCard({ filme }) {
return (
  <Link to={`/filme/${filme.id}`} style={{ textDecoration: "none" }}>
    <Card>
      <Poster 
        src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`}
        alt={filme.title}
      />
      <Title>{filme.title}</Title>
    </Card>
  </Link>

)
}

export default MovieCard;