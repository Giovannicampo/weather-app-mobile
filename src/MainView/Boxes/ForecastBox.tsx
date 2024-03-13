import { ReactElement } from "react";
import { ForecastDTO, ForecastDay } from "../../Weather/dto";
import {
  Image,
  Pressable,
  PressableStateCallbackType,
  Text,
  View,
} from "react-native";
import { mainWeatherStyle } from "../../assets/style/mainWeatherStyle";
import { commonStyle } from "../../assets/style/commonStyle";
import { ScrollView } from "react-native-gesture-handler";
import { AbstractChartConfig } from "react-native-chart-kit/dist/AbstractChart";
import { Dataset } from "react-native-chart-kit/dist/HelperTypes";
import { CustomLineChart } from "./CustomLineChart/CustomLineChart";
import { getWeatherIcon } from "./BoxPerHour/BoxPerHour";
import { v4 as uuidv4 } from "uuid";

interface ForecastBoxProps {
  readonly data: ForecastDTO;
  readonly onDaySelection?: (d: ForecastDay) => void;
  readonly pressed?: boolean;
}

interface BoxPerDayProps {
  readonly day: ForecastDay;
  readonly onDaySelection?: (d: ForecastDay) => void;
}

const BoxPerDay = (props: BoxPerDayProps): ReactElement => {
  const { day, date, hour } = props.day;
  const { onDaySelection } = props;

  return (
    <Pressable
      style={({ pressed }) => [
        mainWeatherStyle.singleDay,
        pressed
          ? mainWeatherStyle.singleDayPressed
          : mainWeatherStyle.singleDayNotPressed,
      ]}
      onPress={() => {
        if (onDaySelection !== undefined) onDaySelection(props.day);
      }}
    >
      <Text
        style={[
          commonStyle.blackText,
          commonStyle.alignTextCenter,
          commonStyle.smallParagraph,
        ]}
      >
        {date}
      </Text>
      <Image
        source={getWeatherIcon(day.condition)}
        style={mainWeatherStyle.icon}
      />
      <Text
        style={[
          commonStyle.blackText,
          commonStyle.alignTextCenter,
          commonStyle.smallParagraph,
        ]}
      >
        {`Max ${day.maxtemp_c}°C`}
      </Text>
      <Text
        style={[
          commonStyle.blackText,
          commonStyle.alignTextCenter,
          commonStyle.smallParagraph,
        ]}
      >
        {`Max ${day.mintemp_c}°C`}
      </Text>
    </Pressable>
  );
};

export default function ForecastBox(props: ForecastBoxProps): ReactElement {
  const { forecast } = props.data;
  const { onDaySelection, pressed } = props;

  const getChartConfig = (): AbstractChartConfig => {
    return {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false, // optional
    };
  };

  const getLabels = (): string[] => {
    const labels: string[] = [];
    forecast.forecastday.map((day) =>
      labels.push(new Date(day.date).toLocaleDateString())
    );
    return labels;
  };

  const getDatasets = (): Dataset[] => {
    const maxTempData: number[] = [];
    forecast.forecastday.map((day) => maxTempData.push(day.day.maxtemp_c));
    const minTempData: number[] = [];
    forecast.forecastday.map((day) => minTempData.push(day.day.mintemp_c));

    const datasets: Dataset[] = [
      {
        data: maxTempData,
        color: (opacity = 1) => `rgba(174, 52, 0, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: minTempData,
        color: (opacity = 1) => `rgba(100, 95, 201, ${opacity})`,
        strokeWidth: 2,
      },
    ];
    return datasets;
  };

  const getLegend = (): string[] => {
    return ["Max Temp", "Min Temp"];
  };

  return (
    <View
      style={[
        mainWeatherStyle.container,
        { backgroundColor: pressed ? "#ffffff40" : "#ffffff70" },
      ]}
    >
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
        WEEKLY FORECAST
      </Text>
      <ScrollView pagingEnabled={true} style={mainWeatherStyle.flexColumn}>
        <CustomLineChart
          labels={getLabels()}
          datasets={getDatasets()}
          legend={getLegend()}
          chartConfig={getChartConfig()}
          width={mainWeatherStyle.container.width}
          height={110}
          style={{ paddingBottom: 20, gap: 0 }}
        />

        <View style={mainWeatherStyle.dayContainer}>
          {forecast.forecastday.map((day, index) => (
            <BoxPerDay
              day={day}
              key={uuidv4()}
              onDaySelection={onDaySelection}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
