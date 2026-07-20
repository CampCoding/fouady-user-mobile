import { View } from 'react-native';
import MenuButton from '../../../components/menu.bottun';
import React from 'react';
import styles from '../SettingScreen.styles';
import MainButton from '../../../components/main.bottun';
import { colors } from '../../../theme';

const LangSection = () => {
  const [selectedLang, setSelectedLang] = React.useState<'ar' | 'en'>('ar');
  const [expandedMenu, setExpandedMenu] = React.useState<'language' | null>(null);

  const languageOptions = [
    { key: 'ar', text: 'arabic' },
    { key: 'en', text: 'english' },
  ] as const;

  return (
    <View style={styles.LangSection}>
      <MenuButton
        text="language"
        isExpanded={expandedMenu === 'language'}
        onToggle={(expanded) => setExpandedMenu(expanded ? 'language' : null)}
      />

      {expandedMenu === 'language' && (
        <View style={[styles.langExpandedContainer, { gap: 10 }]}>
          {languageOptions.map(option => (
            <View key={option.key} style={{ width: '50%' }}>
              <MainButton
                text={option.text}
                textalign="left"
                bg_color={colors.text}
                bntBorder={
                  selectedLang === option.key
                    ? colors.primaryLight
                    : colors.bntBorder
                }
                onpress={() => {
                  setSelectedLang(option.key);
                }}
              />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default LangSection;