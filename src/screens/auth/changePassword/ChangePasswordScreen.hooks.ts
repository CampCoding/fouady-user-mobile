import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import type { ChangePasswordErrors } from './ChangePasswordScreen.types';

const useChangePasswordScreen = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errors, setErrors] = useState<ChangePasswordErrors>({});
  const [confirm_new_password, setConfirm_new_password] = useState('');

  const handleChangePassword = () => {
    // TODO: implement submit logic if needed
  };

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return {
    password,
    setPassword,
    newPassword,
    setNewPassword,
    confirm_new_password,
    setConfirm_new_password,
    errors,
    setErrors,
    handleChangePassword,
    goBack,
  };
};

export default useChangePasswordScreen;
