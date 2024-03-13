import { Dimensions, StyleSheet } from "react-native";
import { COLOR } from "../styles";

const { width } = Dimensions.get("window");

export const mainWeatherStyle = StyleSheet.create({
  mainBox: {
    flex: 1,
    flexDirection: "column",
    gap: 20,
    marginTop: 30,
    alignItems: "center",
  },

  container: {
    flex: 1,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    width: width - 20,
    backgroundColor: "#ffffff70",
    borderRadius: 15,
  },

  flexRow: {
    flex: 1,
    flexDirection: "row",
  },

  flexColumn: {
    flex: 1,
    flexDirection: "column",
  },

  singleHour: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },

  icon: {
    height: 30,
    width: 30,
    alignSelf: "center",
  },

  bigicon: {
    height: 50,
    width: 50,
    alignSelf: "center",
  },

  dayContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 0,
    paddingLeft: 6,
  },

  singleDay: {
    flex: 1,
    flexDirection: "column",
    paddingBottom: 5,
    marginRight: 5,
    marginBottom: 10,
    borderRadius: 10,
  },

  singleDayNotPressed: {
    backgroundColor: "#00000010",
  },

  singleDayPressed: {
    backgroundColor: "#00000040",
  },

  astroContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,
  },

  astroCard: {
    flex: 1,
    flexDirection: "column",
    paddingBottom: 5,
    paddingTop: 10,
    marginRight: 5,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#00000010",
  },

  forecastBoxDay: {
    margin: 3,
    backgroundColor: "#00000020",
    borderRadius: 20,
  },
});
