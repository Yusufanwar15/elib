import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Vector = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.vectorPressable, style]}
      onPress={() => navigation.navigate("Inbox")}
    >
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
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
    width: 21.71,
    height: 24,
  },
});

export default Vector;
