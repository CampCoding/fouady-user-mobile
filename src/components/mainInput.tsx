import React, { ReactNode, useState } from "react";
import { TextInput, TextInputProps, View, Text } from "react-native";
import { colors } from "../theme";
import { ScaledSheet } from "react-native-size-matters";

interface MainInputProps extends TextInputProps {
    error?: string;
    rightIcon?: ReactNode;
    containerStyle?: any;
    borderColor?:string;
}

export default function MainInput({ error, rightIcon, containerStyle, style, onFocus, borderColor,onBlur, ...props }: MainInputProps) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={containerStyle}>
            <View style={[
                styles.inputContainer, 
                {
      borderColor: error
        ? '#a30407ff'
        : isFocused
        ? colors.primary
        : borderColor ?? colors.gray,
    }, 
                style
            ]}>
                <TextInput
                    style={[styles.input, rightIcon ? { flex: 1 } : null]}
                    placeholderTextColor={colors.gray}
                    onFocus={(e) => {
                        setIsFocused(true);
                        if (onFocus) onFocus(e);
                    }}
                    onBlur={(e) => {
                        setIsFocused(false);
                        if (onBlur) onBlur(e);
                    }}
                    {...props}
                />
                {rightIcon && (
                    <View style={styles.rightIconContainer}>
                        {rightIcon}
                    </View>
                )}
            </View>
            {error && (
                <Text style={styles.errorText}>{error}</Text>
            )}
        </View>
    );
}

const styles = ScaledSheet.create({
    inputContainer: {
        width: '96%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: '16@s',
        paddingVertical: '8@vs',
        marginTop:5
    },
    inputError: {
        borderColor: '#a30407ff',
    },
    inputFocused: {
        borderColor: colors.primary,
    },
    input: {
        color: colors.gray,
        fontSize: '14@ms',
        textAlign: 'right',
        paddingVertical: 0,
        paddingHorizontal: 0,
        width: '100%',
    },
    rightIconContainer: {
        marginLeft: '8@s',
        flexShrink: 0,
    },
    errorText: {
        color: '#a30407ff',
        fontSize: '12@ms',
        textAlign: 'right',
        width: '100%',
        marginTop: 4,
    },
});