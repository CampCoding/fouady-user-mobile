import React from 'react';
import { Pressable } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../theme';

interface BackButtonProps {
  onPress?: () => void;
  color?: string;
  size?: number;
}

const BackButton = ({
  onPress,
  color = colors.primary,
  size = 24,
}: BackButtonProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => ({
        width: scale(40),
        height: verticalScale(40),
        borderRadius: scale(20),
        justifyContent: 'center',
        alignItems: 'center',
        opacity: pressed ? 0.7 : 1,
      })}
    >
      <Ionicons
        name="chevron-forward-outline"
        size={size}
        color={color}
      />
    </Pressable>
  );
};

export default BackButton;