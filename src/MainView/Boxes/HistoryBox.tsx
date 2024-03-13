import { ReactElement } from "react";
import { Astro, ForecastDay, HistoryDTO } from "../../Weather/dto";
import { Text, View } from "react-native";
import { mainWeatherStyle } from "../../assets/style/mainWeatherStyle";
import { commonStyle } from "../../assets/style/commonStyle";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "react-native";
import { DayConditions } from "./DayConditions/DayConditions";
import { BoxPerHour } from "./BoxPerHour/BoxPerHour";
import { AstroData } from "./AstroData/AstroData";

interface HistoryBoxProps {
  readonly data: HistoryDTO;
  readonly pressed?: boolean;
}

export default function HistoryBox(props: HistoryBoxProps): ReactElement {
  const { location, forecast } = props.data;
  const { pressed } = props;
  return (
    <View
      style={{
        ...mainWeatherStyle.container,
        marginBottom: 10,
        backgroundColor: pressed ? "#ffffff40" : "#ffffff70",
      }}
    >
      <Text
        style={[
          commonStyle.alignTextLeft,
          commonStyle.gap_20,
          commonStyle.pad_left_5,
          commonStyle.bold,
          commonStyle.blackText,
        ]}
      >
        HISTORY FORECAST
      </Text>
      <Text
        style={[
          commonStyle.alignTextLeft,
          commonStyle.gap_20,
          commonStyle.pad_left_5,
          commonStyle.paragraph,
          commonStyle.blackText,
          commonStyle.mar_bot_5,
        ]}
      >
        {`${new Date(forecast.forecastday[0].date).toLocaleDateString()}`}
      </Text>
      <ScrollView pagingEnabled={true} style={mainWeatherStyle.flexColumn}>
        <DayConditions forecastDay={forecast.forecastday[0]} />
        <AstroData data={forecast.forecastday[0].astro} />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          style={mainWeatherStyle.flexRow}
        >
          {forecast.forecastday[0].hour.map((h, index) => (
            <BoxPerHour hour={h} key={index} />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}
