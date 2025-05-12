import styled from "styled-components";

const Card = styled.div`
  width: 200px;
  margin: 10px;
  background-color: #1c1c1c;
  border-radius: 10px;
  overflow: hidden;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Poster = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Title = styled.h3`
  font-size: 1rem;
  padding: 10px;
`;

function MovieCard({ filme }) {
return (
  <Card>
    <Poster 
    src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`}
    alt={filme.title}
    />
    <Title>{filme.title}</Title>
  </Card>
)
}

export default MovieCard;