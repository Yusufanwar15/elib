import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const Profil = () => {
  return (
    <View style={styles.profilView}>
      <View style={styles.groupView}>
        <View style={styles.rectangleView} />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector6.png")}
        />
        <Text style={styles.userText}>User</Text>
      </View>
      <View style={styles.groupView1}>
        <View style={styles.rectangleView1} />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-7.png")}
        />
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector7.png")}
        />
        <Text style={styles.haiPengguna1Text}>Hai,Pengguna 1</Text>
      </View>
      <View style={styles.rectangleView2} />
      <View style={styles.groupView7}>
        <View style={styles.groupView2}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
          <View style={styles.lineView} />
          <Image
            style={styles.vectorIcon2}
            resizeMode="cover"
            source={require("../assets/vector8.png")}
          />
        </View>
        <View style={styles.groupView3}>
          <Text style={styles.inboxText}>Inbox</Text>
          <View style={styles.lineView1} />
          <Image
            style={styles.vectorIcon3}
            resizeMode="cover"
            source={require("../assets/vector9.png")}
          />
        </View>
        <View style={styles.groupView4}>
          <Text style={styles.bahasaText}>Bahasa</Text>
          <View style={styles.lineView2} />
          <Image
            style={styles.vectorIcon4}
            resizeMode="cover"
            source={require("../assets/vector10.png")}
          />
        </View>
        <View style={styles.groupView5}>
          <Text style={styles.setelanText}>Setelan</Text>
          <View style={styles.lineView3} />
          <Image
            style={styles.vectorIcon5}
            resizeMode="cover"
            source={require("../assets/vector11.png")}
          />
        </View>
        <View style={styles.groupView6}>
          <Text style={styles.tentangText}>Tentang</Text>
          <View style={styles.lineView4} />
          <Image
            style={styles.vectorIcon6}
            resizeMode="cover"
            source={require("../assets/vector12.png")}
          />
        </View>
      </View>
      <View style={styles.component4View}>
        <View style={styles.rectangleView3} />
        <View style={styles.statusBarView}>
          <Image
            style={styles.notchIcon}
            resizeMode="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.statusIconsView}>
            <Image
              style={styles.networkSignalLight}
              resizeMode="cover"
              source={require("../assets/network-signal-light.png")}
            />
            <Image
              style={[styles.wiFiSignalLight, styles.ml4]}
              resizeMode="cover"
              source={require("../assets/wifi-signal--light.png")}
            />
            <Image
              style={[styles.batteryLight, styles.ml4]}
              resizeMode="cover"
              source={require("../assets/battery--light.png")}
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
            source={require("../assets/time--light.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml4: {
    marginLeft: 4,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#ff9117",
    width: 390,
    height: 82.11,
  },
  vectorIcon: {
    position: "absolute",
    height: "30.38%",
    width: "6.35%",
    top: "44.3%",
    right: "5.12%",
    bottom: "25.32%",
    left: "88.53%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  userText: {
    position: "absolute",
    top: 30.14,
    left: 34.32,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
    width: 48.88,
    height: 31.18,
  },
  groupView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 390,
    height: 82.11,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 50,
    backgroundColor: "#fcab71",
    width: 353,
    height: 109,
  },
  ellipseIcon: {
    position: "absolute",
    top: 1.82,
    left: 3.8,
    width: 104,
    height: 103.94,
  },
  vectorIcon1: {
    position: "absolute",
    height: "49.08%",
    width: "14.73%",
    top: "24.56%",
    right: "76.83%",
    bottom: "26.36%",
    left: "8.44%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  haiPengguna1Text: {
    position: "absolute",
    top: 38.2,
    left: 124.44,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
    width: 187.2,
    height: 31.18,
  },
  groupView1: {
    position: "absolute",
    top: 99,
    left: 17,
    width: 353,
    height: 109,
  },
  rectangleView2: {
    position: "absolute",
    top: 222,
    left: 21,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 349,
    height: 408,
  },
  editProfileText: {
    position: "absolute",
    top: 0,
    left: 7.28,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
    width: 76.96,
    height: 21.83,
  },
  lineView: {
    position: "absolute",
    top: 27.91,
    left: -0.15,
    borderStyle: "solid",
    borderColor: "#594545",
    borderTopWidth: 0.3,
    width: 321.66,
    height: 0.3,
  },
  vectorIcon2: {
    position: "absolute",
    height: "46.98%",
    width: "3.1%",
    top: "13.55%",
    right: "1.87%",
    bottom: "39.46%",
    left: "95.03%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 321.36,
    height: 28.06,
  },
  inboxText: {
    position: "absolute",
    top: 0,
    left: 7.28,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
    width: 41.6,
    height: 21.83,
  },
  lineView1: {
    position: "absolute",
    top: 27.91,
    left: -0.15,
    borderStyle: "solid",
    borderColor: "#594545",
    borderTopWidth: 0.3,
    width: 321.66,
    height: 0.3,
  },
  vectorIcon3: {
    position: "absolute",
    height: "46.98%",
    width: "3.1%",
    top: "13.55%",
    right: "1.87%",
    bottom: "39.46%",
    left: "95.03%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView3: {
    position: "absolute",
    top: 42.62,
    left: 0,
    width: 321.36,
    height: 28.06,
  },
  bahasaText: {
    position: "absolute",
    top: 0,
    left: 7.28,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
    width: 57.2,
    height: 21.83,
  },
  lineView2: {
    position: "absolute",
    top: 27.91,
    left: -0.15,
    borderStyle: "solid",
    borderColor: "#594545",
    borderTopWidth: 0.3,
    width: 321.66,
    height: 0.3,
  },
  vectorIcon4: {
    position: "absolute",
    height: "46.98%",
    width: "3.1%",
    top: "13.55%",
    right: "1.87%",
    bottom: "39.46%",
    left: "95.03%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView4: {
    position: "absolute",
    top: 85.23,
    left: 0,
    width: 321.36,
    height: 28.06,
  },
  setelanText: {
    position: "absolute",
    top: 0,
    left: 7.28,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
    width: 56.16,
    height: 21.83,
  },
  lineView3: {
    position: "absolute",
    top: 27.91,
    left: -0.15,
    borderStyle: "solid",
    borderColor: "#594545",
    borderTopWidth: 0.3,
    width: 321.66,
    height: 0.3,
  },
  vectorIcon5: {
    position: "absolute",
    height: "46.98%",
    width: "3.1%",
    top: "13.55%",
    right: "1.87%",
    bottom: "39.46%",
    left: "95.03%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView5: {
    position: "absolute",
    top: 127.85,
    left: 0,
    width: 321.36,
    height: 28.06,
  },
  tentangText: {
    position: "absolute",
    top: 0,
    left: 7.28,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
    width: 62.4,
    height: 21.83,
  },
  lineView4: {
    position: "absolute",
    top: 27.91,
    left: -0.15,
    borderStyle: "solid",
    borderColor: "#594545",
    borderTopWidth: 0.3,
    width: 321.66,
    height: 0.3,
  },
  vectorIcon6: {
    position: "absolute",
    height: "46.98%",
    width: "3.1%",
    top: "13.55%",
    right: "1.87%",
    bottom: "39.46%",
    left: "95.03%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView6: {
    position: "absolute",
    top: 170.46,
    left: 0,
    width: 321.36,
    height: 28.06,
  },
  groupView7: {
    position: "absolute",
    top: 248.42,
    left: 34.32,
    width: 321.36,
    height: 198.53,
  },
  rectangleView3: {
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
    top: 0.65,
    right: -4.25,
    left: 3.75,
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
    right: 13.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  indicatorIcon: {
    position: "absolute",
    top: 8,
    right: 70.5,
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
    top: -19,
    left: -21,
    width: 415,
    height: 52,
  },
  profilView: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#ffd99f",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Profil;
