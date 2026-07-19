import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './ProfileScreen.styles';
import { ProfileScreenProps } from './ProfileScreen.types';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreenUI = (props: ProfileScreenProps) => {
  return (
    <SafeAreaView>
      <StatusBar/>
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreenUI;
