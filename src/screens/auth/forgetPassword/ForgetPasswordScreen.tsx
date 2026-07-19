import React from 'react';
import ForgetPasswordScreenUI from './ForgetPasswordScreen_UI';
import useForgetPasswordScreen from './ForgetPasswordScreen.hooks';

const ForgetPasswordScreen = () => {
  const { goBack } = useForgetPasswordScreen();
  return <ForgetPasswordScreenUI goBack={goBack} />;
};

export default ForgetPasswordScreen;
