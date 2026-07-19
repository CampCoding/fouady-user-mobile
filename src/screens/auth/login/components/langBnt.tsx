import { View, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from '../LoginScreen.styles';
import MainText from '../../../../components/mainText';
import Ionicons from '@react-native-vector-icons/ionicons';
import { colors } from '../../../../theme';

const LangBtn = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage || i18n.language;

  const toggleLanguage = () => {
    const nextLang = currentLanguage === 'ar' ? 'en' : 'ar';
    void i18n.changeLanguage(nextLang);
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