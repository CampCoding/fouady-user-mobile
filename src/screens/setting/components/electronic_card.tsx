import { Animated, View } from 'react-native';
import MenuButton from '../../../components/menu.bottun';
import React from 'react';
import styles from '../SettingScreen.styles';
import MainButton from '../../../components/main.bottun';
import MainInput from '../../../components/mainInput';
import { t } from 'i18next';
import { SettingScreenProps } from '../SettingScreen.types';
import { colors } from '../../../theme';
import * as Animatable from 'react-native-animatable';

export default function ElectronicCardSection({
  cardNumber,
  setCardNumber,
  expiryDate,
  setExpiryDate,
  cardHolderName,
  setCardHolderName,
  errors,
  setErrors,
  cvv,
  setCvv,
}: SettingScreenProps) {
  const [selectedLang, setSelectedLang] = React.useState('ar');
  const [expandedMenu, setExpandedMenu] = React.useState<'electronic_card' | null>(null);

  const cardFields = [
    {
      key: 'cardNumber',
      placeholder: t('card_number'),
      value: cardNumber,
      keyboardType: 'numeric' as const,
      onChangeText: (text: string) => {
        setCardNumber(text);
        if (errors.cardNumber) {
          setErrors(prev => ({ ...prev, cardNumber: undefined }));
        }
      },
      error: errors.cardNumber,
      label: 'card_number',
      borderColor: colors.bntBorder,
    },
    {
      key: 'expiryDate',
      placeholder: t('expiry_date'),
      value: expiryDate,
      onChangeText: (text: string) => {
        setExpiryDate(text);
        if (errors.expiryDate) {
          setErrors(prev => ({ ...prev, expiryDate: undefined }));
        }
      },
      error: errors.expiryDate,
      label: 'expiry_date',
      borderColor: colors.bntBorder,
    },
    {
      key: 'cardHolderName',
      placeholder: t('card_holder_name'),
      value: cardHolderName,
      onChangeText: (text: string) => {
        setCardHolderName(text);
        if (errors.cardHolderName) {
          setErrors(prev => ({ ...prev, cardHolderName: undefined }));
        }
      },
      error: errors.cardHolderName,
      label: 'card_holder_name',
      borderColor: colors.bntBorder,
    },
    {
      key: 'cvv',
      placeholder: t('CVV'),
      value: cvv,
      keyboardType: 'numeric' as const,
      onChangeText: (text: string) => {
        setCvv(text);
        if (errors.cvv) {
          setErrors(prev => ({ ...prev, cvv: undefined }));
        }
      },
      error: errors.cvv,
      label: 'CVV',
      borderColor: colors.bntBorder,
    },
  ];

  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <MenuButton
        text="electronic_card"
        isExpanded={expandedMenu === 'electronic_card'}
        onToggle={(expanded) => setExpandedMenu(expanded ? 'electronic_card' : null)}
      />

      {expandedMenu === 'electronic_card' && (
        <View>
          <View style={[styles.langExpandedContainer]}>
            <View style={{ width: '50%' }}>
              <MenuButton
                text="master_card"
                isExpanded={selectedLang === 'ar'}
                onToggle={() => setSelectedLang('ar')}
              />
            </View>
            <View style={{ width: '50%' }}>
              <MainButton text="card_type" textalign="left" bg_color={colors.text} bntBorder={colors.bntBorder}/>
            </View>
          </View>

          {cardFields.map((field, index) => (
            <Animatable.View animation="fadeIn" duration={1000*index} key={field.key} style={styles.langExpandedContainer}>
              <View style={{ width: '50%' }}>
                <MainInput
                  placeholder={field.placeholder}
                  value={field.value}
                  keyboardType={field.keyboardType}
                  onChangeText={field.onChangeText}
                  error={field.error}
                  borderColor={colors.inputBorder}
                />
              </View>
              <View style={{ width: '50%' }}>
                <MainButton text={field.label} textalign="left" bg_color={colors.text} bntBorder={colors.labelBorder}/>
              </View>
            </Animatable.View>
          ))}

          <View style={styles.saveBnt}>
            <MainButton
              text="save_card"
              textalign="center"
              bg_color={colors.primary}
              font_color={colors.text}
              fontWeight="bold"
              bntBorder={colors.bntBorder}
            />
          </View>
        </View>
      )}
    </View>
  );
}
