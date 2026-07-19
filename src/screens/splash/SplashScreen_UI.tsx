import React from 'react';
import { View, StatusBar, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './SplashScreen.styles';
import { SplashScreenProps } from './SplashScreen.types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../theme';

const SplashScreenUI = (props: SplashScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.foreground }}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
          <Image
            source={require('../../../assets/appIcon/appIcon.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreenUI;
