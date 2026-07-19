import React from 'react';
import HomeScreenUI from './HomeScreen_UI';
import useHomeScreen from './HomeScreen.hooks';

const HomeScreen = () => {
  const {} = useHomeScreen();
  return <HomeScreenUI />;
};

export default HomeScreen;
