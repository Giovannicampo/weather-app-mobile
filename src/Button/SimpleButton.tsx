import { ReactElement } from "react";
import { COLOR, FONTSIZE } from "../assets/style/styles";
import { TouchableOpacity, View } from "react-native";
import { commonStyle } from "../assets/style/commonStyle";
import { Text } from "react-native";

interface ButtonProps {
  label: string;
  onPress: () => void;
  backgroundColor: COLOR;
  color: COLOR;
  fontSize: FONTSIZE;
  gap: number;
}

export default function SimpleButton(props: ButtonProps): ReactElement {
  const { label, onPress, color, backgroundColor, fontSize, gap } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ backgroundColor: backgroundColor, gap: gap, padding: 10}}>
        <Text
          style={{
            ...commonStyle.alignTextCenter,
            color: color,
            fontSize: fontSize,
          }}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
