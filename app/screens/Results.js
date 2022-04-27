import { Text, View, ImageBackground, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../data/colors";
import themes from "../data/themes";
import { useDispatch, useSelector } from "react-redux";

export default function Results({ navigation, route }) {
  const { index, score } = route.params;
  const profiles = useSelector((state) => state.profiles.value);
  const selectedProfile = useSelector((state) => state.selectedProfile.value);
  const [profile, setProfile] = useState(profiles[selectedProfile]);
  const [stars, setStars] = useState(0);
  const [levels, setLevels] = useState(profile.levels);
  const [newScore,setNewScore] = useState(profile.score + score);
  useEffect(() => {
    if (score === themes[index].questions.length * 300) setStars(3);
    else if (score >= themes[index].questions.length * 300) setStars(2);
    else if (score === 0) setStars(0);
    else setStars(1);
  }, []);

  useEffect(() => {
    if (stars > profile.levels[index].stars) {
      setLevels((existingItems) => {
        return existingItems.map((item, j) => {
          return j === index ? { stars: stars, unLocked: true } : item;
        });
      });
      if (stars === 3) {
        if (index !== profile.levels.length - 1) {
          setProfile({ ...profile, level: profile.level + 1 });
          setLevels((existingItems) => {
            return existingItems.map((item, j) => {
              return j === index + 1 ? { stars: 0, unLocked: true } : item;
            });
          });
        }
      }
    }
  }, [stars]);

  useEffect(() => {
    setProfile({ ...profile, levels: levels,score : newScore });
  }, levels);

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
          height: "40%",
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
          }}
        >
          {Array.from(Array(stars).keys()).map((item) => (
            <Image
              key={item}
              resizeMode="contain"
              style={{ height: 70, width: 70 }}
              source={require("../../assets/icons/star.png")}
            />
          ))}
          {Array.from(Array(3 - stars).keys()).map((item) => (
            <Image
              key={item}
              resizeMode="contain"
              style={{ height: 70, width: 70 }}
              source={require("../../assets/icons/starempty.png")}
            />
          ))}
        </View>
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
        {(stars === 2 || stars === 1) && ( //hedi l'image tetbadel
          <Image
            resizeMode="contain"
            style={{ height: 150, width: 150 }}
            source={require("../../assets/hero/mystick9.png")}
          />
        )}

        <Text
          style={{
            fontSize: 25,
            fontFamily: "RowdiesBold",
          }}
        >
          {" "}
          Score : {score}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <Pressable
            onPress={() => {
              navigation.replace("LoadingGame", {
                profile,
                destination: 0,
              });
            }}
            style={{
              backgroundColor: colors.MAIN,
              padding: 10,
              borderRadius: 15,
              width: "40%",
            }}
          >
            <Text
              style={{
                fontFamily: "RowdiesBold",
                fontSize: 18,
                color: "white",
                textAlign: "center",
              }}
            >
              Home
            </Text>
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.replace("LoadingGame", {
                profile,
                destination: 1,
              })
            }
            style={{
              backgroundColor: colors.MAIN,
              padding: 10,
              borderRadius: 15,
              width: "40%",
            }}
          >
            <Text
              style={{
                fontFamily: "RowdiesBold",
                fontSize: 18,
                color: "white",
                textAlign: "center",
              }}
            >
              Story Mode
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}
