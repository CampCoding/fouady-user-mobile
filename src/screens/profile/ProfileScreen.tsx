import React from 'react';
import ProfileScreenUI from './ProfileScreen_UI';
import useProfileScreen from './ProfileScreen.hooks';

const ProfileScreen = () => {
  const {} = useProfileScreen();
  return <ProfileScreenUI />;
};

export default ProfileScreen;
