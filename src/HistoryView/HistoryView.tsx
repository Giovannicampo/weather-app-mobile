import { useNavigation } from "@react-navigation/native";
import { ReactElement, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  getHistoryByLocation,
  resetHistoryStatus,
  setHistoryFilterDate,
} from "../Weather/slice";
import HistoryBox from "../MainView/Boxes/HistoryBox";
import { SafeAreaView, Text, View } from "react-native";
import { commonStyle } from "../assets/style/commonStyle";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import { ScrollView } from "react-native-gesture-handler";
import { Tab } from "@rneui/themed";
import { COLOR } from "../assets/style/styles";

enum DATE {
  YESTERDAY,
  TWO_DAYS_AGO,
  THREE_DAYS_AGO,
}

const getPastDays = (daysInPast: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - daysInPast);
  return date.toISOString().split("T")[0];
};

export default function HistoryView(): ReactElement {
  const weatherState = useAppSelector((state) => state.weather);
  const dispatch = useAppDispatch();
  const [tabIndex, setTabIndex] = useState(DATE.YESTERDAY);

  switch (tabIndex) {
    case DATE.YESTERDAY:
      dispatch(setHistoryFilterDate(getPastDays(1)));
      break;
    case DATE.TWO_DAYS_AGO:
      dispatch(setHistoryFilterDate(getPastDays(2)));
      break;
    case DATE.THREE_DAYS_AGO:
      dispatch(setHistoryFilterDate(getPastDays(3)));
      break;
  }

  useEffect(() => {
    dispatch(getHistoryByLocation(weatherState.historyFilter));
    if (weatherState.historyStatus === "successfully") {
      dispatch(resetHistoryStatus());
    }
  }, [weatherState.historyFilter]);

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
              commonStyle.mar_bot_20,
            ]}
          >
            History
          </Text>
        </View>
      );
    }
    return <></>;
  };

  const getTab = (): ReactElement => {
    return (
      <Tab
        value={tabIndex}
        onChange={(e) => setTabIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        containerStyle={(active) => [
          { backgroundColor: active ? "#ffffff40" : "transparent" },
        ]}
      >
        <Tab.Item
          title="Yesterday"
          titleStyle={{ fontSize: 15, color: COLOR.WHITE }}
          icon={{ name: "timer", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="Two days ago"
          titleStyle={{ fontSize: 15, color: COLOR.WHITE }}
          icon={{ name: "timer", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="Three days ago"
          titleStyle={{ fontSize: 15, color: COLOR.WHITE }}
          icon={{ name: "timer", type: "ionicon", color: COLOR.WHITE }}
        />
      </Tab>
    );
  };

  const getHistoryBox = (): ReactElement => {
    if (
      weatherState.historyResponse !== undefined &&
      weatherState.historyResponse.location !== undefined &&
      weatherState.historyResponse.forecast !== undefined
    ) {
      const data = weatherState.historyResponse;
      return <HistoryBox data={data} />;
    }
    return (
        <></>
    );
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
        {getTab()}
        {getHistoryBox()}
      </ScrollView>
    </SafeAreaView>
  );
}
