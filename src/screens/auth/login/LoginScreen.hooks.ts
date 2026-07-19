import { useState } from 'react';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';

const useLoginScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [secure, setSecure] = useState(true);
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState<{ phoneNumber?: string; password?: string }>({});
  const [selectedType, setSelectedType] = useState<'patient' | 'doctor'>('patient');

  const loginSchema = yup.object().shape({
    phoneNumber: yup.string().required(t('phone_required')),
    password: yup.string().required(t('password_required')).min(6, t('password_min')),
  });

  const handleLogin = async () => {
    try {
      await loginSchema.validate(
        { phoneNumber, password },
        { abortEarly: false }
      );
      setErrors({});
      navigation.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      });
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const newErrors: { phoneNumber?: string; password?: string } = {};
        err.inner.forEach((e) => {
          if (e.path === 'phoneNumber') {
            newErrors.phoneNumber = e.message;
          }
          if (e.path === 'password') {
            newErrors.password = e.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  const handleNavToSignup = () => {
    navigation.navigate('Auth', { screen: 'Signup' } as any); 
  };

  const handleNavToForgetPassword = () => {
    (navigation.navigate as any)('ForgetPassword');
  };

  const handleNavToChangePassword = () => {
    (navigation.navigate as any)('ChangePassword');
  };

  return {
    secure,
    setSecure,
    password,
    setPassword,
    phoneNumber,
    setPhoneNumber,
    errors,
    setErrors,
    selectedType,
    setSelectedType,
    handleLogin,
    handleNavToSignup,
    handleNavToForgetPassword,
    handleNavToChangePassword,
  };
};

export default useLoginScreen;
