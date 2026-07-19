import React from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import styles from './LoginScreen.styles';
import { LoginScreenProps } from './LoginScreen.types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../theme';
import LangBtn from './components/langBnt';
import ContectSection from './components/contectSection';
import SelectType from './components/selectType';
import Form from './components/form';
import FooterSection from './components/footerSection';

const LoginScreenUI = (props: LoginScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.foreground }}>
      <StatusBar />
      <View style={styles.container}>
        <Animatable.View animation="fadeInUp" duration={1000}>
        <LangBtn />
        </Animatable.View>

      <Animatable.View animation="fadeInUp" duration={1000} style={styles.content}>
         <ContectSection />
         <SelectType 
           selectedType={props.selectedType} 
           setSelectedType={props.setSelectedType} 
         />
         <Form 
           secure={props.secure}
           setSecure={props.setSecure}
           password={props.password}
           setPassword={props.setPassword}
           phoneNumber={props.phoneNumber}
           setPhoneNumber={props.setPhoneNumber}
           errors={props.errors}
           setErrors={props.setErrors}
           handleLogin={props.handleLogin}
         />
         <FooterSection
           handleNavToSignup={props.handleNavToSignup}
           handleNavToForgetPassword={props.handleNavToForgetPassword}
           handleNavToChangePassword={props.handleNavToChangePassword}
         />
      </Animatable.View>
        
      </View>
    </SafeAreaView>
  );
};

export default LoginScreenUI;
