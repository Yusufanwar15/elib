import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  StatusBar,
  Text,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginView}>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-17.png")}
      />
      <View style={styles.rectangleView} />
      <StatusBar barStyle="default" />
      <Text style={styles.wELCOMEPUSHLINEDUTABANGSA}>
        <Text style={styles.wELCOMEText}>WELCOME</Text>
        <Text style={styles.pUSHLINEDUTABANGSA}>PUSHLINE DUTA BANGSA</Text>
      </Text>
      <View style={styles.frameView} />
      <Text style={styles.masukText}>Masuk</Text>
      <Text style={styles.emailText}>Email</Text>
      <Text style={styles.passwordText}>Password</Text>
      <Text style={styles.ingatSayaText}>Ingat Saya</Text>
      <Text style={styles.lupaPasswordText}>Lupa Password</Text>
      <Pressable
        style={styles.daftarPressable}
        onPress={() => navigation.navigate("Sugup")}
      >
        <Text style={styles.daftarText}>Daftar</Text>
      </Pressable>
      <Text style={styles.perpustakaanDigitalText}>Perpustakaan Digital</Text>
      <View style={styles.rectangleView1} />
      <View style={styles.rectangleView2} />
      <Text style={styles.yusufanwargmailcomText}>yusufanwar@gmail.com</Text>
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        source={require("../assets/ellipse-181.png")}
      />
      <Image
        style={styles.ellipseIcon2}
        resizeMode="cover"
        source={require("../assets/ellipse-181.png")}
      />
      <Image
        style={styles.ellipseIcon3}
        resizeMode="cover"
        source={require("../assets/ellipse-181.png")}
      />
      <Image
        style={styles.ellipseIcon4}
        resizeMode="cover"
        source={require("../assets/ellipse-181.png")}
      />
      <Image
        style={styles.ellipseIcon5}
        resizeMode="cover"
        source={require("../assets/ellipse-181.png")}
      />
      <Image
        style={styles.ellipseIcon6}
        resizeMode="cover"
        source={require("../assets/ellipse-181.png")}
      />
      <Image
        style={styles.ellipseIcon7}
        resizeMode="cover"
        source={require("../assets/ellipse-181.png")}
      />
      <Image
        style={styles.ellipseIcon8}
        resizeMode="cover"
        source={require("../assets/ellipse-181.png")}
      />
      <Image
        style={styles.ellipseIcon9}
        resizeMode="cover"
        source={require("../assets/ellipse-181.png")}
      />
      <Image
        style={styles.ellipseIcon10}
        resizeMode="cover"
        source={require("../assets/ellipse-181.png")}
      />
      <Image
        style={styles.ellipseIcon11}
        resizeMode="cover"
        source={require("../assets/ellipse-181.png")}
      />
      <Image
        style={styles.ellipseIcon12}
        resizeMode="cover"
        source={require("../assets/ellipse-181.png")}
      />
      <Image
        style={styles.ellipseIcon13}
        resizeMode="cover"
        source={require("../assets/ellipse-181.png")}
      />
      <Image
        style={styles.ellipseIcon14}
        resizeMode="cover"
        source={require("../assets/ellipse-181.png")}
      />
      <Image
        style={styles.ellipseIcon15}
        resizeMode="cover"
        source={require("../assets/ellipse-181.png")}
      />
      <Image
        style={styles.eyeCrossedFreeIconFont2}
        resizeMode="cover"
        source={require("../assets/eyecrossedfreeiconfont-2-1.png")}
      />
      <Image
        style={styles.checkboxFreeIconFont1}
        resizeMode="cover"
        source={require("../assets/checkboxfreeiconfont-1.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "false" })
        }
      />
      <Pressable
        style={styles.masukPressable}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "false" })
        }
      >
        <Text style={styles.masukText1}>Masuk</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 893,
    height: 1050,
  },
  rectangleView: {
    position: "absolute",
    top: -2,
    left: -21,
    borderRadius: 15,
    backgroundColor: "#ff9117",
    width: 415,
    height: 244,
  },
  wELCOMEText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  pUSHLINEDUTABANGSA: {
    margin: 0,
  },
  wELCOMEPUSHLINEDUTABANGSA: {
    position: "absolute",
    top: 91,
    left: 57,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  frameView: {
    position: "absolute",
    top: 73,
    left: 148,
    width: 100,
    height: 100,
    overflow: "hidden",
  },
  masukText: {
    position: "absolute",
    top: 309,
    left: 99,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  emailText: {
    position: "absolute",
    top: 357,
    left: 40,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  passwordText: {
    position: "absolute",
    top: 426,
    left: 38,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  ingatSayaText: {
    position: "absolute",
    top: 498,
    left: 51,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  lupaPasswordText: {
    position: "absolute",
    top: 498,
    left: 261,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#035397",
    textAlign: "center",
  },
  daftarText: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#140000",
    textAlign: "center",
  },
  daftarPressable: {
    position: "absolute",
    left: 223,
    top: 309,
  },
  perpustakaanDigitalText: {
    position: "absolute",
    top: 157,
    left: 104,
    fontSize: 16,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  rectangleView1: {
    position: "absolute",
    top: 379,
    left: 27,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    width: 321,
    height: 40,
  },
  rectangleView2: {
    position: "absolute",
    top: 448,
    left: 27,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    width: 321,
    height: 40,
  },
  yusufanwargmailcomText: {
    position: "absolute",
    top: 391,
    left: 44,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
  },
  ellipseIcon1: {
    position: "absolute",
    top: 465,
    left: 42,
    width: 6,
    height: 6,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 465,
    left: 132,
    width: 6,
    height: 6,
  },
  ellipseIcon3: {
    position: "absolute",
    top: 465,
    left: 87,
    width: 6,
    height: 6,
  },
  ellipseIcon4: {
    position: "absolute",
    top: 465,
    left: 51,
    width: 6,
    height: 6,
  },
  ellipseIcon5: {
    position: "absolute",
    top: 465,
    left: 141,
    width: 6,
    height: 6,
  },
  ellipseIcon6: {
    position: "absolute",
    top: 465,
    left: 96,
    width: 6,
    height: 6,
  },
  ellipseIcon7: {
    position: "absolute",
    top: 465,
    left: 60,
    width: 6,
    height: 6,
  },
  ellipseIcon8: {
    position: "absolute",
    top: 465,
    left: 150,
    width: 6,
    height: 6,
  },
  ellipseIcon9: {
    position: "absolute",
    top: 465,
    left: 105,
    width: 6,
    height: 6,
  },
  ellipseIcon10: {
    position: "absolute",
    top: 465,
    left: 69,
    width: 6,
    height: 6,
  },
  ellipseIcon11: {
    position: "absolute",
    top: 465,
    left: 159,
    width: 6,
    height: 6,
  },
  ellipseIcon12: {
    position: "absolute",
    top: 465,
    left: 114,
    width: 6,
    height: 6,
  },
  ellipseIcon13: {
    position: "absolute",
    top: 465,
    left: 78,
    width: 6,
    height: 6,
  },
  ellipseIcon14: {
    position: "absolute",
    top: 465,
    left: 168,
    width: 6,
    height: 6,
  },
  ellipseIcon15: {
    position: "absolute",
    top: 465,
    left: 123,
    width: 6,
    height: 6,
  },
  eyeCrossedFreeIconFont2: {
    position: "absolute",
    top: 460,
    left: 316,
    width: 15,
    height: 15,
  },
  checkboxFreeIconFont1: {
    position: "absolute",
    top: 498,
    left: 28,
    width: 15,
    height: 15,
  },
  rectanglePressable: {
    position: "absolute",
    top: 543,
    left: 27,
    borderRadius: 5,
    backgroundColor: "#ffd600",
    width: 321,
    height: 40,
  },
  masukText1: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  masukPressable: {
    position: "absolute",
    left: 165,
    top: 554,
  },
  loginView: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Login;
