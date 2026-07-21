import { View, Text, TextInput, TouchableOpacity } from "react-native"
import styles from "../ChangePasswordScreen.styles"
import { useTranslation } from "react-i18next"
import { colors } from "../../../../theme"
import MainText from "../../../../components/mainText"
import MainInput from "../../../../components/mainInput"
import Ionicons from "@react-native-vector-icons/ionicons"
import { ChangePasswordScreenProps } from "../ChangePasswordScreen.types"
import * as Animatable from 'react-native-animatable';
import MainButton from "../../../../components/main.bottun"

type FormProps = Pick<
  ChangePasswordScreenProps,
  | 'password'
  | 'setPassword'
  | 'newPassword'
  | 'setNewPassword'
  | 'errors'
  | 'setErrors'
  | 'handleChangePassword'
  | 'confirm_new_password'
  | 'setConfirm_new_password'

>;

const Form = ({
  password,
  setPassword,
  errors,
  setErrors,
  newPassword,
  setNewPassword,
  handleChangePassword,
  confirm_new_password,
  setConfirm_new_password,
}: FormProps) => {
  const { t } = useTranslation();
  const cardFields = [
    {
      key: 'current_password',
            placeholder: t('current_password'),
            value: password,
            onChangeText: (text: string) => {
              setPassword(text);
              if (errors.password) {
                setErrors(prev => ({ ...prev, password: undefined }));
              }
            },
            error: errors.password,
    },
    {
      key: 'enter_new_password',
            placeholder: t('enter_new_password'),
            value: newPassword,
            onChangeText: (text: string) => {
              setNewPassword(text);
              if (errors.newPassword) {
                setErrors(prev => ({ ...prev, newPassword: undefined }));
              }
            },
            error: errors.newPassword,
    },
    {
      key: 'confirm_new_password',
            placeholder: t('confirm_new_password'),
            value: confirm_new_password,
            onChangeText: (text: string) => {
              setConfirm_new_password(text);
              if (errors.confirm_new_password) {
                setErrors(prev => ({ ...prev, confirm_new_password: undefined }));
              }
            },
            error: errors.confirm_new_password,
    },
  ]

  return (
    <View style={styles.form}>
      
       {cardFields.map((field, index) => (
            <Animatable.View animation="fadeIn" style={styles.form} duration={1000*index} key={field.key}>
              <MainInput
        placeholder={field.placeholder}
        borderColor={colors.inputBorder}
        bg_color={colors.second_background}
        value={field.value}
        onChangeText={field.onChangeText}
        error={field.error}
      />
            </Animatable.View>
           
          ))}
          
           <View style={styles.submitButton}>
            <MainButton text={'save_changes'} bntBorder={colors.primary} textalign='center' fontWeight="bold"/>
           </View>
    </View>
  ); 
};

export default Form