import React from 'react';
import SplashScreenUI from './SplashScreen_UI';
import useSplashScreen from './SplashScreen.hooks';

const SplashScreen = () => {
  const {} = useSplashScreen();
  return <SplashScreenUI />;
};

export default SplashScreen;
