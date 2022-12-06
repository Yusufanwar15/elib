import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Vector2 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.vectorPressable, style]}
      onPress={() => navigation.navigate("Keranjang")}
    >
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  vectorPressable: {
    position: "relative",
    width: 33.28,
    height: 23.68,
  },
});

export default Vector2;
