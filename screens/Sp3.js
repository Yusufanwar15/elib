import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Sp3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sp3View}>
      <Image
        style={styles.image4Icon}
        resizeMode="cover"
        source={require("../assets/image-4.png")}
      />
      <LinearGradient
        style={styles.rectangleLinearGradient}
        locations={[0, 0.48]}
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.57)"]}
        useAngle={true}
        angle={180}
      />
      <Text style={styles.pUSHLINEText}>PUSHLINE</Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Login")}
      />
      <Text style={styles.mulaiText}>Mulai</Text>
      <View style={styles.rectangleView} />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image4Icon: {
    position: "absolute",
    top: 0,
    left: 1.03,
    width: 395,
    height: 831,
  },
  rectangleLinearGradient: {
    position: "absolute",
    top: 3.76,
    left: -0.97,
    width: 395,
    height: 840,
    backgroundColor: "transparent",
  },
  pUSHLINEText: {
    position: "absolute",
    top: 382,
    left: 132,
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  rectanglePressable: {
    position: "absolute",
    top: 717,
    left: 43,
    borderRadius: 15,
    backgroundColor: "#d7922b",
    width: 289,
    height: 59,
  },
  mulaiText: {
    position: "absolute",
    top: 735,
    left: 163,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  rectangleView: {
    position: "absolute",
    top: 697,
    left: 222,
    borderRadius: 15,
    backgroundColor: "#d7922b",
    width: 46,
    height: 6,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  ellipseIcon: {
    position: "absolute",
    top: 697,
    left: 164,
    width: 6,
    height: 6,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 697,
    left: 153,
    width: 6,
    height: 6,
  },
  sp3View: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Sp3;
