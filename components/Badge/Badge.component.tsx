import React from "react";
import { BadgeProps } from "./Badge.interface";
import TextStyled from "../TextStyled/TextStyled.component";
import { FontAwesome5 } from "@expo/vector-icons";
import * as S from "./Badge.styles";

const Badge: React.FC<BadgeProps> = ({
  text,
  color,
  backgroundColor,
  borderColor,
  size,
  icon = "crown",
  iconColor = "#fff",
  iconSize = 12,
  onPress,
}) => {
  return (
    <S.Badge
      backgroundColor={backgroundColor ?? "transparent"}
      borderColor={borderColor ?? "transparent"}
    >
      {icon && <FontAwesome5 name={icon} size={iconSize} color={iconColor} />}
      {text && (
        <TextStyled
          type="small"
          style={{
            color: color ?? "#fff",
          }}
        >
          {text}
        </TextStyled>
      )}
    </S.Badge>
  );
};

export default Badge;
