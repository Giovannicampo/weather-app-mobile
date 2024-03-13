import { ReactElement } from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { AbstractChartConfig } from "react-native-chart-kit/dist/AbstractChart";
import { Dataset } from "react-native-chart-kit/dist/HelperTypes";
import { commonStyle } from "../../../assets/style/commonStyle";
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

export interface CustomChartProps {
  labels: string[];
  datasets: Dataset[];
  legend: string[];
  width: number;
  height: number;
  chartConfig: AbstractChartConfig;
  style: Partial<ViewStyle>;
}

export const CustomLineChart = (props: CustomChartProps): ReactElement => {
  const { labels, datasets, legend, width, height, chartConfig, style } = props;
  const data = {
    labels: labels,
    datasets: datasets,
    legend: legend,
  };

  return (
    <LineChart
      data={data}
      width={width}
      height={height}
      chartConfig={chartConfig}
      style={style}
      renderDotContent={({ x, y, indexData }) => (
        <View
          key={uuidv4()}
          style={{
            position: "absolute",
            top: y - 1,
            left: x - 8,
          }}
        >
          <Text style={[{ fontSize: 10 }, commonStyle.whiteText]}>
            {indexData}
          </Text>
        </View>
      )}
    />
  );
};
