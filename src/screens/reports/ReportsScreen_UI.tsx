import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './ReportsScreen.styles';
import { ReportsScreenProps } from './ReportsScreen.types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../theme';

const ReportsScreenUI = (props: ReportsScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.foreground }}>
      <StatusBar/>
      <View style={styles.container}>
        <Text>Reports Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ReportsScreenUI;
