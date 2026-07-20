import { View, Text, Pressable } from "react-native"
import { colors } from "../../../../theme"
import MainText from "../../../../components/mainText"
import { useTranslation } from "react-i18next"
import styles from "../LoginScreen.styles"
import { useState } from "react"
import Ionicons from "@react-native-vector-icons/ionicons"

type AccountType = 'patient' | 'doctor'

type IconName = 'person-outline' | 'medkit-outline'

type SelectTypeProps = {
    selectedType: AccountType;
    setSelectedType: (type: AccountType) => void;
};

const SelectType = ({ selectedType, setSelectedType }: SelectTypeProps) => {
    const { t } = useTranslation()

    const accountOptions: Array<{ key: AccountType; icon: IconName; label: string }> = [
        { key: 'patient', icon: 'person-outline', label: 'patient' },
        { key: 'doctor', icon: 'medkit-outline', label: 'doctor' },
    ]

    return (
        <View style={styles.SelectType}>
            {accountOptions.map((option) => {
                const isActive = selectedType === option.key

                return (
                    <Pressable
                        key={option.key}
                        style={{ flex: 1 }}
                        onPress={() => setSelectedType(option.key)}
                    >
                        <View style={isActive ? styles.activeTypeBnt : styles.typeBnt}>
                            <Ionicons
                                name={option.icon}
                                size={24}
                                color={isActive ? colors.lightBlack : colors.white}
                            />
                            <MainText
                                text={option.label}
                                size={18}
                                color={isActive ? colors.lightBlack : colors.white}
                                marginTop={-5}
                                marginBottom={-5}
                                fontWeight='bold'
                            />
                            <Text style={isActive ? styles.activeTypeDes : styles.typeDes}>
                                {t(option.label==='doctor' ? 'reports' : 'Schedule')}
                            </Text>
                        </View>
                    </Pressable>
                )
            })}
        </View>
    )
}

export default SelectType
