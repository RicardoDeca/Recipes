import React from "react";
import cake from "../Assets/cake.png";
import pizza from "../Assets/pizza.png";
import smoothie from "../Assets/smoothie.png";
import spoon from "../Assets/spoon.png";
import * as S from "../Styles/MainStyles";
const Main = () => {
  return (
    <S.Main>
      <S.Sub>
        <h2>LATEST RECIPES</h2>
        <S.Linha2></S.Linha2>
      </S.Sub>
      <S.Section>
        <S.Figure>
          <S.Img src={cake} alt="red velvet cake" />
          <S.Linha></S.Linha>
          <S.Figcaption>Red Velvet Cake</S.Figcaption>
        </S.Figure>
        <S.Figure>
          <S.Img src={pizza} alt="margherita pizza" />
          <S.Linha></S.Linha>
          <S.Figcaption>Margherita Pizza</S.Figcaption>
        </S.Figure>
        <S.Figure>
          <S.Img src={smoothie} alt="peanut smoothie" />
          <S.Linha></S.Linha>
          <S.Figcaption>Peanut Smoothie</S.Figcaption>
        </S.Figure>
      </S.Section>
      <S.ContainerSection>
        <S.FigureSpoon>
          <img src={spoon} alt="spoon" />
        </S.FigureSpoon>
        <div>
          <h3>ABOUT</h3>
          <S.Pdec></S.Pdec>
          <S.ContainerP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
            tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis
            dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem,
            quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis
            sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris.
            Pellentesque mattis hendrerit semper. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Ut
            vestibulum nisl ante, et ultricies sapien facilisis aliquam.
          </S.ContainerP>
        </div>
      </S.ContainerSection>
    </S.Main>
  );
};
export default Main;
