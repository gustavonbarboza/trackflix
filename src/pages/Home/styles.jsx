import styled from "styled-components";
import homeBanner from "../../assets/images/posters/banner.jpg";

export const Container = styled.div`
  padding: 40px;
  color: white;
`;

export const SearchButton = styled.input`
  width: 100%;
  padding: 14px 20px;
  background-color: white;
  color: #121212;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: none;
  `;

export const Banner = styled.div`
  height: 300px;
  background-image: url(${homeBanner});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  margin-bottom: 30px;
`