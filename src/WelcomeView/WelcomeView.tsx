import { ReactElement, useEffect, useState } from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import { commonStyle } from "../assets/style/commonStyle";
import Logo from "../Logo/Logo";
import SimpleButton from "../Button/SimpleButton";
import { COLOR, FONTSIZE } from "../assets/style/styles";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { PATH } from "../router/path";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setWelcomeFalse } from "../State/slice";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import { Condition } from "../Weather/dto";
import { AntDesign } from "@expo/vector-icons";

export default function WelcomeView(): ReactElement {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  let openBackground: boolean = true;
  const setOpenBackground = (flag: boolean): void => {
    openBackground = flag;
  };

  return (
    <SafeAreaView style={{ ...commonStyle.mainContainer }}>
      <BackgroundVideo
        welcomeView={true}
        openFlag={openBackground}
        duration={2000}
      />
      <View
        style={{
          ...commonStyle.container,
          flex: 1,
          alignItems: "center",
          gap: 40,
          paddingTop: 40,
        }}
      >
        <Logo width={200} height={200} />
        <View>
          <Text
            style={[
              commonStyle.alignTextCenter,
              commonStyle.paragraph,
              commonStyle.redText,
            ]}
          >
            Weather and forecast, wherever you need them for, right in your
            hands
          </Text>
        </View>
        <View style={{ height: 50 }}>
          <Pressable
            onPress={() => {
              setOpenBackground(false);
              dispatch(setWelcomeFalse());
            }}
          >
            {({ pressed }) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={[
                    commonStyle.alignTextCenter,
                    commonStyle.paragraph,
                    commonStyle.mar_right_10,
                    { color: pressed ? "#b3390450" : "#b33904" },
                  ]}
                >
                  Go to main page
                </Text>
                <AntDesign
                  name="rightcircleo"
                  size={40}
                  color={COLOR.RED}
                  style={{
                    marginLeft: 1,
                    color: pressed ? "#b3390450" : "#b33904",
                  }}
                />
              </View>
            )}
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
