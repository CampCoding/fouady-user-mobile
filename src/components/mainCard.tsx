import React from 'react';
import { Image, ImageSourcePropType, Pressable, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MainText from './mainText';
import { colors } from '../theme';
import Ionicons, { IoniconsIconName } from '@react-native-vector-icons/ionicons';

interface MainCardProps {
  image?: ImageSourcePropType;
  text: string;
  backgroundColor?: string;
  color?: string;
  onPress?: () => void;
  icon?: IoniconsIconName;
  unpressable?: boolean;
  width?: number;
}

export default function MainCard({
  image,
  text,
  color =colors.white,
  width ,
  onPress,
  icon = '' as IoniconsIconName,
}: MainCardProps) {
  return (
<Pressable
  onPress={onPress}
  style={{
    width: width ,
  }}
>
  <LinearGradient
    colors={['#0A0A0A', '#1F1F1F']}
    start={{ x: 0.5, y: 0 }}
    end={{ x: 0.5, y: 1 }}
    style={{
      height: 110,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowRadius: 8,
      elevation: 6,
    }}
  >
        {image?<Image
        source={image}
        style={{
            width: 25,
            height: 25,
            marginBottom: 15,
        }}
        resizeMode="contain"
        />
        :
        <Ionicons name={icon} size={25} color={colors.primary} />
    
    }

    <MainText
      text={text}
      fontWeight="semiBold"
      textAlign="center"
      color={colors.white}
      size={12}
    />
  </LinearGradient>
</Pressable>
  );
}