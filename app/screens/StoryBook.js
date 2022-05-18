import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import colors from "../data/colors";
import { useSelector } from "react-redux";
import * as Animatable from "react-native-animatable";

export default function StoryBook({ navigation }) {
  const language = useSelector((state) => state.user.value.language);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/background/background0.jpg")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <View
          style={{
            backgroundColor: "#00000040",
            position: "absolute",
            height: "100%",
            width: "100%",
          }}
        ></View>
        <View style={{ flex: 1 }}></View>
        <Animatable.View
          animation={language === 2 ? "slideInLeft" : "slideInRight"}
          duration={1000}
          style={{
            flex: 3,
            backgroundColor: "white",
            margin: 18,
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
            borderColor: colors.MAIN,
            borderWidth: 5,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            //justifyContent:"center",
            alignItems: "center",
            flexDirection: "row",
            //opacity:0.8,
          }}
        >
          <View
            style={{
              height: "100%",
              width: "5%",
              backgroundColor: colors.MAIN,
            }}
          ></View>
          <View
            style={{
              width: "94%",
              height: "96%",
              //opacity:0.8,
              marginLeft: -7,
              //borderRadius:50,
              borderWidth: 7,
              borderColor: colors.MAIN,
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              //borderTopLeftRadius:20,
              //borderRadius:50,
              backgroundColor: "#905c79",
            }}
          >
            <View style={{ flex: 1.5, justifyContent: "flex-end" }}>
              <Text
                style={{
                  fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                  textAlign: "center",
                  color: "white",
                  fontSize: language === 2 ? 32 : 29,
                }}
              >
                {language === 0
                  ? "MON HISTOIRE"
                  : language === 1
                  ? "MY STORY"
                  : "قصتي"}
              </Text>
            </View>
            <View
              style={{
                flex: 3,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                resizeMode="stretch"
                style={{ height: 300, width: 300 }}
                source={require("../../assets/hero/mytick4.png")}
              />
            </View>
          </View>
        </Animatable.View>
        <View
          style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}
        >
          <Pressable onPress={() => navigation.replace("Story")}>
            {({ pressed }) => (
              <Text
                style={{
                  color: pressed ? "#ffffff" + "80" : "#ffffff",
                  fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: language === 2 ? 36 : 34,
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                {language === 0
                  ? "Lire l'histoire"
                  : language === 1
                  ? "Read the story"
                  : "إقرأ القصة"}
              </Text>
            )}
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
