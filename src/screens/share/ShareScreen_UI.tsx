import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './ShareScreen.styles';
import { ShareScreenProps } from './ShareScreen.types';
import { SafeAreaView } from 'react-native-safe-area-context';

const ShareScreenUI = (props: ShareScreenProps) => {
  return (
    <SafeAreaView>
      <StatusBar/>
      <View style={styles.container}>
        <Text>Share Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ShareScreenUI;
