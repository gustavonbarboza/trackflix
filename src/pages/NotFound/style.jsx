import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  color: white;
  text-align: center;
  margin-top: 100px;
`;

export const StyledLink = styled(Link)`
  color: #e50914;
  text-decoration: none;
  font-size: 18px;
  margin-top: 20px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;