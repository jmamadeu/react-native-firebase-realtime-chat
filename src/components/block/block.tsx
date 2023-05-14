import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";

type BlockProps = ViewProps & {
  row?: boolean;
  justifyContent?: ViewStyle["justifyContent"];
  alignItems?: ViewStyle["alignItems"];
  flex?: ViewStyle["flex"];
  height?: ViewStyle["height"];
  h?: ViewStyle["height"];
  marginTop?: ViewStyle["marginTop"];
  mt?: ViewStyle["marginTop"];
  backgroundColor?: ViewStyle["backgroundColor"];
  bg?: ViewStyle["backgroundColor"];
  paddingHorizontal?: ViewStyle["paddingHorizontal"];
  px?: ViewStyle["paddingHorizontal"];
  borderBottomWidth?: ViewStyle["borderBottomWidth"];
  borderBottomColor?: ViewStyle["borderBottomColor"];
  borderTopWidth?: ViewStyle["borderTopWidth"];
  borderTopColor?: ViewStyle["borderTopColor"];
  gap?: ViewStyle["gap"];
  paddingVertical?: ViewStyle["paddingVertical"];
  py?: ViewStyle["paddingVertical"];
  sentMessage?: boolean;
  receivedMessage?: boolean;
  center?: boolean;
};

export const Block: React.FC<BlockProps> = ({
  row,
  justifyContent,
  flex,
  height,
  h,
  marginTop,
  mt,
  backgroundColor,
  bg,
  paddingHorizontal,
  px,
  borderBottomWidth,
  borderBottomColor,
  borderTopColor,
  borderTopWidth,
  alignItems,
  gap,
  paddingVertical,
  py,
  sentMessage,
  receivedMessage,
  center,
  ...props
}) => {
  const styles = StyleSheet.flatten<ViewStyle>([
    row !== undefined && {
      flexDirection: "row",
    },
    justifyContent !== undefined && {
      justifyContent,
    },
    flex !== undefined && { flex },
    (height || h) !== undefined && { height: height ?? h },
    (marginTop || mt) !== undefined && { marginTop: marginTop ?? mt },
    (bg || backgroundColor) !== undefined && {
      backgroundColor: backgroundColor ?? bg,
    },
    (px || paddingHorizontal) !== undefined && {
      paddingHorizontal: paddingHorizontal ?? px,
    },
    borderBottomWidth !== undefined && {
      borderBottomWidth,
    },
    borderBottomColor !== undefined && { borderBottomColor },
    borderTopColor !== undefined && { borderTopColor },
    borderTopWidth !== undefined && { borderTopWidth },
    alignItems !== undefined && { alignItems },
    gap !== undefined && { gap },
    (paddingVertical || py) !== undefined && {
      paddingVertical: paddingVertical ?? py,
    },
    sentMessage !== undefined && {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      backgroundColor: "#437EF7",
    },
    receivedMessage !== undefined && {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      backgroundColor: "#F7F7F8",
    },
    center !== undefined && {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  ]) as ViewStyle;

  return <View style={styles} {...props} />;
};
