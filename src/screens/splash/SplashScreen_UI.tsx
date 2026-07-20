import React from 'react';
import { View, StatusBar, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './SplashScreen.styles';
import { SplashScreenProps } from './SplashScreen.types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../theme';
import MainText from '../../components/mainText';

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
          <MainText text='app_name' color={colors.white} fontWeight='bold' size={35} marginTop={-20} textAlign='center'/>
          <MainText text='child_heart' color={colors.primary} fontWeight='bold' size={20} marginTop={-10} textAlign='center'/>
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreenUI;
