import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Vector1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.vectorPressable, style]}
      onPress={() => navigation.navigate("Profil")}
    >
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
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
    width: 26.05,
    height: 24.71,
  },
});

export default Vector1;
