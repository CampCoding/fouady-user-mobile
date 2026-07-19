import { TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import MainText from '../../../../components/mainText';
import { colors } from '../../../../theme';
import styles from '../LoginScreen.styles';
import Lucide from '@react-native-vector-icons/lucide';
import { LoginScreenProps } from '../LoginScreen.types';

type FooterSectionProps = Pick<
  LoginScreenProps,
  | 'handleNavToSignup'
  | 'handleNavToForgetPassword'
  | 'handleNavToChangePassword'
>;

export default function FooterSection({
  handleNavToSignup,
  handleNavToForgetPassword,
  handleNavToChangePassword,
}: FooterSectionProps) {
  const { t } = useTranslation();

  const options = [
    { label: t('new_account'), onPress: handleNavToSignup },
    { label: t('forget_password'), onPress: handleNavToForgetPassword },
    { label: t('change_pass'), onPress: handleNavToChangePassword },
  ];

  return (
    <View style={styles.FooterSection}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.FooterSectionBtn}
          onPress={item.onPress}
        >
         
          <MainText
            text={item.label}
            color={index !== 0 ? colors.textSecondary : colors.primary}
          />
           {index !== 2 && <Lucide name='dot' size={20} color={colors.textSecondary} />}
        </TouchableOpacity>
      ))}
    </View>
  );
}