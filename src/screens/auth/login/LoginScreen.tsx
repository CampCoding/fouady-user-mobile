import React from 'react';
import LoginScreenUI from './LoginScreen_UI';
import useLoginScreen from './LoginScreen.hooks';

const LoginScreen = () => {
  const loginProps = useLoginScreen();
  return <LoginScreenUI {...loginProps} />;
};

export default LoginScreen;
