import React from 'react';
import { Pressable, TouchableOpacity } from 'react-native';
import { colors } from '../theme';
import MainText from './mainText';
import Ionicons from '@react-native-vector-icons/ionicons';
import { scale, verticalScale } from 'react-native-size-matters';

const MainButton = ({
  text,
  onpress,
  textalign = 'right',
  bg_color = colors.text,
  font_color = colors.white,
  font_size = 14,
  fontWeight = 'semiBold',
  bntBorder = colors.primaryLight,
}: {
  text: string;
  onpress?: () => void;
  textalign?: 'center' | 'left' | 'right';
  bg_color?: string;
  font_color?: string;
  font_size?: number;
  fontWeight?: 'semiBold' | 'bold';
  bntBorder?: string;
}) => {
  const handlePress = () => {
    onpress?.();
  };

  return (
    <Pressable
      style={{
        width: '100%',
        borderRadius: scale(10),
        borderWidth: 1,
        borderColor: bntBorder,
        paddingVertical: scale(8),
        paddingHorizontal: scale(10),
        backgroundColor: bg_color,
        alignItems:
          textalign === 'right'
            ? 'flex-end'
            : textalign === 'left'
              ? 'flex-start'
              : 'center',
        marginTop: 5,
      }}
      onPress={handlePress}
    >
      <MainText text={text} color={font_color} fontWeight={fontWeight} size={font_size} textAlign={textalign}/>
      
    </Pressable>
  );
};

export default MainButton;