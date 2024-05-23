import Pagination, {
  PaginationContentProps,
} from "@/components/PagerView/PagerView.component";
import React from "react";
import { Dimensions, View } from "react-native";
import * as S from "@/styles/Onboarding.styles";

const OnboardingScreen: React.FC = () => {
  const deviceWidth = Dimensions.get("window").width;
  const deviceHeight = Dimensions.get("window").height;

  const onBoardingContent: PaginationContentProps[] = [
    {
      description: "Welcome to the app",
      image: "https://via.placeholder.com/150",
      title: "Welcome",
      },
      {
          description: "This is the second page",
          image: "https://via.placeholder.com/150",
          title: "Second Page",
      }
  ];

  return (
    <S.Container>
      <Pagination content={onBoardingContent} />
    </S.Container>
  );
};

export default OnboardingScreen;
