import styled, { createGlobalStyle } from "styled-components";
import "../styles.css";
import bgheader from "../Assets/background-header.png";
import bgresp from "../Assets/back-header-resp.png";
export const GlobalStyle = createGlobalStyle`
  *{
    font-family:'roboto';
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style:none;
  }
`;
export const Header = styled.header`
  background-image: url(${bgheader});
  background-size: 100% 100%;
  display: flex;
  margin-left: 1.09vw;
  width: 98%;
  margin-top: 15px;
  flex-direction: column;
  height: 140vh;
  p {
    display: none;
  }
  @media (max-width: 800px) {
    background-image: url(${bgresp});
    background-size: 200% 230%;
    background-position: 90% 45%;
    nav {
      display: none;
    }
    p {
      display: flex;
      height: 60%;
      width: 10%;
      justify-content: center;
      align-items: center;
      font-size: 4rem;
    }
    height: 140vh;
  }
`;
export const H1 = styled.h1`
  height: 100%;
  display: grid;
  place-content: center;
  font-size: 5rem;
  letter-spacing: 1rem;
  color: #363636;
  @media (max-width: 800px) {
    font-size: 3rem;
    letter-spacing: 0.5rem;
    padding-bottom: 20%;
  }
`;
export const Nav = styled.nav`
  display: flex;
  width: 40%;
  height: 20vh;
  align-items: center;
`;
export const Ul = styled.ul`
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  font-size: 1rem;
  color: #343434;
`;
export const Figure = styled.figure`
  display: flex;
  width: 15vw;
  height: 20vh;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    visibility: hidden;
  }
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20%;
`;
export const Li = styled.li`
  display: grid;
  place-content: center;
  width: 30%;
  height: 50%;
  color: #373737;
  &:hover {
    cursor: pointer;
    border: solid #373737;
  }
`;
