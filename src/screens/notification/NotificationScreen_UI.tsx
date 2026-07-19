import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './NotificationScreen.styles';
import { NotificationScreenProps } from './NotificationScreen.types';
import { SafeAreaView } from 'react-native-safe-area-context';

const NotificationScreenUI = (props: NotificationScreenProps) => {
  return (
    <SafeAreaView>
      <StatusBar/>
      <View style={styles.container}>
        <Text>Notification Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreenUI;
