import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../theme';

export default ScaledSheet.create({
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
    gap: '60@s',
    marginTop: '8@vs',
    marginHorizontal: '20@s',
  },
  headerImg:{
    width: '100@s',
    height: '100@vs',
  }

});
