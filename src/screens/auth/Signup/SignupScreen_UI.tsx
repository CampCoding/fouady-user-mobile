import React from 'react';
import { View, StatusBar } from 'react-native';
import styles from './SignupScreen.styles';
import { SignupScreenProps } from './SignupScreen.types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../theme';
import Header from './components/header';
import Form from './components/form';

const SignupScreenUI = (props: SignupScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background2 }}>
      <StatusBar />
      <View style={[styles.container]}>
        <Header />
        <Form
          password={props.password}
          setPassword={props.setPassword}
          newPassword={props.newPassword}
          setNewPassword={props.setNewPassword}
          errors={props.errors}
          setErrors={props.setErrors}
          handleChangePassword={props.handleChangePassword}
          confirm_new_password={props.confirm_new_password}
          setConfirm_new_password={props.setConfirm_new_password}
          name={props.name}
          setName={props.setName}
          phone={props.phone}
          setPhone={props.setPhone}
          job={props.job}
          setJob={props.setJob}
          work_place={props.work_place}
          setWork_place={props.setWork_place}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupScreenUI;
