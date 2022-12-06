import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Inbox = () => {
  return (
    <View style={styles.inboxView}>
      <View style={styles.isiView}>
        <View style={styles.view}>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-54.png")}
          />
          <Text style={styles.pengguna1Text}>Pengguna 1</Text>
          <Text style={styles.halloKakApaStokMasihAda}>
            hallo kak apa stok masih ada?
          </Text>
          <Text style={styles.pMText}>09.00 PM</Text>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector15.png")}
          />
          <View style={styles.lineView} />
        </View>
        <View style={styles.view1}>
          <Image
            style={styles.groupIcon1}
            resizeMode="cover"
            source={require("../assets/group-54.png")}
          />
          <Text style={styles.pengguna2Text}>Pengguna 2</Text>
          <Text style={styles.halloKakApaStokMasihAda1}>
            hallo kak apa stok masih ada?
          </Text>
          <Text style={styles.pMText1}>09.00 PM</Text>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector15.png")}
          />
          <View style={styles.lineView1} />
        </View>
        <View style={styles.view2}>
          <Image
            style={styles.groupIcon2}
            resizeMode="cover"
            source={require("../assets/group-54.png")}
          />
          <Text style={styles.pengguna3Text}>Pengguna 3</Text>
          <Text style={styles.halloKakApaStokMasihAda2}>
            hallo kak apa stok masih ada?
          </Text>
          <Text style={styles.pMText2}>09.00 PM</Text>
          <Image
            style={styles.vectorIcon2}
            resizeMode="cover"
            source={require("../assets/vector15.png")}
          />
          <View style={styles.lineView2} />
        </View>
        <View style={styles.view3}>
          <Image
            style={styles.groupIcon3}
            resizeMode="cover"
            source={require("../assets/group-54.png")}
          />
          <Text style={styles.pengguna4Text}>Pengguna 4</Text>
          <Text style={styles.halloKakApaStokMasihAda3}>
            hallo kak apa stok masih ada?
          </Text>
          <Text style={styles.pMText3}>09.00 PM</Text>
          <Image
            style={styles.vectorIcon3}
            resizeMode="cover"
            source={require("../assets/vector15.png")}
          />
          <View style={styles.lineView3} />
        </View>
        <View style={styles.view4}>
          <Image
            style={styles.groupIcon4}
            resizeMode="cover"
            source={require("../assets/group-54.png")}
          />
          <Text style={styles.pengguna5Text}>Pengguna 5</Text>
          <Text style={styles.halloKakApaStokMasihAda4}>
            hallo kak apa stok masih ada?
          </Text>
          <Text style={styles.pMText4}>09.00 PM</Text>
          <Image
            style={styles.vectorIcon4}
            resizeMode="cover"
            source={require("../assets/vector15.png")}
          />
          <View style={styles.lineView4} />
        </View>
        <View style={styles.view5}>
          <Image
            style={styles.groupIcon5}
            resizeMode="cover"
            source={require("../assets/group-54.png")}
          />
          <Text style={styles.pengguna6Text}>Pengguna 6</Text>
          <Text style={styles.halloKakApaStokMasihAda5}>
            hallo kak apa stok masih ada?
          </Text>
          <Text style={styles.pMText5}>09.00 PM</Text>
          <Image
            style={styles.vectorIcon5}
            resizeMode="cover"
            source={require("../assets/vector15.png")}
          />
          <View style={styles.lineView5} />
        </View>
        <View style={styles.view6}>
          <Image
            style={styles.groupIcon6}
            resizeMode="cover"
            source={require("../assets/group-54.png")}
          />
          <Text style={styles.pengguna7Text}>Pengguna 7</Text>
          <Text style={styles.halloKakApaStokMasihAda6}>
            hallo kak apa stok masih ada?
          </Text>
          <Text style={styles.pMText6}>09.00 PM</Text>
          <Image
            style={styles.vectorIcon6}
            resizeMode="cover"
            source={require("../assets/vector15.png")}
          />
          <View style={styles.lineView6} />
        </View>
        <View style={styles.view7}>
          <Image
            style={styles.groupIcon7}
            resizeMode="cover"
            source={require("../assets/group-54.png")}
          />
          <Text style={styles.pengguna8Text}>Pengguna 8</Text>
          <Text style={styles.halloKakApaStokMasihAda7}>
            hallo kak apa stok masih ada?
          </Text>
          <Text style={styles.pMText7}>09.00 PM</Text>
          <Image
            style={styles.vectorIcon7}
            resizeMode="cover"
            source={require("../assets/vector15.png")}
          />
          <View style={styles.lineView7} />
        </View>
      </View>
      <View style={styles.headView}>
        <View style={styles.rectangleView} />
        <View style={styles.rectangleView1} />
        <Image
          style={styles.vectorIcon8}
          resizeMode="cover"
          source={require("../assets/vector23.png")}
        />
        <Image
          style={styles.vectorIcon9}
          resizeMode="cover"
          source={require("../assets/vector24.png")}
        />
        <Text style={styles.inboxText}>Inbox</Text>
      </View>
      <View style={styles.component4View}>
        <View style={styles.rectangleView2} />
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
  groupIcon: {
    position: "absolute",
    top: 2,
    left: 10,
    width: 35,
    height: 35,
  },
  pengguna1Text: {
    position: "absolute",
    top: 0,
    left: 58,
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  halloKakApaStokMasihAda: {
    position: "absolute",
    top: 20,
    left: 82,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  pMText: {
    position: "absolute",
    top: 11,
    left: 299,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  vectorIcon: {
    position: "absolute",
    height: "30%",
    width: "4.38%",
    top: "40%",
    right: "78.56%",
    bottom: "30%",
    left: "17.06%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  lineView: {
    position: "absolute",
    top: 49.85,
    left: -0.15,
    borderStyle: "solid",
    borderColor: "#594545",
    borderTopWidth: 0.3,
    width: 356.3,
    height: 0.3,
  },
  view: {
    position: "absolute",
    top: 427,
    left: 0,
    width: 356,
    height: 50,
  },
  groupIcon1: {
    position: "absolute",
    top: 2,
    left: 10,
    width: 35,
    height: 35,
  },
  pengguna2Text: {
    position: "absolute",
    top: 0,
    left: 58,
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  halloKakApaStokMasihAda1: {
    position: "absolute",
    top: 20,
    left: 82,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  pMText1: {
    position: "absolute",
    top: 11,
    left: 299,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  vectorIcon1: {
    position: "absolute",
    height: "30%",
    width: "4.38%",
    top: "40%",
    right: "78.56%",
    bottom: "30%",
    left: "17.06%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  lineView1: {
    position: "absolute",
    top: 49.85,
    left: -0.15,
    borderStyle: "solid",
    borderColor: "#594545",
    borderTopWidth: 0.3,
    width: 356.3,
    height: 0.3,
  },
  view1: {
    position: "absolute",
    top: 366,
    left: 0,
    width: 356,
    height: 50,
  },
  groupIcon2: {
    position: "absolute",
    top: 2,
    left: 10,
    width: 35,
    height: 35,
  },
  pengguna3Text: {
    position: "absolute",
    top: 0,
    left: 58,
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  halloKakApaStokMasihAda2: {
    position: "absolute",
    top: 20,
    left: 82,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  pMText2: {
    position: "absolute",
    top: 11,
    left: 299,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  vectorIcon2: {
    position: "absolute",
    height: "30%",
    width: "4.38%",
    top: "40%",
    right: "78.56%",
    bottom: "30%",
    left: "17.06%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  lineView2: {
    position: "absolute",
    top: 49.85,
    left: -0.15,
    borderStyle: "solid",
    borderColor: "#594545",
    borderTopWidth: 0.3,
    width: 356.3,
    height: 0.3,
  },
  view2: {
    position: "absolute",
    top: 305,
    left: 1,
    width: 356,
    height: 50,
  },
  groupIcon3: {
    position: "absolute",
    top: 2,
    left: 10,
    width: 35,
    height: 35,
  },
  pengguna4Text: {
    position: "absolute",
    top: 0,
    left: 58,
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  halloKakApaStokMasihAda3: {
    position: "absolute",
    top: 20,
    left: 82,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  pMText3: {
    position: "absolute",
    top: 11,
    left: 299,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  vectorIcon3: {
    position: "absolute",
    height: "30%",
    width: "4.38%",
    top: "40%",
    right: "78.56%",
    bottom: "30%",
    left: "17.06%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  lineView3: {
    position: "absolute",
    top: 49.85,
    left: -0.15,
    borderStyle: "solid",
    borderColor: "#594545",
    borderTopWidth: 0.3,
    width: 356.3,
    height: 0.3,
  },
  view3: {
    position: "absolute",
    top: 244,
    left: 6,
    width: 356,
    height: 50,
  },
  groupIcon4: {
    position: "absolute",
    top: 2,
    left: 10,
    width: 35,
    height: 35,
  },
  pengguna5Text: {
    position: "absolute",
    top: 0,
    left: 58,
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  halloKakApaStokMasihAda4: {
    position: "absolute",
    top: 20,
    left: 82,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  pMText4: {
    position: "absolute",
    top: 11,
    left: 299,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  vectorIcon4: {
    position: "absolute",
    height: "30%",
    width: "4.38%",
    top: "40%",
    right: "78.56%",
    bottom: "30%",
    left: "17.06%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  lineView4: {
    position: "absolute",
    top: 49.85,
    left: -0.15,
    borderStyle: "solid",
    borderColor: "#594545",
    borderTopWidth: 0.3,
    width: 356.3,
    height: 0.3,
  },
  view4: {
    position: "absolute",
    top: 183,
    left: 0,
    width: 356,
    height: 50,
  },
  groupIcon5: {
    position: "absolute",
    top: 2,
    left: 10,
    width: 35,
    height: 35,
  },
  pengguna6Text: {
    position: "absolute",
    top: 0,
    left: 58,
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  halloKakApaStokMasihAda5: {
    position: "absolute",
    top: 20,
    left: 82,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  pMText5: {
    position: "absolute",
    top: 11,
    left: 299,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  vectorIcon5: {
    position: "absolute",
    height: "30%",
    width: "4.38%",
    top: "40%",
    right: "78.56%",
    bottom: "30%",
    left: "17.06%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  lineView5: {
    position: "absolute",
    top: 49.85,
    left: -0.15,
    borderStyle: "solid",
    borderColor: "#594545",
    borderTopWidth: 0.3,
    width: 356.3,
    height: 0.3,
  },
  view5: {
    position: "absolute",
    top: 122,
    left: 0,
    width: 356,
    height: 50,
  },
  groupIcon6: {
    position: "absolute",
    top: 2,
    left: 10,
    width: 35,
    height: 35,
  },
  pengguna7Text: {
    position: "absolute",
    top: 0,
    left: 58,
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  halloKakApaStokMasihAda6: {
    position: "absolute",
    top: 20,
    left: 82,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  pMText6: {
    position: "absolute",
    top: 11,
    left: 299,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  vectorIcon6: {
    position: "absolute",
    height: "30%",
    width: "4.38%",
    top: "40%",
    right: "78.56%",
    bottom: "30%",
    left: "17.06%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  lineView6: {
    position: "absolute",
    top: 49.85,
    left: -0.15,
    borderStyle: "solid",
    borderColor: "#594545",
    borderTopWidth: 0.3,
    width: 356.3,
    height: 0.3,
  },
  view6: {
    position: "absolute",
    top: 61,
    left: 1,
    width: 356,
    height: 50,
  },
  groupIcon7: {
    position: "absolute",
    top: 2,
    left: 10,
    width: 35,
    height: 35,
  },
  pengguna8Text: {
    position: "absolute",
    top: 0,
    left: 58,
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  halloKakApaStokMasihAda7: {
    position: "absolute",
    top: 20,
    left: 82,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  pMText7: {
    position: "absolute",
    top: 11,
    left: 299,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  vectorIcon7: {
    position: "absolute",
    height: "30%",
    width: "4.38%",
    top: "40%",
    right: "78.56%",
    bottom: "30%",
    left: "17.06%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  lineView7: {
    position: "absolute",
    top: 49.85,
    left: -0.15,
    borderStyle: "solid",
    borderColor: "#594545",
    borderTopWidth: 0.3,
    width: 356.3,
    height: 0.3,
  },
  view7: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 356,
    height: 50,
  },
  isiView: {
    position: "absolute",
    top: 100,
    left: 16,
    width: 362,
    height: 477,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#ff9117",
    width: 390,
    height: 67,
  },
  rectangleView1: {
    position: "absolute",
    top: 28.84,
    left: 216,
    borderRadius: 30,
    backgroundColor: "#e4e4e4",
    width: 152,
    height: 23.75,
  },
  vectorIcon8: {
    position: "absolute",
    height: "20.25%",
    width: "2.96%",
    top: "103.95%",
    right: "88.54%",
    bottom: "-24.2%",
    left: "8.5%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  vectorIcon9: {
    position: "absolute",
    height: "22.39%",
    width: "4.1%",
    top: "49.25%",
    right: "7.95%",
    bottom: "28.36%",
    left: "87.95%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  inboxText: {
    position: "absolute",
    top: 23,
    left: 31,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
    width: 60.32,
    height: 25.44,
  },
  headView: {
    position: "absolute",
    top: 20,
    left: 0,
    width: 390,
    height: 67,
  },
  rectangleView2: {
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
  inboxView: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Inbox;
