import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  BackHandler,
} from "react-native";
import React, { useEffect } from "react";
import colors from "../data/colors";

export default function Salut({ language, setPage }) {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        setPage(0);
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.MAIN,
      }}
    >
      <View
        style={{
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "70%",
          height: Dimensions.get("window").height / 2,
        }}
      >
        <View>
          <Text
            style={{
              color: "#FFF",
              fontSize: language === 2 ? 33 : 30,
              lineHeight: 50,
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              textAlign: "center",
            }}
          >
            {language === 0
              ? "Commencez une aventure avec Mystick"
              : language === 1
              ? "Start an adventure with Mystick"
              : "إبدأ مغامرتك مع ميستيك"}
          </Text>
        </View>
        <View
          style={{
            borderRadius: 20,
            overflow: "hidden",
            width: "80%",
          }}
        >
          <Pressable
            android_ripple={{ color: colors.COLOR3 }}
            style={{
              paddingVertical: 10,
              minWidth: "80%",
              backgroundColor: colors.COLOR3 + "AA",
            }}
            onPress={() => setPage(2)}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "RowdiesBold",
                color: "#FFF",
                fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                fontSize: language === 2 ? 22 : 20,
              }}
            >
              {language === 0 ? "Commencer" : language === 1 ? "Start" : "إبدأ"}
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: Dimensions.get("window").height / 2,
        }}
      >
        <Image
          resizeMode="contain"
          style={{
            transform: [
              { translateX: Dimensions.get("window").width / 5 },
              { rotate: "-15deg" },
              { translateY: Dimensions.get("window").height / 16 },
            ],
          }}
          source={require("../../assets/hero/acceuil.png")}
        />
      </View>
    </View>
  );
}
