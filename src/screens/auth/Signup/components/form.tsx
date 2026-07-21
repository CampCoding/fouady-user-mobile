import { View, Text, TextInput, TouchableOpacity } from "react-native"
import styles from "../SignupScreen.styles"
import { useTranslation } from "react-i18next"
import { colors } from "../../../../theme"
import MainText from "../../../../components/mainText"
import MainInput from "../../../../components/mainInput"
import Ionicons from "@react-native-vector-icons/ionicons"
import { SignupScreenProps } from "../SignupScreen.types"
import * as Animatable from 'react-native-animatable';
import MainButton from "../../../../components/main.bottun"

type FormProps = Pick<
  SignupScreenProps,
  | 'password'
  | 'setPassword'
  | 'newPassword'
  | 'setNewPassword'
  | 'errors'
  | 'setErrors'
  | 'handleChangePassword'
  | 'confirm_new_password'
  | 'setConfirm_new_password'
  | 'name'
  | 'setName'
  | 'phone'
  | 'setPhone'
  | 'job'
  | 'setJob'
  | 'work_place'
  | 'setWork_place'
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
  name,
  setName,
  phone,
  setPhone,
  job,
  setJob,
  work_place,
  setWork_place,
}: FormProps) => {
  const { t } = useTranslation();
  const cardFields = [
    {
      key: 'name',
      placeholder: t('name'),
      value: name,
      onChangeText: (text: string) => {
        setName(text);
        if (errors.name) {
          setErrors(prev => ({ ...prev, name: undefined }));
        }
      },
      error: errors.name,
    },
    {
      key: 'phone',
      placeholder: t('phone'),
      value: phone,
      onChangeText: (text: string) => {
        setPhone(text);
        if (errors.phone) {
          setErrors(prev => ({ ...prev, phone: undefined }));
        }
      },
      error: errors.phone,
    },
    {
      key: 'job',
      placeholder: t('job'),
      value: job,
      onChangeText: (text: string) => {
        setJob(text);
        if (errors.job) {
          setErrors(prev => ({ ...prev, job: undefined }));
        }
      },
      error: errors.job,
    },
    {
      key: 'work_place',
      placeholder: t('work_place'),
      value: work_place,
      onChangeText: (text: string) => {
        setWork_place(text);
        if (errors.work_place) {
          setErrors(prev => ({ ...prev, work_place: undefined }));
        }
      },
      error: errors.work_place,
    },
    {
      key: 'password',
      placeholder: t('password'),
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
      key: 'confirm_password',
      placeholder: t('confirm_password'),
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
            <MainButton text={'signup'} bntBorder={colors.primary} textalign='center' fontWeight="bold"/>
           </View>
    </View>
  ); 
};

export default Form