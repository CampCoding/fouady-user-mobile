import { TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import MainText from '../../../../components/mainText';
import { colors } from '../../../../theme';
import styles from '../LoginScreen.styles';
import Lucide from '@react-native-vector-icons/lucide';
import { LoginScreenProps } from '../LoginScreen.types';
import { scale } from 'react-native-size-matters';

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
    { label: t('change_pass'), onPress: handleNavToChangePassword },
    { label: t('forget_password'), onPress: handleNavToForgetPassword },
    { label: t('new_account'), onPress: handleNavToSignup },
  ];

  return (
    <View style={styles.FooterSection}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.FooterSectionBtn}
          onPress={item.onPress}
        >
          {index !== 2? <Lucide name='dot' size={20} color={colors.textSecondary} />
          :
          <View style={{width:scale(10)}}/>  
        }
          <MainText
            text={item.label}
            size={12}
            color={index !== 2 ? colors.textSecondary : colors.primary}
            
          />
          
        </TouchableOpacity>
      ))}
    </View>
  );
}