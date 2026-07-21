import React from 'react';
import ChangePasswordScreenUI from './ChangePasswordScreen_UI';
import useChangePasswordScreen from './ChangePasswordScreen.hooks';

const ChangePasswordScreen = () => {
  const {
    password,
    setPassword,
    newPassword,
    setNewPassword,
    errors,
    setErrors,
    handleChangePassword,
    goBack,
    confirm_new_password,
    setConfirm_new_password,
  } = useChangePasswordScreen();

  return (
    <ChangePasswordScreenUI
      password={password}
      setPassword={setPassword}
      newPassword={newPassword}
      setNewPassword={setNewPassword}
      errors={errors}
      setErrors={setErrors}
      handleChangePassword={handleChangePassword}
      confirm_new_password={confirm_new_password}
      setConfirm_new_password={setConfirm_new_password}
      goBack={goBack}
    />
  );
};

export default ChangePasswordScreen;
