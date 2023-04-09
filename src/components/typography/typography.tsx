import { StyleSheet, Text, TextStyle } from "react-native";

type TypographyProps = {
  children?: React.ReactNode;
  bodyMedium?: boolean;
  weight?: TextStyle["fontWeight"];
  color?: TextStyle["color"];
};

export const Typography: React.FC<TypographyProps> = ({
  bodyMedium,
  weight,
  children,
  color,
}) => {
  const styles = StyleSheet.flatten<TextStyle>([
    bodyMedium !== undefined && {
      fontSize: 15,
      lineHeight: 22,
    },
    weight !== undefined && { fontWeight: weight },
    color !== undefined && { color },
  ]) as TextStyle;

  return <Text style={styles}>{children}</Text>;
};
