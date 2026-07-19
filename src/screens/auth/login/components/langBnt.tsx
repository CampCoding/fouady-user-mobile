import { View, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from '../LoginScreen.styles';
import MainText from '../../../../components/mainText';
import Ionicons from '@react-native-vector-icons/ionicons';
import { colors } from '../../../../theme';
import i18n, { setLanguageDirection } from '../../../../localization';

const LangBtn = () => {
  const { i18n: translation } = useTranslation();
  const currentLanguage = translation.resolvedLanguage || translation.language;

  const toggleLanguage = async () => {
    const nextLang = currentLanguage === 'ar' ? 'en' : 'ar';
    await i18n.changeLanguage(nextLang);
    setLanguageDirection(nextLang);
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableOpacity style={styles.LangBtn} onPress={toggleLanguage}>
        <MainText text={'lang_label'} size={18} />
        <Ionicons name="globe-outline" size={24} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default LangBtn;