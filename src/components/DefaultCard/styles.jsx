import styled from "styled-components";

export const Card = styled.div`
  width: 200px;
  margin: 10px;
  height: 400px;
  background-color: #272727;
  border-radius: 10px;
  overflow: hidden;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Poster = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const Title = styled.h3`
  font-size: 1rem;
  padding: 10px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const SubTitle = styled.p`
  color: #a8a8a8;
  font-size: 14px;
  padding: 0 10px 10px 10px;
  margin-top: -8px;
  margin-left: 5px;
  margin-right: 15px;
`;
