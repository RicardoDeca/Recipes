import React from "react";
import rclogo from "../Assets/logo-rc.png";
import * as S from "../Styles/HeaderStyles";
const Header = () => {
  return (
    <S.Header>
      <S.Div>
        <S.Figure>
          <img src={rclogo} alt="logo RC" />
        </S.Figure>
        <p>=</p>
        <S.Nav>
          <S.Ul>
            <S.Li>ABOUT</S.Li>
            <S.Li>RECIPES</S.Li>
            <S.Li>SUBSCRIBE</S.Li>
          </S.Ul>
        </S.Nav>
      </S.Div>
      <S.H1>RECIPES</S.H1>
    </S.Header>
  );
};

export default Header;
