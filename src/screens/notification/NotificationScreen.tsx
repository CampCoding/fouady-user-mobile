import React from 'react';
import NotificationScreenUI from './NotificationScreen_UI';
import useNotificationScreen from './NotificationScreen.hooks';

const NotificationScreen = () => {
  const {} = useNotificationScreen();
  return <NotificationScreenUI />;
};

export default NotificationScreen;
