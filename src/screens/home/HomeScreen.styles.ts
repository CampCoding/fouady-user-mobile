import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:colors.foreground,
    height:'100%'

  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerImg:{
    width: 60,
    height: 60,
  }

});
