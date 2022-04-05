import {
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
  StatusBar,
  Text,
  View,
  BackHandler,
} from "react-native";
import { useSelector } from "react-redux";
import colors from "../data/colors";
import React from "react";
import { useEffect } from "react";
import * as Animatable from "react-native-animatable";
export default function Intro({ navigation }) {
  // get the infos from Redux
  const profiles = useSelector((state) => state.profiles.value); //get the profiles from redux
  const selectedProfile = useSelector((state) => state.selectedProfile.value);
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);
  const pressHandler = () => {
    navigation.replace("Home");
  };
  return (
    <View>
      <StatusBar
        backgroundColor={"black"}
        translucent={true}
        barStyle={"light-content"}
      />
      <ImageBackground
        source={require("../../assets/background/background0.jpg")}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Animatable.View
          animation={"zoomIn"}
          duration={1000}
          style={{
            width: "85%",
            backgroundColor: "#FFFFFFDD",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <Animatable.View
            delay={500}
            duration={1000}
            animation={"fadeInRight"}
          >
            <Text
              style={{
                fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
                fontSize: user.language === 2 ? 30 : 26,
              }}
            >
              {user.language === 0
                ? "SALUT " +
                  profiles[selectedProfile].name +
                  ", te revoilà pour une nouvelle aventure !"
                : user.language === 1
                ? "Welcome  " +
                  profiles[selectedProfile].name +
                  ", You're back for a new adventure !"
                : "مرحبا  " +
                  profiles[selectedProfile].name +
                  ", لقد عدت من أجل مغامرة جديدة"}
            </Text>
          </Animatable.View>
          <View
            style={{
              flexDirection: user.language === 2 ? "row-reverse" : "row",
              alignItems: "center",
            }}
          >
            <Animatable.View
              delay={500}
              duration={1000}
              animation={"fadeInLeft"}
              style={{ flex: 1 }}
            >
              <Text
                style={{
                  fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: user.language === 2 ? 30 : 26,
                }}
              >
                {user.language === 0
                  ? "rien de mieux qu'apprendre tout en s'amusant"
                  : user.language === 1
                  ? "nothing better than learning while having fun"
                  : "لا شيئ أفضل من التعلم و الاستمتاع"}
              </Text>

              <Pressable onPress={pressHandler}>
                {({ pressed }) => (
                  <Text
                    style={{
                      color: pressed ? colors.MAIN + "80" : colors.MAIN,
                      fontFamily:
                        user.language === 2 ? "ArbFont" : "RowdiesBold",
                      fontSize: user.language === 2 ? 22 : 20,
                      textAlign: "center",
                      marginTop: 10,
                    }}
                  >
                    {user.language === 0
                      ? "Cliquer"
                      : user.language === 1
                      ? "Click"
                      : "إضغط"}
                  </Text>
                )}
              </Pressable>
            </Animatable.View>
            <Animatable.View
              animation={"swing"}
              duration={2000}
              iterationCount="infinite"
              style={{ flex: 1 }}
            >
              <Image
                resizeMode="contain"
                style={{
                  transform: [
                    { rotateY: user.language === 2 ? "0deg" : "180deg" },
                  ],
                  width: "100%",
                }}
                source={require("../../assets/hero/mystick0.png")}
              />
            </Animatable.View>
          </View>
        </Animatable.View>
      </ImageBackground>
    </View>
  );
}
