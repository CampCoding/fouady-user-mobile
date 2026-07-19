import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './SettingScreen.styles';
import { SettingScreenProps } from './SettingScreen.types';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingScreenUI = (props: SettingScreenProps) => {
  return (
    <SafeAreaView>
      <StatusBar/>
      <View style={styles.container}>
        <Text>Setting Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreenUI;
