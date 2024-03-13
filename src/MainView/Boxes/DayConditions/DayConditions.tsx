import { ReactElement } from "react";
import { ForecastDay } from "../../../Weather/dto";
import { ScrollView } from "react-native-gesture-handler";
import { mainWeatherStyle } from "../../../assets/style/mainWeatherStyle";
import { Image, View } from "react-native";
import { getWeatherIcon } from "../BoxPerHour/BoxPerHour";
import { Text } from "react-native";
import { commonStyle } from "../../../assets/style/commonStyle";

interface DayConditionsProps {
  forecastDay: ForecastDay;
}

export const DayConditions = (props: DayConditionsProps): ReactElement => {
  const { day, astro } = props.forecastDay;

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      style={mainWeatherStyle.flexRow}
    >
      <Image
        source={getWeatherIcon(day.condition)}
        style={mainWeatherStyle.bigicon}
      />
      <View style={{ flex: 1, flexDirection: "column", marginLeft: 10, justifyContent: "space-between" }}>
        <Text
          style={[
            commonStyle.paragraph,
            commonStyle.blackText,
            commonStyle.gap_10,
          ]}
        >{`Max ${day.maxtemp_c}° / Min ${day.mintemp_c}°`}</Text>
        <Text
          style={[
            commonStyle.paragraph,
            commonStyle.blackText,
            commonStyle.gap_10,
          ]}
        >{`${day.condition.text}`}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "column", marginLeft: 5 }}>
        <Image
          source={require("../../../assets/pics/weather_icons/rainy.png")}
          style={mainWeatherStyle.icon}
        />
        <Text
          style={[
            commonStyle.paragraph,
            commonStyle.blackText,
            commonStyle.gap_10,
          ]}
        >{`${day.totalprecip_mm} mm`}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "column", marginLeft: 20 }}>
        <Image
          source={require("../../../assets/pics/weather_icons/sun.png")}
          style={mainWeatherStyle.icon}
        />
        <Text
          style={[
            commonStyle.paragraph,
            commonStyle.blackText,
            commonStyle.gap_10,
          ]}
        >{`UV ${day.uv}`}</Text>
      </View>
    </ScrollView>
  );
};
