import React, { useEffect, useRef } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Text,
  Vibration,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import Profil from "../components/Profil";
import colors from "../data/colors";
import themes from "../data/themes";
import * as Animatable from "react-native-animatable";
import ThemeCard from "../components/ThemeCard";
export default function SelectTheme({ navigation }) {
  const profiles = useSelector((state) => state.profiles.value);
  const selectedProfile = useSelector((state) => state.selectedProfile.value);
  const language = useSelector((state) => state.user.value.language);
  const heroRef = useRef(null);
  const sound = useSelector((state) => state.music.value);
  useEffect(() => {
    if (profiles[selectedProfile].music) {
      play();
    }
  }, []);
  const play = async () => {
    try {
      await sound.playAsync();
    } catch (e) {
      throw e;
    }
  };
  return (
    <View
      style={{
        backgroundColor: colors.MAIN,
        height: "100%",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: (10 * Dimensions.get("window").height) / 100,
          flexDirection: language === 2 ? "row-reverse" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: 20,
        }}
      >
        <Animatable.View animation={"zoomIn"} duration={700}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
              }}
              source={require("../../assets/icons/sortir.png")}
            />
          </Pressable>
        </Animatable.View>
        <Animatable.View
          animation={"fadeInDown"}
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            borderRadius: 10,
            backgroundColor: "white",
          }}
        >
          <Text
            style={{
              fontFamily: "RowdiesBold",
              fontSize: 16,
              marginHorizontal: 7,
              color: "black",
              height: "100%",
            }}
          >
            {profiles[selectedProfile].score}
          </Text>
          <Image
            resizeMode="contain"
            style={{ width: 22, height: 22 }}
            source={require("../../assets/icons/gold.png")}
          />
        </Animatable.View>
        <View>
          <Profil language={language} />
        </View>
      </View>
      <View
        style={{
          height: (7 * Dimensions.get("window").height) / 100,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
            fontSize: language === 2 ? 26 : 24,
            color: "white",
          }}
        >
          {language === 0
            ? "Mode histoire"
            : language === 1
            ? "History Mode"
            : "نمط القصة"}
        </Text>
      </View>
      <View
        style={{
          height: (23 * Dimensions.get("window").height) / 100,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      >
        <Animatable.View
          animation={language === 2 ? "fadeInRight" : "fadeInLeft"}
          duration={1000}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{ overflow: "hidden", borderRadius: 20, maxHeight: "100%" }}
          >
            <Pressable
              android_ripple={{ color: "#FFFFFFDD" }}
              onLongPress={() => {
                heroRef.current?.shake();
                Vibration.vibrate(200);
              }}
              style={{
                backgroundColor: "#FFFFFF90",
                flexDirection: language === 2 ? "row-reverse" : "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: language === 2 ? 22 : 20,
                  width: "65%",
                  textAlign: "center",
                }}
              >
                {language === 0
                  ? "Termines ton niveau pour débloquer des nouveaux !"
                  : language === 1
                  ? "Finish your level to unlock others !"
                  : "أكمل مستواك الحالي لتفتح مستويات أخرى !"}
              </Text>
              <Animatable.View ref={heroRef} style={{ width: "35%" }}>
                <Image
                  resizeMode="contain"
                  style={{
                    width: "100%",
                    transform: [
                      { rotateY: language === 2 ? "0deg" : "180deg" },
                    ],
                  }}
                  source={require("../../assets/hero/mystick0.png")}
                />
              </Animatable.View>
            </Pressable>
          </View>
        </Animatable.View>
      </View>
      <View
        style={{
          height: (60 * Dimensions.get("window").height) / 100,
          paddingHorizontal: 20,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#FFFFFFBB",
            width: "100%",
            height: "90%",
            alignItems: "center",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              height: "15%",
              width: "100%",
              borderBottomColor: colors.MAIN,
              borderBottomWidth: 3,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                fontSize: language === 2 ? 24 : 22,
                textAlign: "center",
                color: colors.MAIN,
              }}
            >
              {language === 0
                ? "La carte"
                : language === 1
                ? "The Map"
                : "الخريطة"}
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              paddingHorizontal: 10,
              height: "85%",
              overflow: "hidden",
            }}
          >
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={(_, index) => index}
              data={themes}
              renderItem={({ item, index }) => (
                <View>
                  <ThemeCard
                    navigation={navigation}
                    index={index}
                    item={item}
                    profiles={profiles}
                    language={language}
                    selectedProfile={selectedProfile}
                    background={item.background}
                    unlocked={profiles[selectedProfile].levels[index].unLocked}
                    name={item.name}
                    stars={profiles[selectedProfile].levels[index].stars}
                  />
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
