import React, { useEffect } from "react";
import {
  Dimensions,
  Pressable,
  Text,
  View,
  Image,
  BackHandler,
} from "react-native";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import colors from "../data/colors";

export default function NewOldUser({ language, navigation, setPage }) {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        setPage(1);
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);
  const pressHandler = () => {
    AsyncStorageLib.setItem(
      "user",
      JSON.stringify({
        language: language,
        connected: false,
        email: "",
        uid: 0,
      })
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
          width: (80 * Dimensions.get("window").width) / 100,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
            fontSize: language === 2 ? 30 : 26,
            color: "white",
            textAlign: "center",
            width: "100%",
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
        <View style={{ borderRadius: 10, overflow: "hidden" }}>
          <Pressable
            android_ripple={{ color: "#ffffff40" }}
            onPress={() => pressHandler()}
            style={{
              backgroundColor: colors.SECOND,
              paddingVertical: 10,
              paddingHorizontal: 6,
            }}
          >
            <Text
              style={{
                fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                fontSize: language === 2 ? 20 : 18,
                color: "white",
                textAlign: "center",
              }}
            >
              {language === 0
                ? "Je veux commencer"
                : language === 1
                ? "I want to start"
                : "أريد أن أبدأ"}
            </Text>
          </Pressable>
        </View>
        <View style={{ borderRadius: 10, overflow: "hidden" }}>
          <Pressable
            onPress={() => navigation.navigate("Login", { language })}
            android_ripple={{ color: "#ffffff40" }}
            style={{
              backgroundColor: colors.SECOND,
              paddingVertical: 10,
              paddingHorizontal: 6,
            }}
          >
            <Text
              style={{
                fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                fontSize: language === 2 ? 20 : 18,
                color: "white",
                textAlign: "center",
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
    </View>
  );
}
