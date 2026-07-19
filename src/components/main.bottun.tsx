import React from 'react';
import { Pressable, TouchableOpacity } from 'react-native';
import { colors } from '../theme';
import MainText from './mainText';
import Ionicons from '@react-native-vector-icons/ionicons';

const MainButton = ({
  text,
  onpress,
  textalign = 'right',
}: {
  text: string;
  onpress?: (expanded: boolean) => void;
  textalign?: 'center' | 'left' | 'right';
}) => {
  const handlePress = () => {
    
  };

  return (
    <TouchableOpacity
      style={{
        width: '94%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.primaryLight,
        padding: 10,
        backgroundColor: '#1b1a1a',
        alignItems:textalign === 'right' ? 'flex-end' : textalign === 'left' ? 'flex-start' : 'center',
        marginTop: 10,
      }}
      onPress={handlePress}
    >
      <MainText text={text} color={colors.white} fontWeight="bold" textAlign={'right'}/>
      
    </TouchableOpacity>
  );
};

export default MainButton;