import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './HomeScreen.styles';
import { HomeScreenProps } from './HomeScreen.types';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/header';
import { colors } from '../../theme';

const HomeScreenUI = (props: HomeScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.foreground }}>
      <StatusBar/>
      <View style={styles.container}>
        <Header/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreenUI;
