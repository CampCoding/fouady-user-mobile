import React from 'react';
import { Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from '@react-native-vector-icons/ionicons';
import { scale } from 'react-native-size-matters';

import { colors } from '../theme';
import MainText from './mainText';

const MenuButton = ({
  text,
  onToggle,
  isExpanded = false,
}: {
  text: string;
  onToggle?: (expanded: boolean) => void;
  isExpanded?: boolean;
}) => {
  const handlePress = () => {
    onToggle?.(!isExpanded);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => ({
        width: '96%',
        marginTop: 5,
        transform: [{ scale: pressed ? 0.98 : 1 }],
      })}
    >
      <LinearGradient
        colors={['rgba(36,36,36,0.63)', 'rgba(64,64,64,0.63)']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{
          borderRadius: scale(10),
          borderWidth: 1,
          borderColor: colors.primaryLight,
          paddingVertical: scale(8),
          paddingHorizontal: scale(16),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <MainText
          text={text}
          color={colors.white}
          fontWeight="bold"
        />

        <Ionicons
          name={isExpanded ? 'chevron-up' : 'chevron-down'}
          size={16}
          color={colors.primary}
        />
      </LinearGradient>
    </Pressable>
  );
};

export default MenuButton;