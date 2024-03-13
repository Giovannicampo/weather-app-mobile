import { ReactElement } from "react";
import { ForecastDay } from "../../Weather/dto";
import { mainWeatherStyle } from "../../assets/style/mainWeatherStyle";
import { Text, View } from "react-native";
import { commonStyle } from "../../assets/style/commonStyle";
import { DayConditions } from "../../MainView/Boxes/DayConditions/DayConditions";
import { AstroData } from "../../MainView/Boxes/AstroData/AstroData";
import { ScrollView } from "react-native-gesture-handler";
import { BoxPerHour } from "../../MainView/Boxes/BoxPerHour/BoxPerHour";
import {v4 as uuidv4} from 'uuid';

interface ForecastDayBoxProps {
  readonly forecastDay: ForecastDay;
}

export default function ForecastDayBox(
  props: ForecastDayBoxProps
): ReactElement {
  const forecastDay = props.forecastDay;

  return (
    <View style={{ ...mainWeatherStyle.container, marginBottom: 10 }} key={uuidv4()}>
      <Text
        style={[
          commonStyle.alignTextLeft,
          commonStyle.gap_20,
          commonStyle.pad_left_5,
          commonStyle.bold,
          commonStyle.blackText,
          commonStyle.mar_bot_5
        ]}
      >
        {`Forecast of ${
          new Date(forecastDay.date).toLocaleString().split(",")[0]
        }`}
      </Text>
      <DayConditions forecastDay={forecastDay} />
      <AstroData data={forecastDay.astro} />
      <ScrollView pagingEnabled={true}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text
            style={[
              commonStyle.blackText,
              commonStyle.pad_left_20,
              commonStyle.paragraph,
              commonStyle.mar_top_10
            ]}
          >
            00:00 - 05:00
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}
            style={[mainWeatherStyle.flexRow, mainWeatherStyle.forecastBoxDay]}
          >
            {forecastDay.hour.map((h, index) =>
              index / 6 < 1 ? <BoxPerHour hour={h} key={uuidv4()} /> : <></>
            )}
          </ScrollView>
          <Text
            style={[
              commonStyle.blackText,
              commonStyle.pad_left_20,
              commonStyle.paragraph,
              commonStyle.mar_top_10
            ]}
          >
            06:00 - 11:00
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}
            style={[mainWeatherStyle.flexRow, mainWeatherStyle.forecastBoxDay]}
          >
            {forecastDay.hour.map((h, index) =>
              index / 6 >= 1 && index / 6 < 2 ? (
                <BoxPerHour hour={h} key={uuidv4()} />
              ) : (
                <></>
              )
            )}
          </ScrollView>
          <Text
            style={[
              commonStyle.blackText,
              commonStyle.pad_left_20,
              commonStyle.paragraph,
              commonStyle.mar_top_10
            ]}
          >
            12:00 - 17:00
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}
            style={[mainWeatherStyle.flexRow, mainWeatherStyle.forecastBoxDay]}
          >
            {forecastDay.hour.map((h, index) =>
              index / 6 >= 2 && index / 6 < 3 ? (
                <BoxPerHour hour={h} key={uuidv4()} />
              ) : (
                <></>
              )
            )}
          </ScrollView>
          <Text
            style={[
              commonStyle.blackText,
              commonStyle.pad_left_20,
              commonStyle.paragraph,
              commonStyle.mar_top_10
            ]}
          >
            18:00 - 23:00
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}
            style={[mainWeatherStyle.flexRow, mainWeatherStyle.forecastBoxDay, {marginBottom: 10}]}
          >
            {forecastDay.hour.map((h, index) =>
              index / 6 >= 3 && index / 6 < 4 ? (
                <BoxPerHour hour={h} key={uuidv4()} />
              ) : (
                <></>
              )
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
