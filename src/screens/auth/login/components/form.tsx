import { View, Text, TextInput, TouchableOpacity } from "react-native"
import styles from "../LoginScreen.styles"
import { useTranslation } from "react-i18next"
import { colors } from "../../../../theme"
import MainText from "../../../../components/mainText"
import Ionicons from "@react-native-vector-icons/ionicons"
import { LoginScreenProps } from "../LoginScreen.types"

type FormProps = Pick<
  LoginScreenProps,
  | 'secure'
  | 'setSecure'
  | 'password'
  | 'setPassword'
  | 'phoneNumber'
  | 'setPhoneNumber'
  | 'errors'
  | 'setErrors'
  | 'handleLogin'
>;

const Form = ({
  secure,
  setSecure,
  password,
  setPassword,
  phoneNumber,
  setPhoneNumber,
  errors,
  setErrors,
  handleLogin,
}: FormProps) => {
    const { t } = useTranslation()

    return (
        <View style={styles.form}>
            <TextInput
                style={[styles.formInput, errors.phoneNumber && styles.formInputError]}
                placeholder={t('phone_number')}
                placeholderTextColor={colors.gray}
                value={phoneNumber}
                onChangeText={(text) => {
                    setPhoneNumber(text);
                    if (errors.phoneNumber) {
                        setErrors(prev => ({ ...prev, phoneNumber: undefined }));
                    }
                }}
            />
            {errors.phoneNumber && (
                <Text style={styles.errorText}>{errors.phoneNumber}</Text>
            )}

            <View style={[styles.passwordContainer, errors.password && styles.formInputError]}>
                 <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setSecure(!secure)}
                    accessibilityRole="button"
                    accessibilityLabel={secure ? 'Show password' : 'Hide password'}
                >
                    <Ionicons
                        name={secure ? 'eye-off-outline' : 'eye-outline'}
                        size={22}
                        color={colors.gray}
                    />
                </TouchableOpacity>
                <TextInput
                    style={styles.passwordInput}
                    placeholder={t('password')}
                    placeholderTextColor={colors.gray}
                    secureTextEntry={secure}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={password}
                    onChangeText={(text) => {
                        setPassword(text);
                        if (errors.password) {
                            setErrors(prev => ({ ...prev, password: undefined }));
                        }
                    }}
                />
               
            </View>
            {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <View style={[styles.content, { backgroundColor: '#1a1613', margin: 0, padding: 5 }]}>

                <MainText text="first_time_login_hint" size={14} color={colors.gray} />
            </View>
            <TouchableOpacity style={styles.formBtn} onPress={handleLogin}>
                <Text style={styles.formBtnText}>{t('login')}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Form