import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Dashboard = ({ style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.dashboardView, style]}>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Image
        style={styles.basicIcon}
        resizeMode="cover"
        source={require("../assets/basic.png")}
      />
      <View style={styles.searchView}>
        <View style={styles.katergoriView} />
        <Text style={styles.cariJudulpenulisText}>Cari judul/penulis</Text>
        <Image
          style={styles.pngtreevectorSearchIcon378}
          resizeMode="cover"
          source={require("../assets/pngtreevector-search-icon-3783210-1.png")}
        />
      </View>
      <Text style={styles.logOutText}>LogOut</Text>
      <View style={styles.component5View}>
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
      <View style={styles.frameView}>
        <View style={styles.book4View}>
          <View style={styles.buku4View} />
          <View style={styles.rectangleView1} />
          <Image
            style={styles.bLKPIMK20209515561Icon}
            resizeMode="cover"
            source={require("../assets/blk-pimk2020951556-11.png")}
          />
        </View>
        <View style={styles.book2View}>
          <View style={styles.buku2View} />
          <View style={styles.rectangleView2} />
          <Image
            style={styles.bLKBAAKN20203282251Icon}
            resizeMode="cover"
            source={require("../assets/blk-baakn2020328225-13.png")}
          />
          <View style={styles.groupView}>
            <View style={styles.rectangleView3} />
            <Pressable
              style={styles.vectorPressable}
              onPress={() =>
                navigation.navigate("BottomTabsRoot", { screen: "Keranjang" })
              }
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/vector25.png")}
              />
            </Pressable>
            <Text style={styles.rp89000Text}>Rp.89.000.-</Text>
          </View>
        </View>
        <View style={styles.book3View}>
          <View style={styles.buku3View} />
          <View style={styles.groupView1}>
            <View style={styles.rectangleView4} />
            <Pressable
              style={styles.vectorPressable1}
              onPress={() =>
                navigation.navigate("BottomTabsRoot", { screen: "Keranjang" })
              }
            >
              <Image
                style={styles.icon1}
                resizeMode="cover"
                source={require("../assets/vector25.png")}
              />
            </Pressable>
            <Text style={styles.rp89000Text1}>Rp.89.000.-</Text>
          </View>
          <View style={styles.rectangleView5} />
          <Image
            style={styles.komputerDanJaringanDasar1Icon}
            resizeMode="cover"
            source={require("../assets/komputerdanjaringandasar-12.png")}
          />
        </View>
        <View style={styles.book4View1}>
          <View style={styles.buku4View1} />
          <View style={styles.groupView2}>
            <View style={styles.rectangleView6} />
            <Pressable
              style={styles.vectorPressable2}
              onPress={() =>
                navigation.navigate("BottomTabsRoot", { screen: "Keranjang" })
              }
            >
              <Image
                style={styles.icon2}
                resizeMode="cover"
                source={require("../assets/vector25.png")}
              />
            </Pressable>
            <Text style={styles.rp89000Text2}>Rp.89.000.-</Text>
          </View>
          <View style={styles.rectangleView7} />
          <Image
            style={styles.bLKPIMK20209515561Icon1}
            resizeMode="cover"
            source={require("../assets/blk-pimk2020951556-11.png")}
          />
        </View>
        <View style={styles.view}>
          <View style={styles.buku3View1} />
          <View style={styles.rectangleView8} />
          <Image
            style={styles.komputerDanJaringanDasar1Icon1}
            resizeMode="cover"
            source={require("../assets/komputerdanjaringandasar-11.png")}
          />
        </View>
        <View style={styles.view1}>
          <View style={styles.buku4View2} />
          <View style={styles.rectangleView9} />
          <Image
            style={styles.bLKPIMK20209515561Icon2}
            resizeMode="cover"
            source={require("../assets/blk-pimk2020951556-1.png")}
          />
          <View style={styles.groupView3}>
            <View style={styles.rectangleView10} />
            <Pressable
              style={styles.vectorPressable3}
              onPress={() =>
                navigation.navigate("BottomTabsRoot", { screen: "Keranjang" })
              }
            >
              <Image
                style={styles.icon3}
                resizeMode="cover"
                source={require("../assets/vector28.png")}
              />
            </Pressable>
            <Text style={styles.rp89000Text3}>Rp.89.000.-</Text>
          </View>
        </View>
        <View style={styles.groupView4}>
          <View style={styles.rectangleView11} />
          <Pressable
            style={styles.vectorPressable4}
            onPress={() =>
              navigation.navigate("BottomTabsRoot", { screen: "Keranjang" })
            }
          >
            <Image
              style={styles.icon4}
              resizeMode="cover"
              source={require("../assets/vector28.png")}
            />
          </Pressable>
          <Text style={styles.rp89000Text4}>Rp.89.000.-</Text>
        </View>
      </View>
      <View style={styles.horizonScrolView}>
        <View style={styles.gb1View}>
          <View style={styles.book1View}>
            <View style={styles.buku1View} />
            <View style={styles.rectangleView12} />
            <Image
              style={styles.iDDSK2019MTH041Icon}
              resizeMode="cover"
              source={require("../assets/id-dsk2019mth04-11.png")}
            />
            <View style={styles.groupView5}>
              <View style={styles.rectangleView13} />
              <Pressable
                style={styles.vectorPressable5}
                onPress={() =>
                  navigation.navigate("BottomTabsRoot", { screen: "Keranjang" })
                }
              >
                <Image
                  style={styles.icon5}
                  resizeMode="cover"
                  source={require("../assets/vector28.png")}
                />
              </Pressable>
              <Text style={styles.rp89000Text5}>Rp.89.000.-</Text>
            </View>
          </View>
          <View style={styles.book2View1}>
            <View style={styles.buku2View1} />
            <View style={styles.rectangleView14} />
            <Image
              style={styles.bLKBAAKN20203282251Icon1}
              resizeMode="cover"
              source={require("../assets/blk-baakn2020328225-11.png")}
            />
            <View style={styles.groupView6}>
              <View style={styles.rectangleView15} />
              <Pressable
                style={styles.vectorPressable6}
                onPress={() =>
                  navigation.navigate("BottomTabsRoot", { screen: "Keranjang" })
                }
              >
                <Image
                  style={styles.icon6}
                  resizeMode="cover"
                  source={require("../assets/vector28.png")}
                />
              </Pressable>
              <Text style={styles.rp89000Text6}>Rp.89.000.-</Text>
            </View>
          </View>
          <View style={styles.book3View1}>
            <View style={styles.buku3View2} />
            <View style={styles.rectangleView16} />
            <Image
              style={styles.komputerDanJaringanDasar1Icon2}
              resizeMode="cover"
              source={require("../assets/komputerdanjaringandasar-12.png")}
            />
            <View style={styles.groupView7}>
              <View style={styles.rectangleView17} />
              <Pressable
                style={styles.vectorPressable7}
                onPress={() =>
                  navigation.navigate("BottomTabsRoot", { screen: "Keranjang" })
                }
              >
                <Image
                  style={styles.icon7}
                  resizeMode="cover"
                  source={require("../assets/vector25.png")}
                />
              </Pressable>
              <Text style={styles.rp89000Text7}>Rp.89.000.-</Text>
            </View>
          </View>
          <View style={styles.book4View2}>
            <View style={styles.buku4View3} />
            <View style={styles.groupView8}>
              <View style={styles.rectangleView18} />
              <Pressable
                style={styles.vectorPressable8}
                onPress={() =>
                  navigation.navigate("BottomTabsRoot", { screen: "Keranjang" })
                }
              >
                <Image
                  style={styles.icon8}
                  resizeMode="cover"
                  source={require("../assets/vector25.png")}
                />
              </Pressable>
              <Text style={styles.rp89000Text8}>Rp.89.000.-</Text>
            </View>
            <View style={styles.rectangleView19} />
            <Image
              style={styles.bLKPIMK20209515561Icon3}
              resizeMode="cover"
              source={require("../assets/blk-pimk2020951556-11.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.component4View}>
        <View style={styles.rectangleView20} />
        <View style={styles.statusBarView1}>
          <Image
            style={styles.notchIcon1}
            resizeMode="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.statusIconsView1}>
            <Image
              style={styles.networkSignalLight1}
              resizeMode="cover"
              source={require("../assets/network-signal-light.png")}
            />
            <Image
              style={[styles.wiFiSignalLight1, styles.ml4]}
              resizeMode="cover"
              source={require("../assets/wifi-signal--light.png")}
            />
            <Image
              style={[styles.batteryLight1, styles.ml4]}
              resizeMode="cover"
              source={require("../assets/battery--light.png")}
            />
          </View>
          <Image
            style={styles.indicatorIcon1}
            resizeMode="cover"
            source={require("../assets/indicator.png")}
          />
          <Image
            style={styles.timeLight1}
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
  ellipseIcon: {
    position: "absolute",
    top: 301,
    left: 0,
    width: 876,
    height: 1002,
  },
  basicIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    width: 389,
    height: 295,
  },
  katergoriView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.5)",
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
    width: 165,
    height: 37,
  },
  cariJudulpenulisText: {
    position: "absolute",
    top: 9,
    left: 44,
    fontSize: 13,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "rgba(7, 0, 0, 0.4)",
    textAlign: "center",
  },
  pngtreevectorSearchIcon378: {
    position: "absolute",
    top: 3,
    left: 5,
    width: 32,
    height: 32,
  },
  searchView: {
    position: "absolute",
    top: 295,
    left: 191,
    width: 165,
    height: 37,
  },
  logOutText: {
    position: "absolute",
    top: 70,
    left: 324,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
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
    backgroundColor: "#035397",
  },
  notchIcon: {
    position: "absolute",
    top: 0,
    right: -0.42,
    left: 0,
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
  component5View: {
    position: "absolute",
    top: -22,
    left: -26,
    width: 414,
    height: 53,
    display: "none",
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
    width: 152,
    height: 170,
  },
  rectangleView1: {
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
  book4View: {
    position: "absolute",
    top: 0,
    left: 531,
    width: 152,
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
    width: 152,
    height: 170,
  },
  rectangleView2: {
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
    left: 389,
    width: 79,
    height: 108,
  },
  rectangleView3: {
    position: "absolute",
    top: 19,
    left: 0,
    borderRadius: 40,
    backgroundColor: "#ff7527",
    width: 71,
    height: 27,
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
    left: "22.02%",
    top: "52.17%",
    right: "56.88%",
    bottom: "10.87%",
    width: "21.1%",
    height: "36.96%",
  },
  rp89000Text: {
    position: "absolute",
    top: 0,
    left: 1,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ff0000",
    textAlign: "left",
    width: 108,
    height: 29,
  },
  groupView: {
    position: "absolute",
    top: 122,
    left: 40,
    width: 109,
    height: 46,
  },
  book2View: {
    position: "absolute",
    top: 0,
    left: 352,
    width: 152,
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
    width: 152,
    height: 170,
  },
  rectangleView4: {
    position: "absolute",
    top: 19,
    left: 0,
    borderRadius: 40,
    backgroundColor: "#ff7527",
    width: 71,
    height: 27,
  },
  icon1: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable1: {
    position: "absolute",
    left: "22.02%",
    top: "52.17%",
    right: "56.88%",
    bottom: "10.87%",
    width: "21.1%",
    height: "36.96%",
  },
  rp89000Text1: {
    position: "absolute",
    top: 0,
    left: 1,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ff0000",
    textAlign: "left",
    width: 108,
    height: 29,
  },
  groupView1: {
    position: "absolute",
    top: 122,
    left: 40,
    width: 109,
    height: 46,
  },
  rectangleView5: {
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
  book3View: {
    position: "absolute",
    top: 0,
    left: 531,
    width: 152,
    height: 170,
  },
  buku4View1: {
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
    width: 152,
    height: 170,
  },
  rectangleView6: {
    position: "absolute",
    top: 19,
    left: 0,
    borderRadius: 40,
    backgroundColor: "#ff7527",
    width: 71,
    height: 27,
  },
  icon2: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable2: {
    position: "absolute",
    left: "22.02%",
    top: "52.17%",
    right: "56.88%",
    bottom: "10.87%",
    width: "21.1%",
    height: "36.96%",
  },
  rp89000Text2: {
    position: "absolute",
    top: 0,
    left: 1,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ff0000",
    textAlign: "left",
    width: 108,
    height: 29,
  },
  groupView2: {
    position: "absolute",
    top: 122,
    left: 40,
    width: 109,
    height: 46,
  },
  rectangleView7: {
    position: "absolute",
    top: 16,
    left: 13,
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    width: 128,
    height: 109,
  },
  bLKPIMK20209515561Icon1: {
    position: "absolute",
    top: 16,
    left: 36,
    width: 81,
    height: 109,
  },
  book4View1: {
    position: "absolute",
    top: 0,
    left: 710,
    width: 152,
    height: 170,
  },
  buku3View1: {
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
    width: 152,
    height: 170,
  },
  rectangleView8: {
    position: "absolute",
    top: 16,
    left: 12,
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    width: 128,
    height: 109,
  },
  komputerDanJaringanDasar1Icon1: {
    position: "absolute",
    top: 16,
    left: 32,
    width: 87,
    height: 108,
  },
  view: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 152,
    height: 170,
  },
  buku4View2: {
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
    width: 152,
    height: 170,
  },
  rectangleView9: {
    position: "absolute",
    top: 16,
    left: 13,
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    width: 128,
    height: 109,
  },
  bLKPIMK20209515561Icon2: {
    position: "absolute",
    top: 16,
    left: 36,
    width: 81,
    height: 109,
  },
  rectangleView10: {
    position: "absolute",
    top: 19,
    left: 0,
    borderRadius: 40,
    backgroundColor: "#ff7527",
    width: 71,
    height: 27,
  },
  icon3: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable3: {
    position: "absolute",
    left: "22.02%",
    top: "52.17%",
    right: "56.88%",
    bottom: "10.87%",
    width: "21.1%",
    height: "36.96%",
  },
  rp89000Text3: {
    position: "absolute",
    top: 0,
    left: 1,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ff0000",
    textAlign: "left",
    width: 108,
    height: 29,
  },
  groupView3: {
    position: "absolute",
    top: 122,
    left: 40,
    width: 109,
    height: 46,
  },
  view1: {
    position: "absolute",
    top: 0,
    left: 179,
    width: 152,
    height: 170,
  },
  rectangleView11: {
    position: "absolute",
    top: 19,
    left: 0,
    borderRadius: 40,
    backgroundColor: "#ff7527",
    width: 71,
    height: 27,
  },
  icon4: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable4: {
    position: "absolute",
    left: "22.02%",
    top: "52.17%",
    right: "56.88%",
    bottom: "10.87%",
    width: "21.1%",
    height: "36.96%",
  },
  rp89000Text4: {
    position: "absolute",
    top: 0,
    left: 1,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ff0000",
    textAlign: "left",
    width: 108,
    height: 29,
  },
  groupView4: {
    position: "absolute",
    top: 122,
    left: 40,
    width: 109,
    height: 46,
  },
  frameView: {
    position: "absolute",
    top: 554,
    left: 25,
    width: 343,
    height: 170,
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
    width: 152,
    height: 170,
  },
  rectangleView12: {
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
  rectangleView13: {
    position: "absolute",
    top: 19,
    left: 0,
    borderRadius: 40,
    backgroundColor: "#ff7527",
    width: 71,
    height: 27,
  },
  icon5: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable5: {
    position: "absolute",
    left: "22.02%",
    top: "52.17%",
    right: "56.88%",
    bottom: "10.87%",
    width: "21.1%",
    height: "36.96%",
  },
  rp89000Text5: {
    position: "absolute",
    top: 0,
    left: 1,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ff0000",
    textAlign: "left",
    width: 108,
    height: 29,
  },
  groupView5: {
    position: "absolute",
    top: 122,
    left: 40,
    width: 109,
    height: 46,
  },
  book1View: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 152,
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
    width: 152,
    height: 170,
  },
  rectangleView14: {
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
  rectangleView15: {
    position: "absolute",
    top: 19,
    left: 0,
    borderRadius: 40,
    backgroundColor: "#ff7527",
    width: 71,
    height: 27,
  },
  icon6: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable6: {
    position: "absolute",
    left: "22.02%",
    top: "52.17%",
    right: "56.88%",
    bottom: "10.87%",
    width: "21.1%",
    height: "36.96%",
  },
  rp89000Text6: {
    position: "absolute",
    top: 0,
    left: 1,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ff0000",
    textAlign: "left",
    width: 108,
    height: 29,
  },
  groupView6: {
    position: "absolute",
    top: 122,
    left: 40,
    width: 109,
    height: 46,
  },
  book2View1: {
    position: "absolute",
    top: 0,
    left: 180,
    width: 152,
    height: 170,
  },
  buku3View2: {
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
    width: 152,
    height: 170,
  },
  rectangleView16: {
    position: "absolute",
    top: 16,
    left: 12,
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    width: 128,
    height: 109,
  },
  komputerDanJaringanDasar1Icon2: {
    position: "absolute",
    top: 18,
    left: 384,
    width: 87,
    height: 108,
  },
  rectangleView17: {
    position: "absolute",
    top: 19,
    left: 0,
    borderRadius: 40,
    backgroundColor: "#ff7527",
    width: 71,
    height: 27,
  },
  icon7: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable7: {
    position: "absolute",
    left: "22.02%",
    top: "52.17%",
    right: "56.88%",
    bottom: "10.87%",
    width: "21.1%",
    height: "36.96%",
  },
  rp89000Text7: {
    position: "absolute",
    top: 0,
    left: 1,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ff0000",
    textAlign: "left",
    width: 108,
    height: 29,
  },
  groupView7: {
    position: "absolute",
    top: 122,
    left: 40,
    width: 109,
    height: 46,
  },
  book3View1: {
    position: "absolute",
    top: 2,
    left: 352,
    width: 152,
    height: 170,
  },
  buku4View3: {
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
    width: 152,
    height: 170,
  },
  rectangleView18: {
    position: "absolute",
    top: 19,
    left: 0,
    borderRadius: 40,
    backgroundColor: "#ff7527",
    width: 71,
    height: 27,
  },
  icon8: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable8: {
    position: "absolute",
    left: "22.02%",
    top: "52.17%",
    right: "56.88%",
    bottom: "10.87%",
    width: "21.1%",
    height: "36.96%",
  },
  rp89000Text8: {
    position: "absolute",
    top: 0,
    left: 1,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#ff0000",
    textAlign: "left",
    width: 108,
    height: 29,
  },
  groupView8: {
    position: "absolute",
    top: 122,
    left: 40,
    width: 109,
    height: 46,
  },
  rectangleView19: {
    position: "absolute",
    top: 16,
    left: 13,
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    width: 128,
    height: 109,
  },
  bLKPIMK20209515561Icon3: {
    position: "absolute",
    top: 16,
    left: 36,
    width: 81,
    height: 109,
  },
  book4View2: {
    position: "absolute",
    top: 2,
    left: 531,
    width: 152,
    height: 170,
  },
  gb1View: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 683,
    height: 172,
  },
  horizonScrolView: {
    position: "absolute",
    top: 358,
    left: 25,
    width: 336,
    height: 172,
  },
  rectangleView20: {
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
  notchIcon1: {
    position: "absolute",
    top: 0.65,
    right: -4.25,
    left: 3.75,
    maxWidth: "100%",
    overflow: "hidden",
    height: 30,
  },
  networkSignalLight1: {
    position: "relative",
    width: 20,
    height: 14,
    flexShrink: 0,
  },
  wiFiSignalLight1: {
    position: "relative",
    width: 16,
    height: 14,
    flexShrink: 0,
  },
  batteryLight1: {
    position: "relative",
    width: 25,
    height: 14,
    flexShrink: 0,
  },
  statusIconsView1: {
    position: "absolute",
    top: 16,
    right: 13.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  indicatorIcon1: {
    position: "absolute",
    top: 8,
    right: 70.5,
    width: 6,
    height: 6,
  },
  timeLight1: {
    position: "absolute",
    top: 12,
    left: 21,
    borderRadius: 20,
    width: 54,
    height: 21,
    overflow: "hidden",
  },
  statusBarView1: {
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
  dashboardView: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#fff",
    width: 390,
    height: 844,
    overflow: "hidden",
  },
});

export default Dashboard;
