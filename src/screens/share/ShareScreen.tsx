import React from 'react';
import ShareScreenUI from './ShareScreen_UI';
import useShareScreen from './ShareScreen.hooks';

const ShareScreen = () => {
  const {} = useShareScreen();
  return <ShareScreenUI />;
};

export default ShareScreen;
