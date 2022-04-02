import React from "react";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import colors from "../colors";

export default function Language({ language, setLanguage, setPage }) {
  return (
    <View>
      <View
        style={{
          height: (10 * Dimensions.get("window").height) / 100,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: language === 2 ? 28 : 24,
            fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
            textAlign: "center",
          }}
        >
          {language === 1
            ? "Select a language"
            : language === 2
            ? "اختر  لغة"
            : "Choisissez une langue"}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 20,
          height: Dimensions.get("window").height / 2,
          width: (80 * Dimensions.get("window").width) / 100,
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        <Pressable
          onPress={() => setLanguage(2)}
          style={{
            flexDirection: language === 2 ? "row-reverse" : "row",
            alignItems: "center",
            width: "80%",
            padding: 10,
            borderRadius: 5,
            justifyContent: "space-between",
            backgroundColor: language === 2 ? colors.SECOND + "40" : "white",
          }}
        >
          <Image
            style={{ width: 45, height: 45 }}
            resizeMode={"contain"}
            source={require("../../assets/flags/flag2.png")}
          />
          <Text
            style={{
              fontSize: language === 2 ? 22 : 20,
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              width: "80%",
              textAlign: "center",
            }}
          >
            {language === 1 ? "Arabic" : language === 2 ? "العربية" : "Arabe"}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setLanguage(0)}
          style={{
            flexDirection: language === 2 ? "row-reverse" : "row",
            alignItems: "center",
            width: "80%",
            padding: 10,
            borderRadius: 5,
            justifyContent: "space-between",
            backgroundColor: language === 0 ? colors.SECOND + "40" : "white",
          }}
        >
          <Image
            style={{ width: 45, height: 45 }}
            resizeMode={"contain"}
            source={require("../../assets/flags/flag0.png")}
          />
          <Text
            style={{
              fontSize: language === 2 ? 22 : 20,
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              width: "80%",
              textAlign: "center",
            }}
          >
            {language === 1
              ? "Frensh"
              : language === 2
              ? "الفرنسية"
              : "Français"}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setLanguage(1)}
          style={{
            flexDirection: language === 2 ? "row-reverse" : "row",
            alignItems: "center",
            width: "80%",
            padding: 10,
            borderRadius: 5,
            justifyContent: "space-between",
            backgroundColor: language === 1 ? colors.SECOND + "40" : "white",
          }}
        >
          <Image
            style={{ width: 45, height: 45 }}
            resizeMode={"contain"}
            source={require("../../assets/flags/flag1.png")}
          />
          <Text
            style={{
              fontSize: language === 2 ? 22 : 20,
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              width: "80%",
              textAlign: "center",
            }}
          >
            {language === 1
              ? "English"
              : language === 2
              ? "الإنجليزية"
              : "Anglais"}
          </Text>
        </Pressable>
        <View
          style={{
            flex: 2,
            width: "80%",
            flexDirection: language === 2 ? "row-reverse" : "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            resizeMode="cover"
            style={{
              height: "100%",
              width: "50%",
            }}
            source={require("../../assets/hero/mytick4.png")}
          />
          {language !== 3 && (
            <Pressable
              onPress={() => setPage(1)}
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "50%",
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                  transform: [{ rotate: language === 2 ? "180deg" : "0deg" }],
                }}
                source={require("../../assets/icons/bigArrow.png")}
              />
              <Text
                style={{
                  fontSize: language === 2 ? 24 : 20,
                  fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                  color: colors.MAIN,
                }}
              >
                {language === 1
                  ? "Continue"
                  : language === 2
                  ? "تابع"
                  : "Continuer"}
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
}
