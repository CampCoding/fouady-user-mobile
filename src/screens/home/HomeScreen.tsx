import React from 'react';
import HomeScreenUI from './HomeScreen_UI';
import useHomeScreen from './HomeScreen.hooks';

const HomeScreen = () => {
  const homeProps = useHomeScreen();
  return <HomeScreenUI {...homeProps} />;
};

export default HomeScreen;
