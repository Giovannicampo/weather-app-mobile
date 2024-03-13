import { ReactElement, useEffect, useState } from "react";
import {
  SafeAreaView,
  TextInputSubmitEditingEventData,
  Pressable,
} from "react-native";
import { commonStyle } from "../assets/style/commonStyle";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { mainWeatherStyle } from "../assets/style/mainWeatherStyle";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  getCurrentWeatherByLocation,
  getForecastByLocation,
  getHistoryByLocation,
  resetCurrentWeatherStatus,
  resetForecastStatus,
  resetHistoryStatus,
  setCurrentWeatherFilterLocation,
  setForecastFilterLocation,
  setHistoryFilterLocation,
} from "../Weather/slice";
import MainBox from "./Boxes/MainBox";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import HoursBox from "./Boxes/HoursBox";
import ForecastBox from "./Boxes/ForecastBox";
import HistoryBox from "./Boxes/HistoryBox";
import AstroBox from "./Boxes/AstroBox";
import SearchBar from "../SearchBar/SearchBar";
import { PATH } from "../router/path";

export default function MainView(): ReactElement {
  const navigation = useNavigation();
  const weatherState = useAppSelector((state) => state.weather);
  const dispatch = useAppDispatch();

  // background
  let openBackground: boolean = true;
  const setOpenBackground = (flag: boolean): void => {
    openBackground = flag;
  };

  // search bar
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    dispatch(getCurrentWeatherByLocation(weatherState.currentWeatherFilter));
    if (weatherState.currentWeatherStatus === "successfully") {
      dispatch(resetCurrentWeatherStatus());
    }
  }, [weatherState.currentWeatherFilter]);

  useEffect(() => {
    dispatch(getForecastByLocation(weatherState.forecastFilter));
    if (weatherState.forecastStatus === "successfully") {
      dispatch(resetForecastStatus());
    }
  }, [weatherState.forecastFilter]);

  useEffect(() => {
    dispatch(getHistoryByLocation(weatherState.historyFilter));
    if (weatherState.historyStatus === "successfully") {
      dispatch(resetHistoryStatus());
    }
  }, [weatherState.forecastFilter]);

  const getMainBox = (): ReactElement => {
    if (
      weatherState.currentWeatherResponse !== undefined &&
      weatherState.currentWeatherResponse.current !== undefined &&
      weatherState.currentWeatherResponse.location !== undefined
    ) {
      const data = weatherState.currentWeatherResponse;
      return <MainBox data={data} />;
    }
    return <></>;
  };

  const getHoursBox = (): ReactElement => {
    if (
      weatherState.forecastResponse !== undefined &&
      weatherState.forecastResponse.current !== undefined &&
      weatherState.forecastResponse.location !== undefined &&
      weatherState.forecastResponse.forecast !== undefined
    ) {
      const todayHours =
        weatherState.forecastResponse.forecast.forecastday[0].hour;
      return <HoursBox hours={todayHours} />;
    }
    return <></>;
  };

  const getAstroBox = (): ReactElement => {
    if (
      weatherState.forecastResponse !== undefined &&
      weatherState.forecastResponse.current !== undefined &&
      weatherState.forecastResponse.location !== undefined &&
      weatherState.forecastResponse.forecast !== undefined
    ) {
      const todayHours =
        weatherState.forecastResponse.forecast.forecastday[0].astro;
      return <AstroBox data={todayHours} />;
    }
    return <></>;
  };

  const getForecastBox = (): ReactElement => {
    if (
      weatherState.forecastResponse !== undefined &&
      weatherState.forecastResponse.current !== undefined &&
      weatherState.forecastResponse.location !== undefined &&
      weatherState.forecastResponse.forecast !== undefined
    ) {
      const data = weatherState.forecastResponse;
      return (
        <Pressable
          onPress={() =>
            navigation.dispatch(CommonActions.navigate({ name: PATH.FORECAST }))
          }
        >
          {(pressed) => <ForecastBox pressed={pressed.pressed} data={data} />}
        </Pressable>
      );
    }
    return <></>;
  };

  const getHistoryBox = (): ReactElement => {
    if (
      weatherState.historyResponse !== undefined &&
      weatherState.historyResponse.location !== undefined &&
      weatherState.historyResponse.forecast !== undefined
    ) {
      const data = weatherState.historyResponse;
      return (
        <Pressable
          onPress={() =>
            navigation.dispatch(CommonActions.navigate({ name: PATH.HISTORY }))
          }
        >
          {(pressed) => <HistoryBox data={data} pressed={pressed.pressed} />}
        </Pressable>
      );
    }
    return <></>;
  };

  const getBackground = (): ReactElement => {
    if (
      weatherState.currentWeatherResponse !== undefined &&
      weatherState.currentWeatherResponse.current !== undefined &&
      weatherState.currentWeatherResponse.location !== undefined
    ) {
      const data = weatherState.currentWeatherResponse;
      return (
        <BackgroundVideo
          condition={data.current.condition}
          welcomeView={false}
          openFlag={true}
        />
      );
    }
    return <></>;
  };

  const onSubmit = (data: TextInputSubmitEditingEventData): void => {
    const newLocation = data.text;
    dispatch(setCurrentWeatherFilterLocation(newLocation));
    dispatch(setForecastFilterLocation(newLocation));
    dispatch(setHistoryFilterLocation(newLocation));
    setOpenBackground(false);
  };

  return (
    <SafeAreaView style={{ ...commonStyle.mainContainer }}>
      {getBackground()}
      <ScrollView
        style={{
          flex: 1,
          flexDirection: "column",
          alignSelf: "center",
        }}
      >
        <SearchBar
          clicked={clicked}
          setClicked={setClicked}
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          onSubmit={onSubmit}
        />
        {getMainBox()}
        {getHoursBox()}
        {getAstroBox()}
        {getForecastBox()}
        {getHistoryBox()}
      </ScrollView>
    </SafeAreaView>
  );
}
