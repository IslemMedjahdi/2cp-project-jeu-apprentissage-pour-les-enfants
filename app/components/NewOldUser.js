import React from "react";
import { Dimensions, Pressable, Text, View, Image } from "react-native";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import colors from "../colors";

export default function NewOldUser({ language, navigation }) {
  const pressHandler = () => {
    AsyncStorageLib.setItem(
      "user",
      JSON.stringify({ language: language, connected: false })
    );
    navigation.replace("Loading");
  };
  return (
    <View style={{ backgroundColor: colors.MAIN }}>
      <View
        style={{
          height: (40 * Dimensions.get("window").height) / 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          resizeMode="contain"
          style={{ height: "80%", width: "80%" }}
          source={require("../../assets/hero/mystick2.png")}
        />
      </View>
      <View
        style={{
          height: (25 * Dimensions.get("window").height) / 100,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
            fontSize: language === 2 ? 28 : 26,
            color: "white",
            alignItems: "center",
          }}
        >
          {language === 0
            ? "Apprendre avec Mystick"
            : language === 1
            ? "Learn with Mystick"
            : "تعلم مع ميستيك"}
        </Text>
      </View>
      <View
        style={{
          height: (35 * Dimensions.get("window").height) / 100,
          justifyContent: "space-evenly",
        }}
      >
        <Pressable
          onPress={() => pressHandler()}
          style={{ backgroundColor: colors.SECOND, borderRadius: 10 }}
        >
          <Text
            style={{
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              fontSize: language === 2 ? 20 : 18,
              color: "white",
              textAlign: "center",
              paddingVertical: 10,
              paddingHorizontal: 6,
            }}
          >
            {language === 0
              ? "Je veux commencer"
              : language === 1
              ? "I want to start"
              : "أريد أن أبدأ"}
          </Text>
        </Pressable>
        <Pressable style={{ backgroundColor: colors.SECOND, borderRadius: 10 }}>
          <Text
            style={{
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              fontSize: language === 2 ? 20 : 18,
              color: "white",
              textAlign: "center",
              paddingVertical: 10,
              paddingHorizontal: 6,
            }}
          >
            {language === 0
              ? "Je posseède un compte"
              : language === 1
              ? "I have an account"
              : "لدي حساب"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
