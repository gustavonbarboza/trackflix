import { Card, Poster, Title, SubTitle } from "./styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
import semImagem from "../.././assets/images/sem-imagem.png"

function PersonCard({ person }) {
  return (
    <Link to={`/person/${person.id}`} style={{ textDecoration: "none" }}>
      <Card>
        <Poster
          src={
            person.profile_path
              ? `https://image.tmdb.org/t/p/w300${person.profile_path}`
              : semImagem
          }
          alt={person.name}
        />
        <Title>{person.name}</Title>
        <SubTitle>{person.character}</SubTitle>
      </Card>
    </Link>
  );
}

export default PersonCard;