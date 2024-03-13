import { ReactElement } from "react";
import { Condition } from "../Weather/dto";
import { View } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { commonStyle } from "../assets/style/commonStyle";
import { FadeInView } from "./FadeInView";

interface VideoProps {
  condition?: Condition;
  welcomeView: boolean;
  openFlag: boolean;
  duration?: number;
}

export default function BackgroundVideo(props: VideoProps): ReactElement {
  const getSource = () => {
    if (props.welcomeView)
      return require("./../assets/background_videos/weather.mp4");

    if (props.condition !== undefined) {
      const { text } = props.condition;
      return text.includes("Sunny") || text.includes("Clear")
        ? require("./../assets/background_videos/sunny.mp4")
        : text.includes("cloudy") || text.includes("Overcast")
        ? require("./../assets/background_videos/cloudy.mp4")
        : text.includes("Fog") || text.includes("Mist")
        ? require("./../assets/background_videos/fog.mp4")
        : require("./../assets/background_videos/rainy.mp4");
    }
  };

  let duration = 1000;
  if(props.duration !== undefined) {
    duration = props.duration;
  }

  return (
    <View>
      <FadeInView style={commonStyle.backgroundVideo} duration={duration} flag={props.openFlag}>
        <Video
          source={getSource()}
          style={commonStyle.backgroundVideo}
          isMuted={true}
          shouldPlay
          isLooping
          rate={1.0}
          resizeMode={ResizeMode.COVER}
        />
      </FadeInView>
    </View>
  );
}
