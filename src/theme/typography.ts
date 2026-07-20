import { TextStyle } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

/**
 * Cairo font family names as registered in native (Android assets & iOS Info.plist).
 * Use these directly in `fontFamily` style props.
 */
export const fonts = {
  black:      'Cairo-Black',
  extraBold:  'Cairo-ExtraBold',
  bold:       'Cairo-Bold',
  semiBold:   'Cairo-SemiBold',
  medium:     'Cairo-Medium',
  regular:    'Cairo-Regular',
  light:      'Cairo-Light',
  extraLight: 'Cairo-ExtraLight',
} as const;

export type FontWeight = keyof typeof fonts;

export const typography: { [key: string]: TextStyle } = {
  h1: {
    fontSize: moderateScale(32),
    fontFamily: fonts.bold,
  },
  h2: {
    fontSize: moderateScale(24),
    fontFamily: fonts.bold,
  },
  h3: {
    fontSize: moderateScale(20),
    fontFamily: fonts.semiBold,
  },
  body: {
    fontSize: moderateScale(16),
    fontFamily: fonts.regular,
  },
  bodySecondary: {
    fontSize: moderateScale(14),
    fontFamily: fonts.regular,
  },
  button: {
    fontSize: moderateScale(16),
    fontFamily: fonts.semiBold,
  },
  caption: {
    fontSize: moderateScale(12),
    fontFamily: fonts.light,
  },
};
