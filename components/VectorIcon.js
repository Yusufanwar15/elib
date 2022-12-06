import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const VectorIcon = ({ style }) => {
  return (
    <Image
      style={[styles.vectorIcon, style]}
      resizeMode="cover"
      source={require("../assets/vector3.png")}
    />
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "relative",
    width: 28.42,
    height: 24.71,
  },
});

export default VectorIcon;
