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
import * as Animatable from "react-native-animatable";
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
          height: "50%",
        }}
      >
        <Animatable.View animation={"fadeInDown"} duration={1000}>
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
        </Animatable.View>
        <Animatable.View
          animation={"fadeInUp"}
          duration={1000}
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
        </Animatable.View>
      </View>
      <Animatable.View
        animation={"pulse"}
        iterationCount={"infinite"}
        duration={1000}
        style={{
          flexDirection: "row",
          height: "50%",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <Image
          resizeMode="contain"
          style={{}}
          source={require("../../assets/hero/acceuil.png")}
        />
      </Animatable.View>
    </View>
  );
}
