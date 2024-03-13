import { Dimensions, StyleSheet } from "react-native";
import { COLOR } from "../styles";

const {width, height} = Dimensions.get("window");

export const commonStyle = StyleSheet.create({
  // box model
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    paddingHorizontal: 16,
  },
  // text and fonts
  verybigtitle: {
    fontFamily: "Arial",
    fontSize: 80,
    lineHeight: 88,
  },
  title: {
    fontFamily: "Arial",
    fontSize: 32,
    lineHeight: 40,
  },
  subtitle: {
    fontFamily: "Arial",
    fontSize: 24,
    lineHeight: 32,
  },
  bigparagraph: {
    fontFamily: "Arial",
    fontSize: 18,
    lineHeight: 26,
  },
  paragraph: {
    fontFamily: "Arial",
    fontSize: 16,
    lineHeight: 24,
  },
  smallParagraph: {
    fontFamily: "Arial",
    fontSize: 12,
    lineHeight: 20,
  },
  alignTextCenter: {
    textAlign: "center",
  },
  alignTextLeft: {
    textAlign: "left",
  },
  light: {
    fontWeight: '300'
  },
  bold: {
    fontWeight: '600'
  },
  // lineheight override
  lineheight_24: {
    lineHeight: 24
  },
  lineheight_16: {
    lineHeight: 16
  },
  lineheight_8: {
    lineHeight: 8
  },
  //color
  redText: {
    color: COLOR.RED
  },
  blackText: {
    color: COLOR.BLACK
  },
  whiteText: {
    color: COLOR.WHITE
  },
  // background color
  backgroundLightRed: {
    backgroundColor: COLOR.RED
  },
  // bottomTab icon
  bottomTabIcon: {
    width: 30,
    height: 30,
  },
  // padding
  pad_left_5: {
    paddingLeft: 5
  },
  pad_left_10: {
    paddingLeft: 10
  },
  pad_left_20: {
    paddingLeft: 20
  },
  pad_left_30: {
    paddingLeft: 30
  },
  pad_left_40: {
    paddingLeft: 40
  },
  pad_left_50: {
    paddingLeft: 50
  },
  // margin
  mar_top_10: {
    marginTop: 10
  },
  mar_top_20: {
    marginTop: 20
  },
  mar_top_30: {
    marginTop: 30
  },
  mar_top_40: {
    marginTop: 40
  },
  mar_bot_5: {
    marginBottom: 5
  },
  mar_bot_10: {
    marginBottom: 10
  },
  mar_bot_20: {
    marginBottom: 20
  },
  mar_right_5: {
    marginRight: 5
  },
  mar_right_10: {
    marginRight: 10
  },
  mar_right_20: {
    marginRight: 20
  },
  // gap
  gap_10: {
    gap: 10
  },
  gap_20: {
    gap: 20
  },
  gap_30: {
    gap: 30
  },
  // background video
  backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0
  }
});
