import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import * as Animatable from "react-native-animatable";
import { Dimensions } from "react-native";

export default function HomeCard({
  title,
  desc,
  image,
  color,
  language,
  animation,
  pressHandler,
}) {
  return (
    <Animatable.View
      animation={animation}
      duration={1000}
      style={{
        height: (35 * Dimensions.get("window").height) / 100,
        width: (90 * Dimensions.get("window").width) / 100,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          borderRadius: 20,
          overflow: "hidden",
          width: "100%",
          height: "80%",
        }}
      >
        <Pressable
          onPress={pressHandler}
          style={{
            backgroundColor: color + "CC",
            padding: language === 2 ? 20 : language === 0 ? 10 : 15,
            height: "100%",
            justifyContent: "space-around",
          }}
          android_ripple={{ color: color }}
        >
          <View>
            <Text
              style={{
                fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                color: "white",
                fontSize: language === 2 ? 30 : 25,
              }}
            >
              {title}
            </Text>
          </View>
          <View
            style={{ flexDirection: language === 2 ? "row-reverse" : "row" }}
          >
            <View
              style={{
                alignItems: language === 2 ? "flex-end" : "flex-start",
                flex: 2,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: language === 2 ? 20 : 17,
                  textAlign: "center",
                }}
              >
                {desc}
              </Text>
              <View
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  marginHorizontal: 20,
                  marginTop: 10,
                }}
              >
                <Pressable
                  style={{
                    backgroundColor: "white",
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                  }}
                  android_ripple={{ color: "#AAAAAA" }}
                >
                  <Text
                    style={{
                      color: color,
                      fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                    }}
                  >
                    {language === 0
                      ? "Jouer"
                      : language === 1
                      ? "Play"
                      : "العب"}
                  </Text>
                </Pressable>
              </View>
            </View>
            <Image
              resizeMode="contain"
              style={{
                height: "100%",
                width: "100%",
                flex: 1,
                transform: [{ rotateY: "180deg" }],
              }}
              source={image}
            />
          </View>
        </Pressable>
      </View>
    </Animatable.View>
  );
}
