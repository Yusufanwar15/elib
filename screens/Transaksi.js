import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Transaksi = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.transaksiView}>
      <View style={styles.navbarView}>
        <View style={styles.rectangleView} />
      </View>
      <View style={styles.groupView3}>
        <View style={styles.cardView}>
          <View style={styles.rectangleView1} />
          <Text style={styles.novelText}>Novel</Text>
          <Text style={styles.olehPintoAnugrah}>oleh Pinto Anugrah</Text>
          <Text style={styles.rp99999Text}>Rp. 99.999,-</Text>
          <Image
            style={styles.silasdIcon}
            resizeMode="cover"
            source={require("../assets/518silasd.png")}
          />
          <Text style={styles.segalaYangDiisapLangit}>
            Segala yang Diisap Langit
          </Text>
          <View style={styles.groupView}>
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/ellipse-6.png")}
            />
            <Text style={styles.text}>01</Text>
          </View>
        </View>
        <View style={styles.cardView1}>
          <View style={styles.rectangleView2} />
          <Text style={styles.novelText1}>Novel</Text>
          <Text style={styles.olehPintoAnugrah1}>oleh Pinto Anugrah</Text>
          <Text style={styles.rp99999Text1}>Rp. 99.999,-</Text>
          <Image
            style={styles.silasdIcon1}
            resizeMode="cover"
            source={require("../assets/518silasd1.png")}
          />
          <Text style={styles.segalaYangDiisapLangit1}>
            Segala yang Diisap Langit
          </Text>
          <View style={styles.groupView1}>
            <Image
              style={styles.ellipseIcon1}
              resizeMode="cover"
              source={require("../assets/ellipse-61.png")}
            />
            <Text style={styles.text1}>02</Text>
          </View>
        </View>
        <View style={styles.cardView2}>
          <View style={styles.rectangleView3} />
          <Text style={styles.novelText2}>Novel</Text>
          <Text style={styles.olehPintoAnugrah2}>oleh Pinto Anugrah</Text>
          <Text style={styles.rp99999Text2}>Rp. 99.999,-</Text>
          <Image
            style={styles.silasdIcon2}
            resizeMode="cover"
            source={require("../assets/518silasd2.png")}
          />
          <Text style={styles.segalaYangDiisapLangit2}>
            Segala yang Diisap Langit
          </Text>
          <View style={styles.groupView2}>
            <Image
              style={styles.ellipseIcon2}
              resizeMode="cover"
              source={require("../assets/ellipse-62.png")}
            />
            <Text style={styles.text2}>01</Text>
          </View>
        </View>
        <View style={styles.book1View}>
          <View style={styles.buku1View} />
          <View style={styles.rectangleView4} />
          <Image
            style={styles.iDDSK2019MTH041Icon}
            resizeMode="cover"
            source={require("../assets/id-dsk2019mth04-1.png")}
          />
          <Text style={styles.dasarSistemKomputer}>Dasar Sistem Komputer</Text>
          <Text style={styles.pengetahuanDasarSistemKompu}>
            pengetahuan dasar sistem komputer.
          </Text>
          <Text style={styles.rp89000Text}>Rp.89.000.-</Text>
          <View style={styles.nominaView}>
            <Image
              style={styles.ellipseIcon3}
              resizeMode="cover"
              source={require("../assets/ellipse-34.png")}
            />
            <Text style={styles.text3}>1</Text>
            <Text style={styles.text4}>-</Text>
            <Text style={styles.text5}>+</Text>
          </View>
        </View>
        <View style={styles.book2View}>
          <View style={styles.buku2View} />
          <View style={styles.rectangleView5} />
          <Image
            style={styles.bLKBAAKN20203282251Icon}
            resizeMode="cover"
            source={require("../assets/blk-baakn2020328225-1.png")}
          />
          <Text style={styles.aplikasiKomputerText}>Aplikasi Komputer</Text>
          <Text style={styles.pengetahuanDasarAplikasiKom}>
            pengetahuan dasar aplikasi komputer.
          </Text>
          <Text style={styles.rp89000Text1}>Rp.89.000.-</Text>
          <View style={styles.nominaView1}>
            <Image
              style={styles.ellipseIcon4}
              resizeMode="cover"
              source={require("../assets/ellipse-341.png")}
            />
            <Text style={styles.text6}>1</Text>
            <Text style={styles.text7}>-</Text>
            <Text style={styles.text8}>+</Text>
          </View>
        </View>
        <View style={styles.book3View}>
          <View style={styles.buku3View} />
          <View style={styles.rectangleView6} />
          <Image
            style={styles.komputerDanJaringanDasar1Icon}
            resizeMode="cover"
            source={require("../assets/komputerdanjaringandasar-1.png")}
          />
          <Text style={styles.komputerDanJaringanDasar}>
            Komputer dan Jaringan Dasar
          </Text>
          <Text style={styles.pengetahuanDasarKomputerDan}>
            pengetahuan dasar Komputer dan Jaringan Dasar.
          </Text>
          <Text style={styles.rp89000Text2}>Rp.89.000.-</Text>
          <View style={styles.nominaView2}>
            <Image
              style={styles.ellipseIcon5}
              resizeMode="cover"
              source={require("../assets/ellipse-342.png")}
            />
            <Text style={styles.text9}>1</Text>
            <Text style={styles.text10}>-</Text>
            <Text style={styles.text11}>+</Text>
          </View>
        </View>
      </View>
      <View style={styles.groupView5}>
        <View style={styles.groupView4}>
          <View style={styles.rectangleView7} />
          <Text style={styles.subTotal}>Sub Total :</Text>
          <Text style={styles.lihatPerincianText}>Lihat Perincian</Text>
          <Text style={styles.rp150000Text}>Rp. 150.000,-</Text>
        </View>
      </View>
      <View style={styles.transView}>
        <View style={styles.rectangleView8} />
        <Pressable
          style={styles.transaksiPressable}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Keranjang" })
          }
        >
          <Text style={styles.transaksiText}>Transaksi</Text>
        </Pressable>
        <Pressable
          style={styles.vectorPressable}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Keranjang" })
          }
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/vector4.png")}
          />
        </Pressable>
      </View>
      <View style={styles.lineView} />
      <View style={styles.lineView1} />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector5.png")}
      />
      <View style={styles.totaView}>
        <View style={styles.rectangleView9} />
        <Text style={styles.bayarText}>Bayar</Text>
        <Text style={styles.totalText}>total</Text>
        <Text style={styles.metodePembayaranText}>Metode Pembayaran</Text>
        <Text style={styles.oVOText}>OVO</Text>
        <Text style={styles.rp89000Text3}>Rp. 89.000,-</Text>
      </View>
      <View style={styles.component4View}>
        <View style={styles.rectangleView10} />
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    width: 480.06,
    height: 108,
  },
  navbarView: {
    position: "absolute",
    top: 736,
    left: -45.03,
    width: 480.06,
    height: 108,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 336,
    height: 113.31,
  },
  novelText: {
    position: "absolute",
    top: 30.73,
    left: 94,
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#4b4b4b",
    textAlign: "center",
    width: 29,
    height: 14.4,
    opacity: 0.8,
  },
  olehPintoAnugrah: {
    position: "absolute",
    top: 45.13,
    left: 94,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ad8b73",
    textAlign: "center",
    width: 107,
    height: 16.32,
  },
  rp99999Text: {
    position: "absolute",
    top: 73.94,
    left: 94,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#00d722",
    textAlign: "center",
    width: 91,
    height: 22.09,
  },
  silasdIcon: {
    position: "absolute",
    top: 13.44,
    left: 18,
    width: 57.13,
    height: 86.43,
  },
  segalaYangDiisapLangit: {
    position: "absolute",
    top: 10.56,
    left: 94,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
    width: 194,
    height: 20.17,
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 25,
    height: 24.01,
  },
  text: {
    position: "absolute",
    top: 2.88,
    left: 6,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "center",
    width: 13,
    height: 17.29,
  },
  groupView: {
    position: "absolute",
    top: 44.17,
    left: 294,
    width: 25,
    height: 24.01,
  },
  cardView: {
    position: "absolute",
    top: 0.96,
    left: 3,
    width: 336,
    height: 113.31,
    display: "none",
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 336,
    height: 113.31,
  },
  novelText1: {
    position: "absolute",
    top: 30.73,
    left: 94,
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#4b4b4b",
    textAlign: "center",
    width: 29,
    height: 14.4,
    opacity: 0.8,
  },
  olehPintoAnugrah1: {
    position: "absolute",
    top: 45.13,
    left: 94,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ad8b73",
    textAlign: "center",
    width: 107,
    height: 16.32,
  },
  rp99999Text1: {
    position: "absolute",
    top: 73.94,
    left: 94,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#00d722",
    textAlign: "center",
    width: 91,
    height: 22.09,
  },
  silasdIcon1: {
    position: "absolute",
    top: 13.44,
    left: 18,
    width: 57.13,
    height: 86.43,
  },
  segalaYangDiisapLangit1: {
    position: "absolute",
    top: 10.56,
    left: 94,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
    width: 194,
    height: 20.17,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 25,
    height: 24.01,
  },
  text1: {
    position: "absolute",
    top: 2.88,
    left: 5,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "center",
    width: 15,
    height: 17.29,
  },
  groupView1: {
    position: "absolute",
    top: 44.17,
    left: 294,
    width: 25,
    height: 24.01,
  },
  cardView1: {
    position: "absolute",
    top: 124.84,
    left: 3,
    width: 336,
    height: 113.31,
    display: "none",
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 336,
    height: 113.31,
  },
  novelText2: {
    position: "absolute",
    top: 30.73,
    left: 94,
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#4b4b4b",
    textAlign: "center",
    width: 29,
    height: 14.4,
    opacity: 0.8,
  },
  olehPintoAnugrah2: {
    position: "absolute",
    top: 45.13,
    left: 94,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ad8b73",
    textAlign: "center",
    width: 107,
    height: 16.32,
  },
  rp99999Text2: {
    position: "absolute",
    top: 73.94,
    left: 94,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#00d722",
    textAlign: "center",
    width: 91,
    height: 22.09,
  },
  silasdIcon2: {
    position: "absolute",
    top: 13.44,
    left: 18,
    width: 57.13,
    height: 86.43,
  },
  segalaYangDiisapLangit2: {
    position: "absolute",
    top: 10.56,
    left: 94,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
    width: 194,
    height: 20.17,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 25,
    height: 24.01,
  },
  text2: {
    position: "absolute",
    top: 2.88,
    left: 6,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "center",
    width: 13,
    height: 17.29,
  },
  groupView2: {
    position: "absolute",
    top: 44.17,
    left: 294,
    width: 25,
    height: 24.01,
  },
  cardView2: {
    position: "absolute",
    top: 248.71,
    left: 3,
    width: 336,
    height: 113.31,
    display: "none",
  },
  buku1View: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    width: 351,
    height: 163.25,
  },
  rectangleView4: {
    position: "absolute",
    top: 13.44,
    left: 12,
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    width: 128,
    height: 104.67,
  },
  iDDSK2019MTH041Icon: {
    position: "absolute",
    top: 14.4,
    left: 34,
    borderRadius: 5,
    width: 84,
    height: 102.75,
  },
  dasarSistemKomputer: {
    position: "absolute",
    top: 13.44,
    left: 151,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 184,
    height: 22.09,
  },
  pengetahuanDasarSistemKompu: {
    position: "absolute",
    top: 35.53,
    left: 151,
    fontSize: 10,
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 105,
    height: 16.32,
  },
  rp89000Text: {
    position: "absolute",
    top: 129.64,
    left: 169,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ff0000",
    textAlign: "left",
    width: 77,
    height: 19.21,
  },
  ellipseIcon3: {
    position: "absolute",
    top: 0,
    left: 12,
    width: 19,
    height: 18.25,
    opacity: 0.56,
  },
  text3: {
    position: "absolute",
    top: 0,
    left: 19,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 5,
    height: 19.21,
  },
  text4: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 8,
    height: 19.21,
  },
  text5: {
    position: "absolute",
    top: 0,
    left: 34,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 9,
    height: 19.21,
  },
  nominaView: {
    position: "absolute",
    top: 129.64,
    left: 270,
    width: 43,
    height: 19.21,
  },
  book1View: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 351,
    height: 163.25,
  },
  buku2View: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    width: 351,
    height: 163.25,
  },
  rectangleView5: {
    position: "absolute",
    top: 12.48,
    left: 12,
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    width: 128,
    height: 104.67,
  },
  bLKBAAKN20203282251Icon: {
    position: "absolute",
    top: 13.44,
    left: 37,
    width: 79,
    height: 103.71,
  },
  aplikasiKomputerText: {
    position: "absolute",
    top: 12.48,
    left: 148,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 144,
    height: 22.09,
  },
  pengetahuanDasarAplikasiKom: {
    position: "absolute",
    top: 34.57,
    left: 148,
    fontSize: 10,
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 105,
    height: 16.32,
  },
  rp89000Text1: {
    position: "absolute",
    top: 129.64,
    left: 169,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ff0000",
    textAlign: "left",
    width: 77,
    height: 19.21,
  },
  ellipseIcon4: {
    position: "absolute",
    top: 0,
    left: 12,
    width: 19,
    height: 18.25,
    opacity: 0.56,
  },
  text6: {
    position: "absolute",
    top: 0,
    left: 19,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 5,
    height: 19.21,
  },
  text7: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 8,
    height: 19.21,
  },
  text8: {
    position: "absolute",
    top: 0,
    left: 34,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 9,
    height: 19.21,
  },
  nominaView1: {
    position: "absolute",
    top: 129.64,
    left: 270,
    width: 43,
    height: 19.21,
  },
  book2View: {
    position: "absolute",
    top: 184.38,
    left: 0,
    width: 351,
    height: 163.25,
  },
  buku3View: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    width: 351,
    height: 163.25,
  },
  rectangleView6: {
    position: "absolute",
    top: 15.36,
    left: 12,
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    width: 128,
    height: 104.67,
  },
  komputerDanJaringanDasar1Icon: {
    position: "absolute",
    top: 15.36,
    left: 32,
    width: 87,
    height: 103.71,
  },
  komputerDanJaringanDasar: {
    position: "absolute",
    top: 15.36,
    left: 148,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 194,
    height: 22.09,
  },
  pengetahuanDasarKomputerDan: {
    position: "absolute",
    top: 54.74,
    left: 148,
    fontSize: 10,
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 169,
    height: 21.13,
  },
  rp89000Text2: {
    position: "absolute",
    top: 129.64,
    left: 169,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ff0000",
    textAlign: "left",
    width: 77,
    height: 19.21,
  },
  ellipseIcon5: {
    position: "absolute",
    top: 0,
    left: 12,
    width: 19,
    height: 18.25,
    opacity: 0.56,
  },
  text9: {
    position: "absolute",
    top: 0,
    left: 19,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 5,
    height: 19.21,
  },
  text10: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 8,
    height: 19.21,
  },
  text11: {
    position: "absolute",
    top: 0,
    left: 34,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 9,
    height: 19.21,
  },
  nominaView2: {
    position: "absolute",
    top: 130.6,
    left: 270,
    width: 43,
    height: 19.21,
  },
  book3View: {
    position: "absolute",
    top: 368.75,
    left: 0,
    width: 351,
    height: 163.25,
  },
  groupView3: {
    position: "absolute",
    top: 92,
    left: 17,
    width: 351,
    height: 532,
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 336,
    height: 86,
  },
  subTotal: {
    position: "absolute",
    top: 17.27,
    left: 18,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
    width: 76,
    height: 31.68,
  },
  lihatPerincianText: {
    position: "absolute",
    top: 55.36,
    left: 18,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
    width: 108,
    height: 22.74,
  },
  rp150000Text: {
    position: "absolute",
    top: 17.27,
    left: 206,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "right",
    width: 110,
    height: 31.68,
  },
  groupView4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 336,
    height: 86,
  },
  groupView5: {
    position: "absolute",
    top: 637,
    left: 20,
    width: 336,
    height: 86,
  },
  rectangleView8: {
    position: "absolute",
    top: 0,
    left: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#ff9117",
    width: 390,
    height: 79,
  },
  transaksiText: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  transaksiPressable: {
    position: "absolute",
    left: 33,
    top: 32,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable: {
    position: "absolute",
    left: "4.77%",
    top: "42.21%",
    right: "91.73%",
    bottom: "25.43%",
    width: "3.49%",
    height: "32.36%",
  },
  transView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 390,
    height: 79,
  },
  lineView: {
    position: "absolute",
    top: 530.75,
    left: 43.75,
    borderStyle: "solid",
    borderColor: "rgba(72, 72, 72, 0.8)",
    borderTopWidth: 0.5,
    width: 288.5,
    height: 0.5,
  },
  lineView1: {
    position: "absolute",
    top: 773.75,
    left: 9.75,
    borderStyle: "solid",
    borderColor: "rgba(72, 72, 72, 0.8)",
    borderTopWidth: 0.5,
    width: 360.5,
    height: 0.5,
  },
  vectorIcon: {
    position: "absolute",
    height: "1.52%",
    width: "2.49%",
    top: "64.53%",
    right: "13.51%",
    bottom: "33.96%",
    left: "84%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView9: {
    position: "absolute",
    top: 52,
    left: 245,
    borderRadius: 8,
    backgroundColor: "#ff763c",
    width: 91,
    height: 35,
  },
  bayarText: {
    position: "absolute",
    top: 56,
    left: 263,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
  },
  totalText: {
    position: "absolute",
    top: 40,
    left: 0,
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#ff8f0c",
    textAlign: "left",
  },
  metodePembayaranText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#ff8311",
    textAlign: "left",
  },
  oVOText: {
    position: "absolute",
    top: 0,
    left: 272,
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#0500ff",
    textAlign: "left",
  },
  rp89000Text3: {
    position: "absolute",
    top: 55,
    left: 0,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#ff0000",
    textAlign: "right",
    width: 141,
    height: 29,
  },
  totaView: {
    position: "absolute",
    top: 742,
    left: 20,
    width: 336,
    height: 87,
  },
  rectangleView10: {
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
  transaksiView: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#ffce95",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Transaksi;
