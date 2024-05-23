import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Scroll = styled(ScrollView)`
margin-top: 50px;
  padding: 40px 24px;
`;

export const Header = styled.View`
display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`

export const ProfileWrap = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
`


export const TitleWrap = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
