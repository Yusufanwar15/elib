import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Keranjang = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.keranjangView}>
      <View style={styles.frameView}>
        <View style={styles.book1View}>
          <View style={styles.buku1View} />
          <View style={styles.rectangleView} />
          <Image
            style={styles.iDDSK2019MTH041Icon}
            resizeMode="cover"
            source={require("../assets/id-dsk2019mth04-11.png")}
          />
          <Text style={styles.dasarSistemKomputer}>Dasar Sistem Komputer</Text>
          <Text style={styles.pengetahuanDasarSistemKompu}>
            pengetahuan dasar sistem komputer.
          </Text>
          <Text style={styles.rp89000Text}>Rp.89.000.-</Text>
          <View style={styles.nominaView}>
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/ellipse-343.png")}
            />
            <Text style={styles.text}>1</Text>
            <Text style={styles.text1}>-</Text>
            <Text style={styles.text2}>+</Text>
          </View>
        </View>
        <View style={styles.book2View}>
          <View style={styles.buku2View} />
          <View style={styles.rectangleView1} />
          <Image
            style={styles.bLKBAAKN20203282251Icon}
            resizeMode="cover"
            source={require("../assets/blk-baakn2020328225-11.png")}
          />
          <Text style={styles.aplikasiKomputerText}>Aplikasi Komputer</Text>
          <Text style={styles.pengetahuanDasarAplikasiKom}>
            pengetahuan dasar aplikasi komputer.
          </Text>
          <Text style={styles.rp89000Text1}>Rp.89.000.-</Text>
          <View style={styles.nominaView1}>
            <Image
              style={styles.ellipseIcon1}
              resizeMode="cover"
              source={require("../assets/ellipse-343.png")}
            />
            <Text style={styles.text3}>1</Text>
            <Text style={styles.text4}>-</Text>
            <Text style={styles.text5}>+</Text>
          </View>
        </View>
        <View style={styles.book1View1}>
          <View style={styles.buku1View1} />
          <View style={styles.rectangleView2} />
          <Image
            style={styles.iDDSK2019MTH041Icon1}
            resizeMode="cover"
            source={require("../assets/id-dsk2019mth04-11.png")}
          />
          <Text style={styles.dasarSistemKomputer1}>Dasar Sistem Komputer</Text>
          <Text style={styles.pengetahuanDasarSistemKompu1}>
            pengetahuan dasar sistem komputer.
          </Text>
          <Text style={styles.rp89000Text2}>Rp.89.000.-</Text>
          <View style={styles.nominaView2}>
            <Image
              style={styles.ellipseIcon2}
              resizeMode="cover"
              source={require("../assets/ellipse-343.png")}
            />
            <Text style={styles.text6}>1</Text>
            <Text style={styles.text7}>-</Text>
            <Text style={styles.text8}>+</Text>
          </View>
        </View>
        <View style={styles.book2View1}>
          <View style={styles.buku2View1} />
          <View style={styles.rectangleView3} />
          <Image
            style={styles.bLKBAAKN20203282251Icon1}
            resizeMode="cover"
            source={require("../assets/blk-baakn2020328225-11.png")}
          />
          <Text style={styles.aplikasiKomputerText1}>Aplikasi Komputer</Text>
          <Text style={styles.pengetahuanDasarAplikasiKom1}>
            pengetahuan dasar aplikasi komputer.
          </Text>
          <Text style={styles.rp89000Text3}>Rp.89.000.-</Text>
          <View style={styles.nominaView3}>
            <Image
              style={styles.ellipseIcon3}
              resizeMode="cover"
              source={require("../assets/ellipse-343.png")}
            />
            <Text style={styles.text9}>1</Text>
            <Text style={styles.text10}>-</Text>
            <Text style={styles.text11}>+</Text>
          </View>
        </View>
        <View style={styles.book3View}>
          <View style={styles.buku3View} />
          <View style={styles.rectangleView4} />
          <Image
            style={styles.komputerDanJaringanDasar1Icon}
            resizeMode="cover"
            source={require("../assets/komputerdanjaringandasar-11.png")}
          />
          <Text style={styles.komputerDanJaringanDasar}>
            Komputer dan Jaringan Dasar
          </Text>
          <Text style={styles.pengetahuanDasarKomputerDan}>
            pengetahuan dasar Komputer dan Jaringan Dasar.
          </Text>
          <Text style={styles.rp89000Text4}>Rp.89.000.-</Text>
          <View style={styles.nominaView4}>
            <Image
              style={styles.ellipseIcon4}
              resizeMode="cover"
              source={require("../assets/ellipse-343.png")}
            />
            <Text style={styles.text12}>1</Text>
            <Text style={styles.text13}>-</Text>
            <Text style={styles.text14}>+</Text>
          </View>
        </View>
        <View style={styles.book4View}>
          <View style={styles.buku4View} />
          <View style={styles.rectangleView5} />
          <Image
            style={styles.bLKPIMK20209515561Icon}
            resizeMode="cover"
            source={require("../assets/blk-pimk2020951556-1.png")}
          />
          <Text style={styles.manusiaKomputer}>Manusia - Komputer</Text>
          <Text style={styles.pengetahuanDasarInteraksiMa}>
            pengetahuan dasar interaksi manusia dan komputer.
          </Text>
          <Text style={styles.rp89000Text5}>Rp.89.000.-</Text>
          <View style={styles.nominaView5}>
            <Image
              style={styles.ellipseIcon5}
              resizeMode="cover"
              source={require("../assets/ellipse-343.png")}
            />
            <Text style={styles.text15}>1</Text>
            <Text style={styles.text16}>-</Text>
            <Text style={styles.text17}>+</Text>
          </View>
        </View>
        <View style={styles.rectangleView6} />
        <View style={styles.rectangleView7} />
        <View style={styles.rectangleView8} />
      </View>
      <View style={styles.rectangleView9} />
      <View style={styles.rectangleView10} />
      <View style={styles.rectangleView11} />
      <View style={styles.pilihanView}>
        <View style={styles.rectangleView12} />
        <Text style={styles.pilihSemuaText}>Pilih semua</Text>
      </View>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Transaksi")}
      />
      <Text style={styles.lanjutkanText}>Lanjutkan</Text>
      <View style={styles.headView}>
        <View style={styles.rectangleView13} />
        <View style={styles.rectangleView14} />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector13.png")}
        />
        <Text style={styles.keranjangText}>Keranjang</Text>
      </View>
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../assets/vector14.png")}
      />
      <View style={styles.component4View}>
        <View style={styles.rectangleView15} />
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
    height: 170,
  },
  rectangleView: {
    position: "absolute",
    top: 14,
    left: 12,
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    width: 128,
    height: 109,
  },
  iDDSK2019MTH041Icon: {
    position: "absolute",
    top: 15,
    left: 34,
    borderRadius: 5,
    width: 84,
    height: 107,
  },
  dasarSistemKomputer: {
    position: "absolute",
    top: 14,
    left: 151,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
  },
  pengetahuanDasarSistemKompu: {
    position: "absolute",
    top: 37,
    left: 151,
    fontSize: 10,
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 105,
    height: 17,
  },
  rp89000Text: {
    position: "absolute",
    top: 137,
    left: 169,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ff0000",
    textAlign: "left",
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 12,
    width: 19,
    height: 19,
    opacity: 0.56,
  },
  text: {
    position: "absolute",
    top: 0,
    left: 19,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
  },
  text2: {
    position: "absolute",
    top: 0,
    left: 34,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
  },
  nominaView: {
    position: "absolute",
    top: 138,
    left: 270,
    width: 43,
    height: 20,
  },
  book1View: {
    position: "absolute",
    top: 764,
    left: 0,
    width: 351,
    height: 170,
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
    height: 170,
  },
  rectangleView1: {
    position: "absolute",
    top: 13,
    left: 12,
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    width: 128,
    height: 109,
  },
  bLKBAAKN20203282251Icon: {
    position: "absolute",
    top: 14,
    left: 37,
    width: 79,
    height: 108,
  },
  aplikasiKomputerText: {
    position: "absolute",
    top: 13,
    left: 148,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
  },
  pengetahuanDasarAplikasiKom: {
    position: "absolute",
    top: 36,
    left: 148,
    fontSize: 10,
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 105,
    height: 17,
  },
  rp89000Text1: {
    position: "absolute",
    top: 134,
    left: 169,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ff0000",
    textAlign: "left",
  },
  ellipseIcon1: {
    position: "absolute",
    top: 0,
    left: 12,
    width: 19,
    height: 19,
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
  },
  nominaView1: {
    position: "absolute",
    top: 134,
    left: 270,
    width: 43,
    height: 20,
  },
  book2View: {
    position: "absolute",
    top: 956,
    left: 0,
    width: 351,
    height: 170,
  },
  buku1View1: {
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
    height: 170,
  },
  rectangleView2: {
    position: "absolute",
    top: 14,
    left: 12,
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    width: 128,
    height: 109,
  },
  iDDSK2019MTH041Icon1: {
    position: "absolute",
    top: 15,
    left: 34,
    borderRadius: 5,
    width: 84,
    height: 107,
  },
  dasarSistemKomputer1: {
    position: "absolute",
    top: 14,
    left: 151,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
  },
  pengetahuanDasarSistemKompu1: {
    position: "absolute",
    top: 37,
    left: 151,
    fontSize: 10,
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 105,
    height: 17,
  },
  rp89000Text2: {
    position: "absolute",
    top: 135,
    left: 169,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ff0000",
    textAlign: "left",
  },
  ellipseIcon2: {
    position: "absolute",
    top: 0,
    left: 12,
    width: 19,
    height: 19,
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
  },
  nominaView2: {
    position: "absolute",
    top: 135,
    left: 270,
    width: 43,
    height: 20,
  },
  book1View1: {
    position: "absolute",
    top: 0,
    left: 3,
    width: 351,
    height: 170,
  },
  buku2View1: {
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
    height: 170,
  },
  rectangleView3: {
    position: "absolute",
    top: 13,
    left: 12,
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    width: 128,
    height: 109,
  },
  bLKBAAKN20203282251Icon1: {
    position: "absolute",
    top: 14,
    left: 37,
    width: 79,
    height: 108,
  },
  aplikasiKomputerText1: {
    position: "absolute",
    top: 13,
    left: 148,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
  },
  pengetahuanDasarAplikasiKom1: {
    position: "absolute",
    top: 36,
    left: 148,
    fontSize: 10,
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 105,
    height: 17,
  },
  rp89000Text3: {
    position: "absolute",
    top: 135,
    left: 169,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ff0000",
    textAlign: "left",
  },
  ellipseIcon3: {
    position: "absolute",
    top: 0,
    left: 12,
    width: 19,
    height: 19,
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
  },
  nominaView3: {
    position: "absolute",
    top: 135,
    left: 270,
    width: 43,
    height: 20,
  },
  book2View1: {
    position: "absolute",
    top: 192,
    left: 3,
    width: 351,
    height: 170,
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
    height: 170,
  },
  rectangleView4: {
    position: "absolute",
    top: 16,
    left: 12,
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    width: 128,
    height: 109,
  },
  komputerDanJaringanDasar1Icon: {
    position: "absolute",
    top: 16,
    left: 32,
    width: 87,
    height: 108,
  },
  komputerDanJaringanDasar: {
    position: "absolute",
    top: 16,
    left: 148,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 194,
    height: 23,
  },
  pengetahuanDasarKomputerDan: {
    position: "absolute",
    top: 57,
    left: 148,
    fontSize: 10,
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 169,
    height: 22,
  },
  rp89000Text4: {
    position: "absolute",
    top: 135,
    left: 169,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ff0000",
    textAlign: "left",
  },
  ellipseIcon4: {
    position: "absolute",
    top: 0,
    left: 12,
    width: 19,
    height: 19,
    opacity: 0.56,
  },
  text12: {
    position: "absolute",
    top: 0,
    left: 19,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
  },
  text13: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
  },
  text14: {
    position: "absolute",
    top: 0,
    left: 34,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
  },
  nominaView4: {
    position: "absolute",
    top: 136,
    left: 270,
    width: 43,
    height: 20,
  },
  book3View: {
    position: "absolute",
    top: 384,
    left: 3,
    width: 351,
    height: 170,
  },
  buku4View: {
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
    height: 170,
  },
  rectangleView5: {
    position: "absolute",
    top: 16,
    left: 13,
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    width: 128,
    height: 109,
  },
  bLKPIMK20209515561Icon: {
    position: "absolute",
    top: 16,
    left: 36,
    width: 81,
    height: 109,
  },
  manusiaKomputer: {
    position: "absolute",
    top: 16,
    left: 148,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
  },
  pengetahuanDasarInteraksiMa: {
    position: "absolute",
    top: 39,
    left: 148,
    fontSize: 10,
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 194,
    height: 32,
  },
  rp89000Text5: {
    position: "absolute",
    top: 135,
    left: 169,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ff0000",
    textAlign: "left",
  },
  ellipseIcon5: {
    position: "absolute",
    top: 0,
    left: 12,
    width: 19,
    height: 19,
    opacity: 0.56,
  },
  text15: {
    position: "absolute",
    top: 0,
    left: 19,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
  },
  text16: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
  },
  text17: {
    position: "absolute",
    top: 0,
    left: 34,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
  },
  nominaView5: {
    position: "absolute",
    top: 137,
    left: 270,
    width: 43,
    height: 20,
  },
  book4View: {
    position: "absolute",
    top: 576,
    left: 3,
    width: 351,
    height: 170,
  },
  rectangleView6: {
    position: "absolute",
    top: 138,
    left: 323,
    borderStyle: "solid",
    borderColor: "#594545",
    borderWidth: 2,
    width: 15,
    height: 15,
  },
  rectangleView7: {
    position: "absolute",
    top: 330,
    left: 323,
    borderStyle: "solid",
    borderColor: "#594545",
    borderWidth: 2,
    width: 15,
    height: 15,
  },
  rectangleView8: {
    position: "absolute",
    top: 522,
    left: 323,
    borderStyle: "solid",
    borderColor: "#594545",
    borderWidth: 2,
    width: 15,
    height: 15,
  },
  frameView: {
    position: "absolute",
    top: 113,
    left: 19,
    width: 354,
    height: 676,
  },
  rectangleView9: {
    position: "absolute",
    top: 828,
    left: 342,
    borderStyle: "solid",
    borderColor: "#594545",
    borderWidth: 2,
    width: 15,
    height: 15,
  },
  rectangleView10: {
    position: "absolute",
    top: 1018,
    left: 342,
    borderStyle: "solid",
    borderColor: "#594545",
    borderWidth: 2,
    width: 15,
    height: 15,
  },
  rectangleView11: {
    position: "absolute",
    top: 1206,
    left: 342,
    borderStyle: "solid",
    borderColor: "#594545",
    borderWidth: 2,
    width: 15,
    height: 15,
  },
  rectangleView12: {
    position: "absolute",
    top: 3,
    left: 82,
    borderStyle: "solid",
    borderColor: "#594545",
    borderWidth: 2,
    width: 15,
    height: 15,
  },
  pilihSemuaText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#594545",
    textAlign: "left",
  },
  pilihanView: {
    position: "absolute",
    top: 90,
    left: 278,
    width: 97,
    height: 20,
  },
  rectanglePressable: {
    position: "absolute",
    top: 1268,
    left: 107,
    borderRadius: 50,
    backgroundColor: "#ff763c",
    width: 182,
    height: 42,
  },
  lanjutkanText: {
    position: "absolute",
    top: 1274,
    left: 146,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView13: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#ff9117",
    width: 390,
    height: 70,
  },
  rectangleView14: {
    position: "absolute",
    top: 34.13,
    left: 216,
    borderRadius: 30,
    backgroundColor: "#e4e4e4",
    width: 152,
    height: 24.81,
  },
  vectorIcon: {
    position: "absolute",
    height: "34.3%",
    width: "2.82%",
    top: "102.59%",
    right: "88.72%",
    bottom: "-36.89%",
    left: "8.46%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  keranjangText: {
    position: "absolute",
    top: 28,
    left: 34,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
    width: 129,
    height: 25.93,
  },
  headView: {
    position: "absolute",
    top: 17,
    left: 0,
    width: 390,
    height: 70,
  },
  vectorIcon1: {
    position: "absolute",
    height: "1.25%",
    width: "3.85%",
    top: "3.96%",
    right: "8.46%",
    bottom: "94.79%",
    left: "87.69%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView15: {
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
  keranjangView: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 1421,
    overflow: "hidden",
  },
});

export default Keranjang;
