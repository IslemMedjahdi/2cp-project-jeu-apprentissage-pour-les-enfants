import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import * as Animatable from "react-native-animatable";

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
      style={{ marginTop: 20, borderRadius: 20, overflow: "hidden" }}
    >
      <Pressable
        onPress={pressHandler}
        style={{
          backgroundColor: color + "CC",
          padding: language === 2 ? 20 : language === 0 ? 10 : 15,
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
        <View style={{ flexDirection: language === 2 ? "row-reverse" : "row" }}>
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
                marginBottom: 40,
                textAlign: "center",
              }}
            >
              {desc}
            </Text>
            <View
              style={{
                borderRadius: 20,
                overflow: "hidden",
                margin: 20,
                alignItems: "flex-end",
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
                  {language === 0 ? "Jouer" : language === 1 ? "Play" : "العب"}
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
    </Animatable.View>
  );
}
