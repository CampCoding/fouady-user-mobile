import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './SignupScreen.styles';
import { SignupScreenProps } from './SignupScreen.types';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignupScreenUI = (props: SignupScreenProps) => {
  return (
    <SafeAreaView>
      <StatusBar/>
      <View style={styles.container}>
        <Text>Signup Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreenUI;
