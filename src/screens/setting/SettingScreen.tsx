import React from 'react';
import SettingScreenUI from './SettingScreen_UI';
import useSettingScreen from './SettingScreen.hooks';

const SettingScreen = () => {
  const {} = useSettingScreen();
  return <SettingScreenUI />;
};

export default SettingScreen;
