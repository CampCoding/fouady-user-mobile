import { Text } from 'react-native';
import { colors, fonts, FontWeight } from '../theme';
import { useTranslation } from 'react-i18next';

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
        fontSize: size ?? 14,
        marginTop: marginTop ?? 0,
        marginBottom: marginBottom ?? 0,
        marginLeft: marginLeft ?? 0,
        marginRight: marginRight ?? 0,
        fontFamily: resolvedFamily,
        textAlign: textAlign ?? 'center',
      }}
    >
      {t(text)}
    </Text>
  );
}