import { Image, StyleSheet, Text, View } from 'react-native';
import styles from '../HomeScreen.styles';
import MainText from '../../../components/mainText';
import Images from '../../../utils/images';
import { colors } from '../../../theme';
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={Images.logo} style={styles.headerImg} resizeMode="contain"/>
      <View>
        <MainText text="مراكز فؤادي" color={colors.white}  size={24} fontWeight="bold" />
        <MainText text="لقلب الاطفال" color={colors.primary} size={18} fontWeight="bold" textAlign="center" marginTop={-5}/>
      </View>
    </View>
  );
};

export default Header;
