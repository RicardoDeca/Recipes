import styled from "styled-components";
export const Section = styled.section`
  height: 80vh;
  color: #373737;
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #dfe4de;
    h2 {
      font-size: 1.5rem;
      width: 50%;
      height: 7vh;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
      letter-spacing: 2px;
      max-width: 200px;
    }
    h3 {
      height: 8vh;
      width: 50%;
      text-align: center;
      letter-spacing: 2px;
      font-weight: 400;
      min-width: 300px;
    }
    input {
      height: 10vh;
      font-size: 1rem;
      background-color: #f2f4f1;
      width: 40%;
      padding-left: 25px;
      border: none;
      min-width: 300px;
    }
    button {
      border: solid #373737;
      width: 15%;
      height: 8vh;
      background-color: #dfe4de;
      margin-top: 15px;
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 2px;
      min-width: 100px;
      &:hover {
        cursor: pointer;
        background-color: #f2f4f1;
      }
    }
  }
`;
export const SectionS = styled.section`
  display: flex;
  justify-content: space-evenly;
  height: 50vh;
  background-color: #f2f4f1;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    height: 80vh;
  }
  div {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 30%;
    height: 70%;
    @media (max-width: 800px) {
      width: 100%;
      justify-content: center;
      align-items: flex-start;
      height: 30%;
    }
    img {
      width: 50px;
      height: 50px;
      margin-left: 10px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  nav {
    height: 75%;
    width: 80%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 800px) {
      align-items: flex-end;
      height: 60%;
    }
  }
  ul {
    display: flex;
    width: 70%;
    letter-spacing: 2px;
    align-items: flex-end;
    justify-content: space-around;
    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
      height: 80%;
    }
  }
  li {
    width: 25%;
    color: #373737;
    height: 40%;
    display: grid;
    place-items: center;
    &:hover {
      cursor: pointer;
      border: solid;
    }
    @media (max-width: 800px) {
      width: 60%;
    }
  }
`;
