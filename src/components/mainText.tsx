import { I18nManager, Text } from 'react-native';
import { colors, fonts, FontWeight } from '../theme';
import { useTranslation } from 'react-i18next';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

interface MainTextProps {
  text: string;
  fontWeight?: FontWeight;
  size?: number;
  color?: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  textAlign?: 'left' | 'right' | 'center' | 'auto' | 'justify';
}

export default function MainText({
  text,
  fontWeight,
  size,
  color,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  textAlign,
}: MainTextProps) {
  const { t } = useTranslation();
  const resolvedFamily = fontWeight ? fonts[fontWeight as FontWeight] : fonts.regular;

  return (
    <Text
      style={{
        color: color ?? colors.white,
        fontSize: moderateScale(size ?? 14),
        marginTop: verticalScale(marginTop ?? 0),
        marginBottom: verticalScale(marginBottom ?? 0),
        marginLeft: scale(marginLeft ?? 0),
        marginRight: scale(marginRight ?? 0),
        fontFamily: resolvedFamily,
        textAlign: textAlign ?? 'auto',
        writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
      }}
    >
      {t(text)}
    </Text>
  );
}