import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextStyled from './TextStyled/TextStyled.component';

export function HelloWave() {
  const [clicks, setClicks] = useState(0);
  const rotationAnimation = useSharedValue(0);

  rotationAnimation.value = withRepeat(
    withSequence(withTiming(25, { duration: 150 }), withTiming(0, { duration: 150 })),
    4 // Run the animation 4 times
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  const handlePress = () => {
    setClicks(clicks + 1);
    rotationAnimation.value = withRepeat(
      withSequence(withTiming(25, { duration: 150 }), withTiming(0, { duration: 150 })),
      4 // Run the animation 4 times
    );
  }

  return (
    <TouchableOpacity onPress={handlePress}>

    <Animated.View style={animatedStyle}>
      <TextStyled style={styles.text}>👋</TextStyled>
    </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
});
