import { StatusBar } from "react-native";
import { useAppDispatch } from "./src/redux/hooks";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import AppNavigator from "./src/router/router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import WelcomeView from "./src/WelcomeView/WelcomeView";

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <StatusBar
          animated={true}
          backgroundColor="#FFF"
          barStyle="dark-content"
        />
        {/* <WelcomeView /> */}
        <AppNavigator />
      </GestureHandlerRootView>
    </Provider>
  );
}
