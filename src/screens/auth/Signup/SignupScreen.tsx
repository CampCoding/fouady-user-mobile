import React from 'react';
import SignupScreenUI from './SignupScreen_UI';
import useSignupScreen from './SignupScreen.hooks';

const SignupScreen = () => {
  const {} = useSignupScreen();
  return <SignupScreenUI />;
};

export default SignupScreen;
