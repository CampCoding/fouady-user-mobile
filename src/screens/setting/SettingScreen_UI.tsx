import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './SettingScreen.styles';
import { SettingScreenProps } from './SettingScreen.types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../theme';
import MainCard from '../../components/mainCard';

const SettingScreenUI = (props: SettingScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.lightBlack }}>
      <StatusBar/>
      <View style={styles.container}>
        <MainCard text='الإعدادات' icon='settings' width={100} />
      </View>
    </SafeAreaView>
  );
};

export default SettingScreenUI;
