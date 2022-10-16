import React from "react";
import * as S from "../Styles/FooterStyles";
import Fb from "../Assets/fb-logo.png";
import Ig from "../Assets/ig-logo.png";
import Pin from "../Assets/pin-logo.png";
import Tt from "../Assets/tt-logo.png";
export default function Footer() {
  return (
    <footer>
      <S.Section>
        <div>
          <h2>SUBSCRIBE</h2>
          <h3>Sign up for newsletter</h3>
          <input type="email" placeholder="Your Email" />
          <button>SUBMIT</button>
        </div>
      </S.Section>
      <S.SectionS>
        <div>
          <img src={Ig} alt="logo do instagram" />
          <img src={Tt} alt="logo do twitter" />
          <img src={Fb} alt="logo do facebook" />
          <img src={Pin} alt="logo do pinterest" />
        </div>
        <nav>
          <ul>
            <li>ABOUT</li>
            <li>RECIPES</li>
            <li>SUBSCRIBE</li>
          </ul>
        </nav>
      </S.SectionS>
    </footer>
  );
}
