import styled from "styled-components";

export const Card = styled.div`
  width: 138px;
  min-height: 280px;
  margin: 10px;
  background-color: #3a3a3a;
  border-radius: 10px;
  overflow: hidden;
  color: #f5f5f5;
`;

export const Poster = styled.img`
  width: 100%;
  height: 175px;
  object-fit: cover;
`;

export const Title = styled.h3`
  font-size: 16px;
  padding: 10px;
  text-decoration: none;
`;

export const SubTitle = styled.p`
  color: #a8a8a8;
  font-size: 14px;
  padding: 0 10px 10px 10px;
  margin-top: -8px;
`;