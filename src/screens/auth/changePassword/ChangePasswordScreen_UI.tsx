import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import styles from './ChangePasswordScreen.styles';
import { ChangePasswordScreenProps } from './ChangePasswordScreen.types';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@react-native-vector-icons/ionicons';
import { colors } from '../../../theme';

const ChangePasswordScreenUI = (props: ChangePasswordScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.foreground }}>
      <StatusBar/>
      <View style={[styles.container, { padding: 20 }]}>
        <TouchableOpacity style={{ alignSelf: 'flex-start', marginBottom: 20 }} onPress={props.goBack}>
          <Ionicons name="arrow-back-outline" size={28} color={colors.primary} />
        </TouchableOpacity>
        <Text style={{ color: colors.white }}>ChangePassword Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ChangePasswordScreenUI;
