import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import * as S from "./Styles/HeaderStyles";
const App = () => {
  return (
    <>
      <S.GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
