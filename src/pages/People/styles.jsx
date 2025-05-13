import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  color: white;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
`;

export const Card = styled.div`
  text-align: center;

  img {
    width: 100%;
    border-radius: 8px;
  }

  h3 {
    margin-top: 10px;
    font-size: 1rem;
  }
`;
