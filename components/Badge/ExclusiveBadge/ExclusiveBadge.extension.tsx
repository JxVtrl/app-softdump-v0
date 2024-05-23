import React from "react";
import Badge from "../Badge.component";
import * as S from "./ExclusiveBadge.styles";

const ExclusiveBadge: React.FC = () => {
    const EXCLUSIVE_TEXT = "Exclusivo";
    const EXCLUSIVE_DARK_COLOR = "#0C0C0C";
    const EXCLUSIVE_LIGHT_COLOR = "#FFDF00";
    const EXCLUSIVE_TRANSPARENCY = "a0";

    const handlePress = () => {


    }




  return (
    <S.BadgeWrap>
      <Badge
        text={EXCLUSIVE_TEXT}
        color={EXCLUSIVE_DARK_COLOR}
        iconColor={EXCLUSIVE_DARK_COLOR}
        borderColor={EXCLUSIVE_LIGHT_COLOR}
        backgroundColor={`${EXCLUSIVE_LIGHT_COLOR}${EXCLUSIVE_TRANSPARENCY}`}
        size="small"
        onPress={handlePress}
      />
    </S.BadgeWrap>
  );
};

export default ExclusiveBadge;
