import React from 'react';
import { View, StatusBar } from 'react-native';
import styles from './ChangePasswordScreen.styles';
import { ChangePasswordScreenProps } from './ChangePasswordScreen.types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../theme';
import Header from './components/header';
import Form from './components/form';

const ChangePasswordScreenUI = (props: ChangePasswordScreenProps) => {
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
        />
      </View>
    </SafeAreaView>
  );
};

export default ChangePasswordScreenUI;
