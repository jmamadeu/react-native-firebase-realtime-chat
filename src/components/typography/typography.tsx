import { StyleSheet, Text, TextProps, TextStyle } from "react-native";

type TypographyProps = TextProps & {
  children?: React.ReactNode;
  bodyMedium?: boolean;
  weight?: TextStyle["fontWeight"];
  color?: TextStyle["color"];
  link?: boolean;
  p?: boolean;
};

export const Typography: React.FC<TypographyProps> = ({
  bodyMedium,
  weight,
  children,
  color,
  link,
  p,
  style,
  ...props
}) => {
  const styles = StyleSheet.flatten<TextStyle>([
    bodyMedium !== undefined && {
      fontSize: 15,
      lineHeight: 22,
    },
    weight !== undefined && { fontWeight: weight },
    color !== undefined && { color },
    link !== undefined && {
      color: "#0A77FF",
    },
    p !== undefined && {
      textAlign: "center",
      color: "#5A6472",
      fontSize: 14,
      fontWeight: "500",
    },
  ]) as TextStyle;

  return (
    <Text style={[styles, style]} {...props}>
      {children}
    </Text>
  );
};
