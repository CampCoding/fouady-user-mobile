import { Image, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import MainText from '../../../../components/mainText';
import { colors } from '../../../../theme';

export default function ContectSection() {
  const { t } = useTranslation();

  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={require('../../../../../assets/appIcon/appIcon.png')}
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
      />
      <MainText text={'app_name'} />
      <MainText
        text={'app_name'}
        size={24}
        marginTop={10}
        color={colors.primary}
        fontWeight="bold"
      />
      <MainText
        text={'login_subtitle'}
        size={24}
        color={colors.white}
        fontWeight="bold"
      />
      <MainText
        text={'login_hint'}
        size={16}
        color={colors.textSecondary}
        fontWeight="semiBold"
      />
    </View>
  );
}