import {
  Text,
  View,
  ImageBackground,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../data/colors";
import themes from "../data/themes";
import { useDispatch, useSelector } from "react-redux";
import * as Animatable from "react-native-animatable";
import { Audio } from "expo-av";
import { addBadgeHandler } from "../redux/profilesSlice";

export default function Results({ navigation, route }) {
  const { index, score } = route.params;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const profiles = useSelector((state) => state.profiles.value);
  const selectedProfile = useSelector((state) => state.selectedProfile.value);
  const [profile, setProfile] = useState(profiles[selectedProfile]);
  const [stars, setStars] = useState(null);
  const [levels, setLevels] = useState(profile.levels);
  const [sound, setSound] = useState(null);
  // music Setup
  const setup = async () => {
    try {
      await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
      const { sound: audioSound } = await Audio.Sound.createAsync(
        stars > 1
          ? require("../../assets/sounds/good_game.mp3")
          : require("../../assets/sounds/game_over.mp3")
      );
      await audioSound.playAsync();
      setSound(audioSound);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    if (stars != null) {
      if (profiles[selectedProfile].music) setup();
    }
  }, [stars]);

  useEffect(() => {
    return () => {
      sound && sound.unloadAsync();
    };
  });

  useEffect(() => {
    if (
      score >=
      ((80 * themes[index].questions.length) / 100) * 30 +
        ((10 * themes[index].questions.length) / 100) * 20 +
        ((5 * themes[index].questions.length) / 100) * 10
    )
      setStars(3);
    else if (
      score >=
      ((60 * themes[index].questions.length) / 100) * 30 +
        ((20 * themes[index].questions.length) / 100) * 20 +
        ((10 * themes[index].questions.length) / 100) * 10
    )
      setStars(2);
    else if (score === 0) setStars(0);
    else setStars(3);
  }, []);

  useEffect(() => {
    if (stars > profile.levels[index].stars) {
      setLevels((existingItems) => {
        return existingItems.map((item, j) => {
          return j === index ? { stars: stars, unLocked: true } : item;
        });
      });
      if (stars >= 2) {
        if (index !== profile.levels.length - 1) {
          setProfile({ ...profile, level: profile.level + 1 });
          setLevels((existingItems) => {
            return existingItems.map((item, j) => {
              return j === index + 1 ? { ...item, unLocked: true } : item;
            });
          });
        }
      }
    }
  }, [stars]);

  useEffect(() => {
    setProfile({ ...profile, levels: levels });
  }, [...levels]);

  useEffect(() => {
    setProfile({ ...profile, score: profile.score + score });
  }, []);

  useEffect(() => {
    if (stars>=2){
      console.log("badge");
      dispatch(addBadgeHandler({selectedProfile,badge : themes[index].badge}));
    }
  }, [stars]);

  return (
    <ImageBackground
      source={themes[index].backgroundGame}
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
      resizeMode={"cover"}
    >
      <View
        style={{
          backgroundColor: "white",
          width: "85%",
          height: (50 * Dimensions.get("window").height) / 100,
          borderRadius: 40,
          alignItems: "center",
          borderWidth: 4,
          borderColor: colors.MAIN,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            borderRadius: 10,
            paddingVertical: 2,
            paddingHorizontal: 7,
            height: (10 * Dimensions.get("window").height) / 100,
          }}
        >
          {Array.from(Array(stars).keys()).map((item, index) => (
            <Animatable.Image
              animation={"zoomIn"}
              delay={index * 500}
              key={item}
              resizeMode="contain"
              style={{ height: 70, width: 70 }}
              source={require("../../assets/icons/star.png")}
            />
          ))}
          {Array.from(Array(3 - stars).keys()).map((item, index) => (
            <Animatable.Image
              animation={"zoomIn"}
              delay={index * 500 + stars * 500}
              key={item}
              resizeMode="contain"
              style={{ height: 70, width: 70 }}
              source={require("../../assets/icons/starempty.png")}
            />
          ))}
        </View>
        <View
          style={{
            height: (20 * Dimensions.get("window").height) / 100,
          }}
        >
          {stars === 3 && (
            <Image
              resizeMode="contain"
              style={{ height: 150, width: 150 }}
              source={require("../../assets/hero/mystick3.png")}
            />
          )}
          {stars === 0 && (
            <Image
              resizeMode="contain"
              style={{ height: 150, width: 150 }}
              source={require("../../assets/hero/mystick5.png")}
            />
          )}
          {stars === 2 && ( //hedi l'image tetbadel
            <Image
              resizeMode="contain"
              style={{ height: 150, width: 150 }}
              source={require("../../assets/hero/mytick4.png")}
            />
          )}
          {stars === 1 && ( //hedi l'image tetbadel
            <Image
              resizeMode="contain"
              style={{ height: 150, width: 150 }}
              source={require("../../assets/hero/mystick9.png")}
            />
          )}
        </View>
        <View style={{ height: (8 * Dimensions.get("window").height) / 100 }}>
          <Text
            style={{
              fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
              fontSize: user.language === 2 ? 28 : 25,
            }}
          >
            {user.language === 0
              ? "Score"
              : user.language === 1
              ? "Score"
              : "مجموع النقاط"}{" : "}
            {score}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
            height: (8 * Dimensions.get("window").height) / 100,
          }}
        >
          <View style={{ borderRadius: 15, width: "45%", overflow: "hidden" }}>
            <Pressable
              android_ripple={{ color: "#FFFFFF20" }}
              onPress={() => {
                navigation.replace("LoadingGame", {
                  profile,
                  destination: 0,
                });
              }}
              style={{
                backgroundColor: colors.MAIN,
                padding: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: user.language === 2 ? 20 : 18,
                  color: "white",
                  textAlign: "center",
                }}
              >
                {user.language === 0
                  ? "Accueil"
                  : user.language === 1
                  ? "Home"
                  : "الصفحة الرئيسية"}
              </Text>
            </Pressable>
          </View>
          <View style={{ borderRadius: 15, width: "45%", overflow: "hidden" }}>
            <Pressable
              android_ripple={{ color: "#FFFFFF20" }}
              onPress={() =>
                navigation.replace("LoadingGame", {
                  profile,
                  destination: 1,
                })
              }
              style={{
                backgroundColor: colors.MAIN,
                padding: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: user.language === 2 ? 20 : 18,
                  color: "white",
                  textAlign: "center",
                }}
              >
                {user.language === 0
                  ? "Mode histoire"
                  : user.language === 1
                  ? "Story mode"
                  : "وضع القصة"}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
