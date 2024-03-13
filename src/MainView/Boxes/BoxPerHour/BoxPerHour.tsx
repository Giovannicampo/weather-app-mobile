import { Image, ImageSourcePropType, Text, View } from "react-native";
import { Condition, Hour } from "../../../Weather/dto";
import { ReactElement } from "react";
import { mainWeatherStyle } from "../../../assets/style/mainWeatherStyle";
import { commonStyle } from "../../../assets/style/commonStyle";

interface HourProps {
  readonly hour: Hour;
}

export const getWeatherIcon = (condition: Condition): ImageSourcePropType => {
  return condition.text.includes("cloudy")
    ? require("../../../assets/pics/weather_icons/cloudy.png")
    : condition.text.includes("Sunny") || condition.text.includes("Clear")
    ? require("../../../assets/pics/weather_icons/sun.png")
    : condition.text.includes("Mist") || condition.text.includes("Fog")
    ? require("../../../assets/pics/weather_icons/mist.png")
    : condition.text.includes("Overcast")
    ? require("../../../assets/pics/weather_icons/overcast.png")
    : require("../../../assets/pics/weather_icons/rainy.png");
};

export const BoxPerHour = (props: HourProps): ReactElement => {
  const hour = props.hour;

  return (
    <View style={mainWeatherStyle.singleHour}>
      <Text
        style={[
          commonStyle.blackText,
          commonStyle.alignTextCenter,
          commonStyle.smallParagraph,
        ]}
      >
        {hour.time.split(" ")[1]}
      </Text>
      <Image
        source={getWeatherIcon(hour.condition)}
        style={mainWeatherStyle.icon}
      />
      <Text
        style={[
          commonStyle.blackText,
          commonStyle.alignTextCenter,
          commonStyle.paragraph,
        ]}
      >
        {`${hour.temp_c}°C`}
      </Text>
    </View>
  );
};
