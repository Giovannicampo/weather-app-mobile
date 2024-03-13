import { ReactElement } from "react";
import { Astro } from "../../Weather/dto";
import { Text, View } from "react-native";
import { mainWeatherStyle } from "../../assets/style/mainWeatherStyle";
import { commonStyle } from "../../assets/style/commonStyle";
import { AstroData } from "./AstroData/AstroData";

interface AstroBoxProps {
  data: Astro;
}

export default function AstroBox(props: AstroBoxProps): ReactElement {
  return (
    <View style={mainWeatherStyle.container}>
      <Text
        style={[
          commonStyle.alignTextLeft,
          commonStyle.gap_20,
          commonStyle.pad_left_5,
          commonStyle.bold,
          commonStyle.blackText,
          commonStyle.mar_bot_5,
        ]}
      >
        SUNRISE AND SUNSET
      </Text>
      <AstroData data={props.data} />
    </View>
  );
}
