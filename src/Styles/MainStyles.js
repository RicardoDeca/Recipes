import styled from "styled-components";
export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  height: 120vh;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;
export const Figure = styled.figure`
  width: 28vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 10px #00000029;
  @media (max-width: 800px) {
    width: 90vw;
    height: 90vh;
    margin-bottom: 15px;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 50%;
`;
export const Main = styled.main`
  background-color: #f2f4f1;
  display: flex;
  flex-direction: column;
  h2 {
    display: flex;
    align-items: flex-end;
    height: 25vh;
    letter-spacing: 2px;
    color: #373737;
    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }
`;
export const Figcaption = styled.figcaption`
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  font-weight: 300;
  width: 100%;
  height: 15%;
  color: #373737;
`;
export const Linha = styled.p`
  width: 15%;
  height: 25%;
  border-bottom: solid;
  color: #373737;
`;
export const Linha2 = styled.p`
  width: 5%;
  height: 15%;
  border-bottom: solid;
  color: #373737;
`;
export const Sub = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  align-items: center;
  margin-top: 15px;
`;
export const FigureSpoon = styled.figure`
  width: 50%;
  height: 100vh;
  @media (max-width: 800px) {
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
export const ContainerSection = styled.section`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
    background-color: white;
    @media (max-width: 800px) {
      width: 100%;
      height: 100vh;
    }
  }
  h3 {
    display: flex;
    padding-top: 15vh;
    align-items: center;
    font-size: 1.4rem;
    height: 25vh;
    letter-spacing: 2px;
    color: #373737;
  }
`;
export const Pdec = styled.p`
  border-top: solid #373737;
  width: 4vw;
  height: 7%;
`;
export const ContainerP = styled.p`
  text-align: center;
  font-weight: 300;
  text-align: justify;
  font-size: 1rem;
  line-height: 150%;
  width: 76%;
  height: 40%;
  margin-top: 15px;
`;
