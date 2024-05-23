import React from "react";
import { Dimensions, Image, View } from "react-native";
import PagerView from "react-native-pager-view";
import TextStyled from "../TextStyled/TextStyled.component";
import * as S from "./PagerView.styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

export type PaginationContentProps = {
  image: string;
  title: string;
  description: string;
  button?: {
    text: string;
    onPress: () => void;
  };
};

type PaginationProps = {
  content: PaginationContentProps[];
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const Pagination: React.FC<PaginationProps> = ({ content }) => {
  const paginationRef = React.useRef<any>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

    const { navigate } = useNavigation();


    const handlePageChange = (index: number) => {
    paginationRef.current?.setPage(index);
    setActiveIndex(index);
    };
    
    const handleSkipOnboarding = () => {
        navigate("home");
    }
  return (
    <>
      <PagerView
        ref={paginationRef}
        initialPage={0}
        style={{
          flex: 1,
          width: deviceWidth,
          height: deviceHeight,
        }}
        onPageSelected={(event) => {
          setActiveIndex(event.nativeEvent.position);
        }}
        orientation="horizontal"
      >
        {content.map((item, index) => (
          <S.Page key={index}>
            <Image
              source={{ uri: item.image }}
              style={{
                width: deviceWidth,
                height: deviceHeight / 2,
              }}
            />
            <S.Info>
              <TextStyled type="title">{item.title}</TextStyled>
              <TextStyled type="small">{item.description}</TextStyled>
            </S.Info>
          </S.Page>
        ))}
      </PagerView>

      {/* Page Count with balls */}
      <S.Footer>
        {activeIndex !== content.length - 1 && (
          <S.SkipButton onPress={handleSkipOnboarding}>
            <TextStyled type="small">Skip</TextStyled>
          </S.SkipButton>
        )}

        <S.Bullets>
          {content.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: activeIndex === index ? "black" : "gray",
              }}
              onPress={() => {
                handlePageChange(index);
              }}
            ></TouchableOpacity>
          ))}
        </S.Bullets>
        {activeIndex !== content.length - 1 && (
          <S.NextButton
            onPress={() => {
              handlePageChange(activeIndex + 1);
            }}
          >
            <Entypo name="chevron-right" size={24} color="white" />
          </S.NextButton>
        )}
      </S.Footer>
    </>
  );
};

export default Pagination;
