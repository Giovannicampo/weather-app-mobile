import { ReactElement, useEffect, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  ScrollView,
} from "react-native";
import { commonStyle } from "../assets/style/commonStyle";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  getCurrentWeatherByLocation,
  getForecastByLocation,
  resetForecastStatus,
} from "../Weather/slice";
import ForecastBox from "../MainView/Boxes/ForecastBox";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import { ForecastDay } from "../Weather/dto";
import ForecastDayBox from "./ForecastDayBox/ForecastDayBox";

export default function ForecastView(): ReactElement {
  const weatherState = useAppSelector((state) => state.weather);
  const dispatch = useAppDispatch();
  const [currentForecastDay, setCurrentForecastDay] = useState<
    ForecastDay | undefined
  >(undefined);

  const onDaySelection = (d: ForecastDay) => {
    setCurrentForecastDay(d);
  };

  useEffect(() => {
    dispatch(getForecastByLocation(weatherState.forecastFilter));
    if (weatherState.forecastStatus === "successfully") {
      dispatch(resetForecastStatus());
    }
  }, [weatherState.forecastFilter]);

  const getTitle = (): ReactElement => {
    if (
      weatherState.forecastResponse !== undefined &&
      weatherState.forecastResponse.current !== undefined &&
      weatherState.forecastResponse.location !== undefined &&
      weatherState.forecastResponse.forecast !== undefined
    ) {
      const data = weatherState.forecastResponse;
      return (
        <View style={{ flex: 1 }}>
          <Text
            style={[
              commonStyle.title,
              commonStyle.alignTextCenter,
              commonStyle.whiteText,
              commonStyle.mar_top_30,
            ]}
          >
            {data.location.name}
          </Text>
          <Text
            style={[
              commonStyle.subtitle,
              commonStyle.alignTextCenter,
              commonStyle.whiteText,
              commonStyle.mar_top_30,
            ]}
          >
            Forecast
          </Text>
        </View>
      );
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
      return <ForecastBox data={data} onDaySelection={onDaySelection} />;
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

  const getForecastDayBox = (): ReactElement => {
    if (
      currentForecastDay !== undefined &&
      weatherState.forecastResponse !== undefined &&
      weatherState.forecastResponse.current !== undefined &&
      weatherState.forecastResponse.location !== undefined &&
      weatherState.forecastResponse.forecast !== undefined
    ) {
      const forecastDay =
        weatherState.forecastResponse.forecast.forecastday.filter(
          (d) => d.date === currentForecastDay.date
        )[0];
      return <ForecastDayBox forecastDay={forecastDay} />;
    }
    return <></>;
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
        {getTitle()}
        {getForecastBox()}
        {getForecastDayBox()}
      </ScrollView>
    </SafeAreaView>
  );
}
