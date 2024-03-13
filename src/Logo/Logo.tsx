import { ReactElement } from "react";
import { Image } from "react-native";

interface LogoProps {
  readonly flex?: number;
  readonly height: number;
  readonly width: number;
}

export default function Logo(props: LogoProps): ReactElement {
  const { height, width } = props;
  return (
    <Image
      style={{ height, width}}
      source={require("../assets/pics/logo1.png")}
    />
  );
}
