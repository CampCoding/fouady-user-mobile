import React from 'react';
import { Pressable } from 'react-native';
import { colors } from '../theme';
import MainText from './mainText';
import Ionicons from '@react-native-vector-icons/ionicons';

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
      style={{
        width: '94%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.primaryLight,
        padding: 10,
        backgroundColor: '#1b1a1a',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
      }}
      onPress={handlePress}
    >
      <MainText text={text} color={colors.white} fontWeight="bold" />
      <Ionicons
        name={isExpanded ? 'chevron-up' : 'chevron-down'}
        size={16}
        color={colors.primary}
      />
    </Pressable>
  );
};

export default MenuButton;