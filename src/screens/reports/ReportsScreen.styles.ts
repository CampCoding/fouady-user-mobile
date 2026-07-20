import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../theme';

export default ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.foreground,
  },
});
