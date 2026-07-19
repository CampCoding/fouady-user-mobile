import React from 'react';
import { Image, ImageSourcePropType, Pressable, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MainText from './mainText';
import { colors } from '../theme';
import Ionicons, { IoniconsIconName } from '@react-native-vector-icons/ionicons';

interface SecondCardProps {
  image?: ImageSourcePropType;
  text: string;
  backgroundColor?: string;
  color?: string;
  onPress?: () => void;
  icon?: IoniconsIconName;
  width?: number;
}

export default function SecondCard({
  image,
  text,
  color =colors.white,
  onPress,
  icon = '' as IoniconsIconName,
}: SecondCardProps) {
  return (
<View style={{
  width: 110,
}}>
  <LinearGradient
    colors={['#1b1a1a', '#2d2d2d']}
    start={{ x: 0.3, y: .2 }}
    end={{ x: 1, y: 0.3 }}
    style={{
      height: 110,
      borderRadius: 10,
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
        <Ionicons name={icon} size={32} color={colors.primary} />
    
    }

    <MainText
      text={text}
      fontWeight="bold"
      textAlign="center"
      color={colors.white}
      marginTop={10}
    />
  </LinearGradient>
</View>
  );
}