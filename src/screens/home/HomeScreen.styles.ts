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
    alignItems: 'center',
    width: '100%',
    gap: 100,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  headerImg:{
    width: 100,
    height: 100,
  }

});
