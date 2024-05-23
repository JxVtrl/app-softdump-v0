import React from "react";
import { Dimensions, View } from "react-native";
import * as S from "./Entities.styles";

import DefaultImage from "@/assets/images/entities/default.png";
import ExtendedImage from "@/assets/images/entities/extended.png";

const Entities: React.FC = () => {
  const devideWidth = Dimensions.get("window").width;
  const devideHeight = Dimensions.get("window").height;

  return (
    <S.EntitiesContainer
      style={{
        width: devideWidth,
        height: devideHeight,
      }}
    >
      <S.EntitiesWrap>
        <S.DefaultEntity source={DefaultImage} />

        <S.ExtendedEntity source={ExtendedImage} />
      </S.EntitiesWrap>
    </S.EntitiesContainer>
  );
};

export default Entities;
