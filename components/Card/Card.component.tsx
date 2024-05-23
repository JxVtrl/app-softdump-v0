import React from "react";
import { Dimensions } from "react-native";
import { CardProps } from "./Card.interface";

import * as S from "./Card.styles";
import { borderMargin, containerGap } from "@/tokens/global";
import ExclusiveBadge from "../Badge/ExclusiveBadge/ExclusiveBadge.extension";
import TextStyled from "../TextStyled/TextStyled.component";

const Card: React.FC<CardProps> = ({ product }) => {
  const deviceWidth = Dimensions.get("window").width;

  const isMain = product.type === "main";
  const isExclusive = product.exclusive;

  const cardWidth = isMain
    ? deviceWidth - borderMargin * 2
    : (deviceWidth - borderMargin * 2 - containerGap) / 2;

  return (
    <>
      <S.CardWrap isMain={isMain}>
        {isExclusive && <ExclusiveBadge />}

        <S.CardImage source={{ uri: product.image }} width={cardWidth} />
        {isMain && <TextStyled>Escolhido para você</TextStyled>}
      </S.CardWrap>
    </>
  );
};

export default Card;
