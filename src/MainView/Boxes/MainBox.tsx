import { ReactElement } from "react";
import { ScrollView, View } from "react-native";
import { mainWeatherStyle } from "../../assets/style/mainWeatherStyle";
import { CurrentWeatherDTO, Location } from "../../Weather/dto";
import { Text } from "react-native";
import { commonStyle } from "../../assets/style/commonStyle";

interface MainBoxProps {
  readonly data: CurrentWeatherDTO;
}

export default function MainBox(props: MainBoxProps): ReactElement {
  const { location, current } = props.data;

  const getPaddingValue = (num: number) => {
    if (num / 10 >= 1) return commonStyle.pad_left_20;
    return commonStyle.pad_left_30;
  };

  const localtime: string =
    new Date(location.localtime).toLocaleDateString() +
    " " +
    location.localtime.split(" ")[1];

  return (
    <View style={mainWeatherStyle.mainBox}>
      <Text style={[commonStyle.title, commonStyle.whiteText]}>
        {location.name}
      </Text>
      <Text
        style={[
          commonStyle.verybigtitle,
          commonStyle.whiteText,
          getPaddingValue(current.temp_c),
        ]}
      >{`${current.temp_c}°`}</Text>
      <Text style={[commonStyle.subtitle, commonStyle.whiteText]}>
        {current.condition.text}
      </Text>
      <Text
        style={[
          commonStyle.paragraph,
          commonStyle.whiteText,
          commonStyle.lineheight_16,
        ]}
      >
        {`${location.region}, ${location.country}`}
      </Text>
      <Text
        style={[
          commonStyle.paragraph,
          commonStyle.whiteText,
          commonStyle.lineheight_16,
        ]}
      >
        {`${localtime}`}
      </Text>
    </View>
  );
}
