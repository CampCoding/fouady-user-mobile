import { scale, ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../theme';

export default ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:colors.background2,
    height:'100%'

  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: '60@s',
    marginHorizontal: '20@s',
    marginVertical:'10@vs'
  },
  headerImg:{
    width: '100@s',
    height: '100@vs',
  }

});
