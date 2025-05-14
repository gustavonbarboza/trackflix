import styled from "styled-components";
import homeBanner from "../../assets/images/posters/banner.jpg";

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
  transition: none;
  `;

export const Banner = styled.div`
  position: relative;
  width: 100vw;
  height: 300px;
  background-image: url(${homeBanner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: calc(-50vw + 50%);
  margin-bottom: 30px;
  border-radius: 12px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
`


export const BannerContainer = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  display: flex;
  flex-direction: column;
  margin-left: 150px;
  margin-top: 5%;
  
  h1 {
    font-size: 48px;
    margin: 0;
  }

  p {
    font-size: 28px;
    margin: 0;
  }
`;
