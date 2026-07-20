import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import styles from './ChangePasswordScreen.styles';
import { ChangePasswordScreenProps } from './ChangePasswordScreen.types';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@react-native-vector-icons/ionicons';
import { colors } from '../../../theme';
import Header from './components/header';

const ChangePasswordScreenUI = (props: ChangePasswordScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.foreground }}>
      <StatusBar/>
      <View style={[styles.container,]}>
        <Header/>
      </View>
    </SafeAreaView>
  );
};

export default ChangePasswordScreenUI;
