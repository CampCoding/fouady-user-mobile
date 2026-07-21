import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import type { SignupErrors } from './SignupScreen.types';

const useSignupScreen = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errors, setErrors] = useState<SignupErrors>({});
  const [confirm_new_password, setConfirm_new_password] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [job, setJob] = useState('');
  const [work_place, setWork_place] = useState('');

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
    name,
    setName,
    phone,
    setPhone,
    job,
    setJob,
    work_place,
    setWork_place,
    errors,
    setErrors,
    handleChangePassword,
    goBack,
  };
};

export default useSignupScreen;
