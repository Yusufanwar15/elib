import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Sp2 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.sp2Pressable}
      onPress={() => navigation.navigate("Login")}
    >
      <Image
        style={styles.image3Icon}
        resizeMode="cover"
        source={require("../assets/image-3.png")}
      />
      <LinearGradient
        style={styles.rectangleLinearGradient}
        locations={[0, 0.48]}
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.57)"]}
        useAngle={true}
        angle={180}
      />
      <Text style={styles.selamatDatangDiPerpustakaan}>
        <Text style={styles.selamatDatangText}>Selamat Datang</Text>
        <Text style={styles.diPerpustakaanOnline}>di Perpustakaan Online</Text>
      </Text>
      <Text style={styles.selamatDatangDiAplikasiPer}>
        <Text
          style={styles.selamatDatangDi}
        >{`Selamat Datang di aplikasi `}</Text>
        <Text style={styles.perpustakaanOnlineText}>Perpustakaan Online</Text>
      </Text>
      <Image
        style={styles.rightArrow2Icon}
        resizeMode="cover"
        source={require("../assets/rightarrow-2.png")}
      />
      <Image
        style={styles.isiSplash2Icon}
        resizeMode="cover"
        source={require("../assets/isi-splash2.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image3Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 390,
    height: 844,
  },
  rectangleLinearGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 390,
    height: 851,
    backgroundColor: "transparent",
  },
  selamatDatangText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  diPerpustakaanOnline: {
    margin: 0,
  },
  selamatDatangDiPerpustakaan: {
    position: "absolute",
    top: 370,
    left: 62,
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  selamatDatangDi: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  perpustakaanOnlineText: {
    margin: 0,
  },
  selamatDatangDiAplikasiPer: {
    position: "absolute",
    top: 457,
    left: 85,
    fontSize: 16,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  rightArrow2Icon: {
    position: "absolute",
    top: 742,
    left: 306,
    width: 9,
    height: 9,
  },
  isiSplash2Icon: {
    position: "absolute",
    top: 696,
    left: 146,
    width: 82,
    height: 6,
  },
  sp2Pressable: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Sp2;
