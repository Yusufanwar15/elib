import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Logout1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.logout1Pressable, style]}
      onPress={() => navigation.navigate("Login")}
    >
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/logout-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  logout1Pressable: {
    position: "relative",
    width: 32,
    height: 32,
  },
});

export default Logout1;
