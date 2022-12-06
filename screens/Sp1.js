import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Sp1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sp1View}>
      <Image
        style={styles.image2Icon}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <LinearGradient
        style={styles.rectangleLinearGradient}
        locations={[0, 0.61]}
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.61)"]}
        useAngle={true}
        angle={180}
      />
      <Text style={styles.memudahkanDalamMencariIlmu}>PUSHLINE</Text>
      <Pressable
        style={styles.lewatiPressable}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.lewatiText}>Lewati</Text>
      </Pressable>
      <Text style={styles.nikmatiFasilitasMudahAkses}>
        <Text
          style={styles.nikmatiFasilitasMudah}
        >{`Nikmati fasilitas mudah akses ke `}</Text>
        <Text style={styles.perpustakaanOnlineText}>Perpustakaan Online</Text>
      </Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Sp2")}
      />
      <Text style={styles.selanjutnyaText}>Selanjutnya</Text>
      <Image
        style={styles.rightArrow2Icon}
        resizeMode="cover"
        source={require("../assets/rightarrow-2.png")}
      />
      <Image
        style={styles.slideSpplashIcon}
        resizeMode="cover"
        source={require("../assets/slide-spplash.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image2Icon: {
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
    height: 844,
    backgroundColor: "transparent",
  },
  memudahkanDalamMencariIlmu: {
    position: "absolute",
    top: 382,
    left: 132,
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  lewatiText: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  lewatiPressable: {
    position: "absolute",
    left: 297,
    top: 26,
  },
  nikmatiFasilitasMudah: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  perpustakaanOnlineText: {
    margin: 0,
  },
  nikmatiFasilitasMudahAkses: {
    position: "absolute",
    top: 457,
    left: 62,
    fontSize: 16,
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
  selanjutnyaText: {
    position: "absolute",
    top: 735,
    left: 135,
    fontSize: 18,
    fontWeight: "700",
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
  slideSpplashIcon: {
    position: "absolute",
    top: 696,
    left: 153,
    width: 69,
    height: 6,
  },
  sp1View: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Sp1;
