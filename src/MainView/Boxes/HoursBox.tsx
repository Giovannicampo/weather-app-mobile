import { ReactElement } from "react";
import { Condition, Hour } from "../../Weather/dto";
import { Dimensions, Image, ImageSourcePropType, View } from "react-native";
import { commonStyle } from "../../assets/style/commonStyle";
import { Text } from "react-native";
import { mainWeatherStyle } from "../../assets/style/mainWeatherStyle";
import { COLOR } from "../../assets/style/styles";
import { ScrollView } from "react-native-gesture-handler";
import { BoxPerHour } from "./BoxPerHour/BoxPerHour";

interface HoursBoxProps {
  readonly hours: Hour[];
}

export default function HoursBox(props: HoursBoxProps): ReactElement {
  const hours: Hour[] = props.hours;

  return (
    <View style={mainWeatherStyle.container}>
      <Text
        style={[
          commonStyle.alignTextLeft,
          commonStyle.gap_20,
          commonStyle.pad_left_5,
          commonStyle.bold,
          commonStyle.blackText,
        ]}
      >
        HOURLY FORECAST
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        style={mainWeatherStyle.flexRow}
      >
        {hours.map((h, index) => (
          <BoxPerHour hour={h} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}
