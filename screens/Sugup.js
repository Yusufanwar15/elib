import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Sugup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sugupView}>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-33.png")}
      />
      <View style={styles.component4View}>
        <View style={styles.rectangleView} />
        <View style={styles.statusBarView}>
          <Image
            style={styles.notchIcon}
            resizeMode="cover"
            source={require("../assets/notch4.png")}
          />
          <View style={styles.statusIconsView}>
            <Image
              style={styles.networkSignalLight}
              resizeMode="cover"
              source={require("../assets/network-signal-light4.png")}
            />
            <Image
              style={[styles.wiFiSignalLight, styles.ml4]}
              resizeMode="cover"
              source={require("../assets/wifi-signal--light4.png")}
            />
            <Image
              style={[styles.batteryLight, styles.ml4]}
              resizeMode="cover"
              source={require("../assets/battery--light4.png")}
            />
          </View>
          <Image
            style={styles.indicatorIcon}
            resizeMode="cover"
            source={require("../assets/indicator.png")}
          />
          <Image
            style={styles.timeLight}
            resizeMode="cover"
            source={require("../assets/time--light4.png")}
          />
        </View>
      </View>
      <Pressable
        style={styles.masukPressable}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.masukText}>Masuk</Text>
      </Pressable>
      <Text style={styles.namaLengkapText}>Nama Lengkap</Text>
      <Text style={styles.emailText}>Email</Text>
      <Text style={styles.text}>*</Text>
      <Text style={styles.text1}>*</Text>
      <Text style={styles.text2}>*</Text>
      <Text style={styles.text3}>*</Text>
      <Text style={styles.konfirmasiPasswordText}>Konfirmasi Password</Text>
      <Text style={styles.passwordText}>Password</Text>
      <Text style={styles.iAgreeWithTermsAndPrivacy}>
        <Text style={styles.iAgreeWith}>{`I agree with `}</Text>
        <Text style={styles.termsText}>Terms</Text>
        <Text style={styles.andText}>{` and `}</Text>
        <Text style={styles.privacyText}>Privacy</Text>
      </Text>
      <Text style={styles.daftarText}>Daftar</Text>
      <Text style={styles.daftarUntukMembuatAkun}>
        Daftar Untuk Membuat Akun
      </Text>
      <View style={styles.rectangleView1} />
      <View style={styles.rectangleView2} />
      <View style={styles.rectangleView3} />
      <View style={styles.rectangleView4} />
      <Text style={styles.masukanNamaLengkap}>Masukan nama lengkap</Text>
      <Text style={styles.masukanEmailText}>Masukan email</Text>
      <Text style={styles.masukanUlangPassword}>Masukan ulang password</Text>
      <Text style={styles.masukanPasswordText}>Masukan password</Text>
      <Image
        style={styles.eyeCrossedFreeIconFont2}
        resizeMode="cover"
        source={require("../assets/eyecrossedfreeiconfont-2-1.png")}
      />
      <Image
        style={styles.eyeCrossedFreeIconFont21}
        resizeMode="cover"
        source={require("../assets/eyecrossedfreeiconfont-2-1.png")}
      />
      <Image
        style={styles.checkboxFreeIconFont2}
        resizeMode="cover"
        source={require("../assets/checkboxfreeiconfont-2.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Login")}
      />
      <Text style={styles.daftarText1}>Daftar</Text>
      <Text style={styles.wELCOMEPUSHLINEDUTABANGSA}>
        <Text style={styles.wELCOMEText}>WELCOME</Text>
        <Text style={styles.pUSHLINEDUTABANGSA}>PUSHLINE DUTA BANGSA</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ml4: {
    marginLeft: 4,
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 910,
    height: 1000,
  },
  rectangleView: {
    position: "absolute",
    height: "98.53%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "1.47%",
    left: "0%",
    borderRadius: 15,
    backgroundColor: "#ff9117",
  },
  notchIcon: {
    position: "absolute",
    top: 3.29,
    right: -9.21,
    left: 8.79,
    maxWidth: "100%",
    overflow: "hidden",
    height: 30,
  },
  networkSignalLight: {
    position: "relative",
    width: 20,
    height: 14,
    flexShrink: 0,
  },
  wiFiSignalLight: {
    position: "relative",
    width: 16,
    height: 14,
    flexShrink: 0,
  },
  batteryLight: {
    position: "relative",
    width: 25,
    height: 14,
    flexShrink: 0,
  },
  statusIconsView: {
    position: "absolute",
    top: 16,
    right: 13.58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  indicatorIcon: {
    position: "absolute",
    top: 8,
    right: 70.58,
    width: 6,
    height: 6,
  },
  timeLight: {
    position: "absolute",
    top: 12,
    left: 21,
    borderRadius: 20,
    width: 54,
    height: 21,
    overflow: "hidden",
  },
  statusBarView: {
    position: "absolute",
    height: "64.71%",
    width: "91.69%",
    top: "35.29%",
    right: "4.16%",
    bottom: "0%",
    left: "4.16%",
    overflow: "hidden",
  },
  component4View: {
    position: "absolute",
    top: -22,
    left: -26,
    width: 414,
    height: 53,
  },
  masukText: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
  },
  masukPressable: {
    position: "absolute",
    left: 99,
    top: 313,
  },
  namaLengkapText: {
    position: "absolute",
    top: 360,
    left: 26,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  emailText: {
    position: "absolute",
    top: 429,
    left: 26,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text: {
    position: "absolute",
    top: 360,
    left: 115,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#d71515",
    textAlign: "center",
  },
  text1: {
    position: "absolute",
    top: 429,
    left: 61,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#d71515",
    textAlign: "center",
  },
  text2: {
    position: "absolute",
    top: 567,
    left: 151,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#4075ff",
    textAlign: "center",
  },
  text3: {
    position: "absolute",
    top: 498,
    left: 85,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#d71515",
    textAlign: "center",
  },
  konfirmasiPasswordText: {
    position: "absolute",
    top: 567,
    left: 27,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
  },
  passwordText: {
    position: "absolute",
    top: 498,
    left: 26,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  iAgreeWith: {
    color: "#000",
  },
  termsText: {
    color: "#0085ff",
  },
  andText: {
    color: "#000",
  },
  privacyText: {
    color: "#0085ff",
  },
  iAgreeWithTermsAndPrivacy: {
    position: "absolute",
    top: 636,
    left: 50,
    fontSize: 11,
    fontFamily: "Inter",
    textAlign: "center",
  },
  daftarText: {
    position: "absolute",
    top: 313,
    left: 210,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  daftarUntukMembuatAkun: {
    position: "absolute",
    top: 152,
    left: 80,
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
  rectangleView3: {
    position: "absolute",
    top: 586,
    left: 28,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    width: 321,
    height: 40,
  },
  rectangleView4: {
    position: "absolute",
    top: 517,
    left: 27,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    width: 321,
    height: 40,
  },
  masukanNamaLengkap: {
    position: "absolute",
    top: 392,
    left: 41,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#7c7c7c",
    textAlign: "center",
  },
  masukanEmailText: {
    position: "absolute",
    top: 461,
    left: 41,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#7c7c7c",
    textAlign: "center",
  },
  masukanUlangPassword: {
    position: "absolute",
    top: 598,
    left: 41,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#7c7c7c",
    textAlign: "center",
  },
  masukanPasswordText: {
    position: "absolute",
    top: 529,
    left: 41,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#7c7c7c",
    textAlign: "center",
  },
  eyeCrossedFreeIconFont2: {
    position: "absolute",
    top: 596,
    left: 317,
    width: 15,
    height: 15,
  },
  eyeCrossedFreeIconFont21: {
    position: "absolute",
    top: 527,
    left: 316,
    width: 15,
    height: 15,
  },
  checkboxFreeIconFont2: {
    position: "absolute",
    top: 635,
    left: 28,
    width: 15,
    height: 15,
  },
  rectanglePressable: {
    position: "absolute",
    top: 678,
    left: 26,
    borderRadius: 5,
    backgroundColor: "#ffd600",
    width: 321,
    height: 40,
  },
  daftarText1: {
    position: "absolute",
    top: 689,
    left: 165,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
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
    top: 87,
    left: 50,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 274,
    height: 38,
  },
  sugupView: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Sugup;
