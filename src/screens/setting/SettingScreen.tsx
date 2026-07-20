import React from 'react';
import SettingScreenUI from './SettingScreen_UI';
import useSettingScreen from './SettingScreen.hooks';

const SettingScreen = () => {
  const settingProps = useSettingScreen();
  return <SettingScreenUI {...settingProps} />;
};

export default SettingScreen;
