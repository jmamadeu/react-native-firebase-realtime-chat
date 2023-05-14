import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { Typography } from "../typography";

type ButtonProps = PressableProps & {
  social?: boolean;
  bg?: ViewStyle["backgroundColor"];
  color?: string;
};

export const Button: React.FC<ButtonProps> = ({
  social,
  children,
  bg,
  color,
  ...props
}) => {
  const styles = StyleSheet.flatten<ViewStyle>([
    social !== undefined && {
      borderWidth: 1,
      borderColor: "#D6D7DD",
      alignItems: "center",
      height: 48,
      justifyContent: "center",
      borderRadius: 10,
      width: "100%",
    },
    bg !== undefined && {
      backgroundColor: bg,
    },
  ]) as StyleProp<ViewStyle>;

  return (
    <Pressable style={styles} {...props}>
      {typeof children === "string" ? (
        <Typography
          color={color ?? "#323539"}
          style={{ fontSize: 16, fontWeight: "600" }}
        >
          {children}
        </Typography>
      ) : (
        children
      )}
    </Pressable>
  );
};
