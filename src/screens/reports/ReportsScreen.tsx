import React from 'react';
import ReportsScreenUI from './ReportsScreen_UI';
import useReportsScreen from './ReportsScreen.hooks';

const ReportsScreen = () => {
  const {} = useReportsScreen();
  return <ReportsScreenUI />;
};

export default ReportsScreen;
