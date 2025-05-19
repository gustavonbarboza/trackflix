import styled from "styled-components";

export const Container = styled.div`
  color: white;
`;

export const SearchButton = styled.input`
  width: 100%;
  padding: 14px 150px 14px 150px;
  background-color: white;
  color: #121212;
  font-size: 16px;
  font-weight: bold;
  border: none;

  @media (max-width: 768px) {
    padding: 14px 20px 14px 20px;
  }
  `;

export const Banner = styled.div`
  position: relative;
  height: 400px;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(215, 24, 24, 0.69);
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`


export const BannerContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  z-index: 2;
  padding-left: 150px;
  position: relative;

  @media (max-width: 768px) {
    padding-left: 8%;
  }
  
  h1 {
    font-size: 48px;
    margin: 0;
  }

  p {
    font-size: 28px;
    margin: 0;
  }
`;
