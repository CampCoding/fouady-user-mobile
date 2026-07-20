import { Image, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import MainText from '../../../../components/mainText';
import { colors } from '../../../../theme';
import images from '../../../../utils/images';

export default function Header() {
  const { t } = useTranslation();

  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={images.logo}
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
      />
      <MainText
        text={'app_name'}
        size={30}
        marginTop={10}
        color={colors.white}
        fontWeight="extraBold"
      />
      <MainText
        text={'change_password_subtitle'}
        size={16}
        color={colors.textSecondary}
        fontWeight="semiBold"
      />
    </View>
  );
}