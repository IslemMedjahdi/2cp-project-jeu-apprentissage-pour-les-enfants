import React from "react";
import * as Animatable from "react-native-animatable";
import { Image, Pressable, Text, View, ImageBackground } from "react-native";
import colors from "../data/colors";

export default function ThemeCard({
  index,
  name,
  language,
  background,
  unlocked,
  stars,
}) {
  return (
    <Animatable.View
      duration={1000}
      delay={index * 300}
      animation={index % 2 === 0 ? "fadeInRight" : "fadeInLeft"}
      style={{
        width: "100%",
        borderRadius: 20,
        borderColor: colors.MAIN,
        borderWidth: 2,
        overflow: "hidden",
        marginVertical: 10,
      }}
    >
      <ImageBackground
        resizeMode="cover"
        source={background}
        style={{
          width: "100%",
          height: 200,
        }}
      >
        <Pressable
          android_ripple={{ color: "#FFFFFF90" }}
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "flex-end",
            backgroundColor: unlocked ? "transparent" : "#FFFFFFBB",
          }}
        >
          <View
            style={{
              backgroundColor: colors.MAIN + "BB",
              height: "30%",
              flexDirection: language === 2 ? "row-reverse" : "row",
              alignItems: "center",
              padding: 10,
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                  color: "white",
                  fontSize: language === 2 ? 18 : 16,
                }}
              >
                {name[language]}
              </Text>
            </View>
            {unlocked && (
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "white",
                  borderRadius: 10,
                  paddingVertical: 2,
                  paddingHorizontal: 7,
                }}
              >
                {Array.from(Array(stars).keys()).map((item) => (
                  <Image
                    key={item}
                    resizeMode="contain"
                    style={{ height: 30, width: 30 }}
                    source={require("../../assets/icons/star.png")}
                  />
                ))}
                {Array.from(Array(3 - stars).keys()).map((item) => (
                  <Image
                    key={item}
                    resizeMode="contain"
                    style={{ height: 30, width: 30 }}
                    source={require("../../assets/icons/starempty.png")}
                  />
                ))}
              </View>
            )}
          </View>
        </Pressable>
        {!unlocked && (
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../../assets/icons/lock.png")}
              style={{
                width: 50,
                height: 50,
              }}
            />
          </View>
        )}
      </ImageBackground>
    </Animatable.View>
  );
}
