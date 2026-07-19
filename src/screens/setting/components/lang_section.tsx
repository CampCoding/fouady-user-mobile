import { View } from 'react-native';
import MenuButton from '../../../components/menu.bottun';
import React from 'react';
import styles from '../SettingScreen.styles';
import MainButton from '../../../components/main.bottun';

const LangSection = () => {
  const [selectedLang, setSelectedLang] = React.useState('ar');
  const [expandedMenu, setExpandedMenu] = React.useState<'language' | null>(null);

  return (
    <View style={{width: '100%',alignItems: 'center',}}>
      <MenuButton
        text="language"
        isExpanded={expandedMenu === 'language'}
        onToggle={(expanded) => setExpandedMenu(expanded ? 'language' : null)}
      />
      {
        expandedMenu === 'language' && (
          <View style={styles.langExpandedContainer}>
            <View style={{width: '50%'}}>
              <MenuButton
                text="arabic"
                isExpanded={selectedLang === 'ar'}
                onToggle={() => setSelectedLang('ar')}
                
              />
            </View>
            <View style={{width: '50%'}}>
              <MainButton text="language" textalign="right"/>
            </View>           
          </View>
        )
      }
    </View>
  );
};

export default LangSection;