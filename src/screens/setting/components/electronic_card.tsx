import { View } from 'react-native';
import MenuButton from '../../../components/menu.bottun';
import React from 'react';
import styles from '../SettingScreen.styles';
import MainButton from '../../../components/main.bottun';
export default function ElectronicCardSection() {
  const [selectedLang, setSelectedLang] = React.useState('ar');
  const [expandedMenu, setExpandedMenu] = React.useState<'electronic_card' | null>(null);

  return (
    <View>
     
      <MenuButton
        text="electronic_card"
        isExpanded={expandedMenu === 'electronic_card'}
        onToggle={(expanded) => setExpandedMenu(expanded ? 'electronic_card' : null)}
      />
      {
        expandedMenu === 'electronic_card' && (
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
