import React from 'react';
import ChangePasswordScreenUI from './ChangePasswordScreen_UI';
import useChangePasswordScreen from './ChangePasswordScreen.hooks';

const ChangePasswordScreen = () => {
  const { goBack } = useChangePasswordScreen();
  return <ChangePasswordScreenUI goBack={goBack} />;
};

export default ChangePasswordScreen;
