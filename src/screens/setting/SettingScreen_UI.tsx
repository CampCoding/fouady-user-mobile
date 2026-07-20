import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './SettingScreen.styles';
import { SettingScreenProps } from './SettingScreen.types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../theme';
import MainCard from '../../components/mainCard';
import SecondCard from '../../components/secondCard';
import LangSection from './components/lang_section';
import ElectronicCardSection from './components/electronic_card';
import MainButton from '../../components/main.bottun';

const SettingScreenUI = (props: SettingScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background2 }}>
      <StatusBar/>
      <View style={styles.container}>
        <SecondCard text='settings' icon='settings-outline' width={100} />
        <LangSection/>
        <ElectronicCardSection {...props}/>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreenUI;
