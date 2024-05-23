import styled from "styled-components/native";

type CardWrapProps = {
  isMain: boolean;
};

export const CardWrap = styled.TouchableOpacity<CardWrapProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-bottom: ${(props) => (props.isMain ? 12 : 0)}px;
`;

type CardImageProps = {
  width: number;
};

export const CardImage = styled.Image<CardImageProps>`
  width: ${(props) => props.width}px;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f0f0f0;
`;
