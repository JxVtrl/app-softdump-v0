import { HelloWave } from "@/components/HelloWave";
import { Ionicons } from "@expo/vector-icons";
import * as S from "@/styles/Home.styles";
import Gallery from "@/components/Gallery/Gallery.component";
import TextStyled from "@/components/TextStyled/TextStyled.component";
import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen() {
  const { navigate } = useNavigation();

  const handleProfilePress = () => {
    console.log("Profile pressed");
  };

  const goToOnboarding = () => {
    navigate("onboarding");
  };

  return (
    <S.Scroll>
      <S.Header>
        <S.TitleWrap>
          <TouchableOpacity onPress={goToOnboarding}>
            <TextStyled type="title">Bem-vindo</TextStyled>
          </TouchableOpacity>
          <HelloWave />
        </S.TitleWrap>

        <S.ProfileWrap onPress={handleProfilePress}>
          <Ionicons name="person-circle-outline" size={38} color="white" />
        </S.ProfileWrap>
      </S.Header>
      <TextStyled
        type="subtitle"
        style={{
          fontWeight: "regular",
        }}
      >
        Conheça nossos produtos
      </TextStyled>

      <Gallery />
    </S.Scroll>
  );
}
