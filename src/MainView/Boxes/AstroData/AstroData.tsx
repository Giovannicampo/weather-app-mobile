import { ReactElement } from "react";
import { Astro } from "../../../Weather/dto";
import { mainWeatherStyle } from "../../../assets/style/mainWeatherStyle";
import { Image, Text, View } from "react-native";
import { commonStyle } from "../../../assets/style/commonStyle";

interface AstroDataProps {
  readonly data: Astro;
}

export const AstroData = (props: AstroDataProps): ReactElement => {
  const { sunrise, sunset } = props.data;

  return (
    <View style={mainWeatherStyle.astroContainer}>
      <View style={mainWeatherStyle.astroCard}>
        <Image
          source={require("../../../assets/pics/weather_icons/sunrise.png")}
          style={mainWeatherStyle.bigicon}
        />
        <Text
          style={[
            commonStyle.paragraph,
            commonStyle.whiteText,
            commonStyle.gap_10,
            commonStyle.alignTextCenter
          ]}
        >{`${sunrise}`}</Text>
      </View>
      <View style={mainWeatherStyle.astroCard}>
        <Image
          source={require("../../../assets/pics/weather_icons/sunset.png")}
          style={mainWeatherStyle.bigicon}
        />
        <Text
          style={[
            commonStyle.paragraph,
            commonStyle.whiteText,
            commonStyle.gap_10,
            commonStyle.alignTextCenter
          ]}
        >{`${sunset}`}</Text>
      </View>
    </View>
  );
};
