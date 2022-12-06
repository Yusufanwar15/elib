const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Transaksi from "./screens/Transaksi";
import Profil from "./screens/Profil";
import Keranjang from "./screens/Keranjang";
import Inbox from "./screens/Inbox";
import Sugup from "./screens/Sugup";
import Login from "./screens/Login";
import Sp2 from "./screens/Sp2";
import Sp3 from "./screens/Sp3";
import Sp1 from "./screens/Sp1";
import VectorIcon from "./components/VectorIcon";
import Vector2 from "./components/Vector2";
import Vector1 from "./components/Vector1";
import Vector from "./components/Vector";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <VectorIcon />,
    <Vector2 />,
    <Vector1 />,
    <Vector />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <VectorIcon />,
    <Vector2 />,
    <Vector1 />,
    <Vector />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <SafeAreaView edges={["left", "right", "bottom"]}>
            <View
              style={{
                marginLeft: -195,
                width: 407,
                height: 77,
                flexDirection: "row",
              }}
            >
              {bottomTabItemsNormal.map((item, index) => {
                const isFocused = state.index === index;
                return (
                  <Pressable
                    onPress={() => {
                      navigation.navigate({
                        name: state.routes[index].name,
                        merge: true,
                      });
                    }}
                  >
                    {activeIndex === index
                      ? bottomTabItemsActive[index] || item
                      : item}
                  </Pressable>
                );
              })}
            </View>
          </SafeAreaView>
        );
      }}
    >
      <Tab.Screen
        name="Keranjang"
        component={Keranjang}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="Transaksi"
              component={Transaksi}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sugup"
              component={Sugup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sp2"
              component={Sp2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sp3"
              component={Sp3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sp1"
              component={Sp1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Sp2 />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
