import { Image, StyleSheet, Text, View } from 'react-native';
import styles from '../HomeScreen.styles';
import MainText from '../../../components/mainText';
import Images from '../../../utils/images';
import { colors } from '../../../theme';
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <MainText text="مراكز فؤادي" color={colors.white}  size={20} fontWeight="bold" />
        <MainText text="لقلب الاطفال" color={colors.white} size={16} />
      </View>
      <Image source={Images.logo} style={styles.headerImg} resizeMode="contain"/>
    </View>
  );
};

export default Header;
