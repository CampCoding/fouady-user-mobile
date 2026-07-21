import { Image, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import MainText from '../../../../components/mainText';
import { colors } from '../../../../theme';
import images from '../../../../utils/images';
import style from "../SignupScreen.styles";
import MainButton from '../../../../components/main.bottun';

export default function Header() {
  const { t } = useTranslation();
  

  return (
    <View style={style.header}>
      <Image
        source={images.logo}
        style={style.img}
        resizeMode="contain"
      />
      <MainText
        text={'app_name'}
        size={30}
        color={colors.white}
        fontWeight="extraBold"
      />
      <View style={style.changePasswordContainer}>
        <MainButton 
        text={'change_password_subtitle'} 
        textalign='center' 
        bntBorder={colors.primary}
        fontWeight="bold"
        bg_color={colors.foreground}
        />

      </View>
    </View>
  );
}