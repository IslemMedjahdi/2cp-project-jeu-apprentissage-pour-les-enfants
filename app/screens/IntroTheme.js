import {
  ImageBackground,
  Image,
  Pressable,
  StatusBar,
  Text,
  View,
  BackHandler,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";
import colors from "../data/colors";
import React from "react";
import { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import themes from "../data/themes";
import { InputRightAddon } from "native-base";

export default function IntroTheme({ navigation, route }) {
  const { index } = route.params;
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
  return (
    <View>
      <StatusBar
        backgroundColor={"black"}
        translucent={true}
        barStyle={"light-content"}
      />
      <ImageBackground
        source={themes[index].backgroundGame}
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
            padding: 5,
            borderRadius: 20,
             
            height: (60 * Dimensions.get("window").height) / 100,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Animatable.View
              delay={500}
              duration={1000}
              animation={"fadeInLeft"}
              style={{
                 
                height: (45 * Dimensions.get("window").height) / 100,
              }}
            >
              <Text
                style={{
                  fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: user.language === 2 ? 30 : 26,
                }}
              >
                {themes[index].intro[user.language]}
              </Text>
            </Animatable.View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
               
              height: (15 * Dimensions.get("window").height) / 100,
            }}
          >
            <Pressable
              onPress={() => {
                navigation.replace("QuizzTest", { index });
              }}
            >
              {({ pressed }) => (
                <Text
                  style={{
                    color: pressed ? colors.MAIN + "80" : colors.MAIN,
                    fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
                    fontSize: user.language === 2 ? 28 : 25,
                    textAlign: "center",
                     
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
            <View
              style={{
                width: 120,
                 
                bottom : 50
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  transform: [
                    { rotateY: user.language === 2 ? "0deg" : "180deg" },
                  ],
                  width: "100%",
                  borderWidth : 1,
                }}
                source={require("../../assets/hero/mystick0.png")}
              />
            </View>
          </View>
        </Animatable.View>
      </ImageBackground>
    </View>
  );
}
