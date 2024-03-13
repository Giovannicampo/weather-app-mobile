import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ReactElement, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeView from "../WelcomeView/WelcomeView";
import { PATH } from "./path";
import MainView from "../MainView/MainView";
import { Text } from "react-native";
import { useAppSelector } from "../redux/hooks";
import { Image } from "react-native";
import { commonStyle } from "../assets/style/commonStyle";
import ForecastView from "../ForecastView/ForecastView";
import HistoryView from "../HistoryView/HistoryView";

const BottomTab = createBottomTabNavigator();
const NativeStack = createNativeStackNavigator();

export default function AppNavigator(): ReactElement {
  const state = useAppSelector(state => state.state);
  const [welcome, setWelcome] = useState(true);

  useEffect(() => {
    setWelcome(state.welcome);
  }, [state.welcome])

  if(welcome)
    return (
      <NavigationContainer>
        <NativeStack.Navigator>
          <NativeStack.Screen
            name={PATH.WELCOME}
            component={WelcomeView}
            options={{ header: () => <></> }}
          />
        </NativeStack.Navigator>
      </NavigationContainer>
    );

    return (
      <NavigationContainer>
        <NativeStack.Navigator>
          <NativeStack.Screen
            name={PATH.BOTTOMTAB}
            component={BottomTabNavigator}
            options={{ header: () => <></> }}
          />
          <NativeStack.Screen
            name={PATH.MAIN}
            component={MainView}
            options={{ header: () => <></> }}
          />
          <NativeStack.Screen
            name={PATH.FORECAST}
            component={ForecastView}
            options={{ header: () => <></> }}
          />
          <NativeStack.Screen
            name={PATH.HISTORY}
            component={HistoryView}
            options={{ header: () => <></> }}
          />
        </NativeStack.Navigator>
      </NavigationContainer>
    );
}

function BottomTabNavigator(): ReactElement {
  return (
    <BottomTab.Navigator screenOptions={{ tabBarHideOnKeyboard: true }}>
      <BottomTab.Screen
        name="Home"
        component={MainView}
        options={{
          header: () => <></>,
          tabBarIcon: ({ focused }) => (
            <Image source={ focused ?
              require("../assets/pics/bottomtab_icons/home.png") :
              require("../assets/pics/bottomtab_icons/homegrey.png")
            } style={commonStyle.bottomTabIcon}/>
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#b33904" : "#959AB2",
                fontSize: 10,
                lineHeight: 12,
                fontFamily: "Arial",
                textAlign: "center",
              }}
            >
              Home
            </Text>
          ),
        }}
      />

      <BottomTab.Screen
        name="Forecast"
        component={ForecastView}
        options={{
          header: () => <></>,
          tabBarIcon: ({ focused }) => (
            <Image source={ focused ?
              require("../assets/pics/bottomtab_icons/forecast.png") :
              require("../assets/pics/bottomtab_icons/forecastgrey.png")
            } style={commonStyle.bottomTabIcon}/>
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#b33904" : "#959AB2",
                fontSize: 10,
                lineHeight: 12,
                fontFamily: "Arial",
                textAlign: "center",
              }}
            >
              Forecast
            </Text>
          ),
        }}
      />

      <BottomTab.Screen
        name="History"
        component={HistoryView}
        options={{
          header: () => <></>,
          tabBarIcon: ({ focused }) => (
            <Image source={ focused ?
              require("../assets/pics/bottomtab_icons/history.png") :
              require("../assets/pics/bottomtab_icons/historygrey.png")
            } style={commonStyle.bottomTabIcon}/>
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#b33904" : "#959AB2",
                fontSize: 10,
                lineHeight: 12,
                fontFamily: "Arial",
                textAlign: "center",
              }}
            >
              History
            </Text>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
